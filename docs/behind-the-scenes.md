---
sidebar_position: 70
---

# Behind the scenes

The following paragraphs describe how Springwolf works internally.

## Big Picture
When the Spring Boot application is started, Springwolf uses its scanners to find defined consumers and producers within the application.
Based on the results, the channels/topics are extracted including payload type and merged together into an [AsyncAPI conform document](https://www.asyncapi.com/docs/reference/specification/v2.6.0).

The AsyncAPI document is accessible an endpoint.
When the Springwolf UI is opened, the browser fetches the document and renders it (see demo).

When publishing is enabled, the user can publish a message through the UI to another endpoint.
From there, Springwolf forwards the message to the protocol specific producer.

## Plugins
`springwolf-core` provides the base functionality to orchestrate the scanning and building of the AsyncAPI document.
The different protocol (AMQP, Cloud-Stream, JMS, Kafka, SNS, SQS) are supported through plugins.
These plugins are found through the Spring dependency injection functionality.
When building own scanner plugins, your plugin will need to implement the `ChannelsScanner` interface.

## Scanners
`springwolf-core` runs all scanners and merges the found results together into one AsyncAPI document.
When the same channel/topic is found multiple times, it's merged as well.

The result is a [`ChannelItem`](https://www.asyncapi.com/docs/reference/specification/v2.6.0#channelItemObject).
The `ChannelObject` contains the `Message` for the receive and/or send operation.

## Building an example payload
When the scanners scan and build the result, they also extract the payload type.
The payload is registered in the `ComponentsService`, which allows to split the `Message` from the schema definition - within the AsyncAPI doc a `$ref` references is used.

Using `swagger-core` any class can be converted into an OpenApi schema.
The schema is [mapped into an AsyncAPI schema](https://www.asyncapi.com/docs/tutorials/getting-started/coming-from-openapi) and included in the AsyncAPI document.
Additionally, Springwolf generates an example based on the provided schema.

By using `swagger-parser`, all the `@Schema` and other swagger annotations are supported as well as `@JsonProperty` through the use of the objectmapper.

### ModelConverters
ModelConverters provide a way to improve documentation for classes, which can't be modified, for example because they're part of an external library.
They follow the same plugin model.

## Putting it all together
The `AsyncApiService` collects all the channels, schemas and general info and builds the AsyncApi document.
The controller access this services to serve the document to the UI.
