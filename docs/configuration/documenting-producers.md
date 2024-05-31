---
sidebar_position: 64
---

# Producers

Unlike consumers which are defined declaratively with an annotation,
producers are defined imperatively (that's `KafkaTemplate`),
and there is no implementation uniform enough so that metadata can be picked up automatically.

Because producers are also an important part of AsyncAPI,
Springwolf provides a way to explicitly add them to the generated document using the `@AsyncPublisher` annotation.

## `@AsyncPublisher`

The `@AsyncPublisher` annotation is added to the method of the publisher and extracts the payload from its arguments.
Additional fields can be documented.

On the same method, the protocol binding is defined. More details can be found in the [bindings](documenting-bindings.md) section.

Below is an example to demonstrate the annotation:

```java
@AsyncPublisher(operation = @AsyncOperation(
        channelName = "example-producer-topic",
        description = "Customer uploaded an example payload", // Optional
        servers = {"kafka-server"}, // Optional
        headers = @AsyncOperation.Headers( // Optional
                schemaName = "SpringKafkaDefaultHeaders",
                values = {
                        @AsyncOperation.Headers.Header(
                                name = DEFAULT_CLASSID_FIELD_NAME,
                                description = "Spring Type Id Header",
                                value = "io.github.springwolf.example.dtos.ExamplePayloadDto"
                        ),
                        // (demonstrating https://cloudevents.io) 
                        @AsyncOperation.Headers.Header(
                                name = AsyncHeadersCloudEventConstants.TYPE,
                                description = AsyncHeadersCloudEventConstants.TYPE_DESC,
                                value = "NestedPayloadDto.v1")
                        // ...
                }
        )
))
@KafkaAsyncOperationBinding
public void sendMessage(ExamplePayloadDto msg) {
    // process
}
```

:::note
Springwolf only finds methods that are within the `base-package`.
:::

### Channel Name

The channel name (or topic name in case of Kafka) - this is the name that will be used to publish messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Header

Optional. The headers describing the metadata of the payload.

### Servers

Optional. Useful when an application is connect to multiple brokers and wants to indicate to which broker the channel belongs to.
The server name needs to exist in [configuration > Servers](configuration.mdx) as well.
