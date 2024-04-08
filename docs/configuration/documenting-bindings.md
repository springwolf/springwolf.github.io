---
sidebar_position: 66
---

# Bindings

To indicate the binding (protocol) that's documented, there are multiple options to document them.
Add at least one binding so that readers know the protocol in use and functionality like publishing works.

To use the protocol specific bindings, ensure that you have added the corresponding [plugin](../introduction/supported-protocols.md).

## Protocol specific annotations

### `@AmqpAsyncOperationBinding`

Associate this operation with AMQP, see [operation-binding] for details.

```java
@AmqpAsyncOperationBinding(cc = "example-topic-routing-key")
```

### `@KafkaAsyncOperationBinding`

Associate this operation with Kafka, see [operation-binding] for details.

```java
@KafkaAsyncOperationBinding(
        bindingVersion = "1"
)
```

### `@JmsAsyncOperationBinding`

Associate this operation with JMS, see [operation-binding] for details.

```java
@JmsAsyncOperationBinding
```

### `@SnsAsyncOperationBinding`

Associate this operation with SNS, see [operation-binding] for details.

```java
@SnsAsyncOperationBinding
```

### `@SqsAsyncOperationBinding`

Associate this operation with SQS, see [operation-binding] for details.

```java
@SqsAsyncOperationBinding
```

## Generic annotation

This binding is generic, so that any properties can be specified.

### `@AsyncGenericOperationBinding`

You can define anything and there is no validation.

```java
@AsyncGenericOperationBinding(
    type = "custom-binding",
    fields = {
        "internal-field=customValue",
        "nested.key=nestedValue"
    }
)
```

## Binding properties

Explanation of the different binding properties.

### General

The following properties are the same for all bindings.

#### Queue Name (Channel Name)

The queue name that will be used to publish messages to by the UI.

#### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

#### Payload Type

The class object of the payload that will be published to this channel.

#### Headers

The Kafka headers describing the metadata of the payload, more details in the generic ProducerData.

The Springwolf comes with a special `AsyncHeadersCloudEventConstants` to document CloudEvents.

The `kafka` header `__TypeId__` (constant from `AbstractJavaTypeMapper.DEFAULT_CLASSID_FIELD_NAME`) can be documented as well.

### AMQP

#### Exchange Name

The exchange name that will be used to bind queues to.

#### Routing Key

The routing key used when publishing a message.

### Kafka

#### Group Id

The group id that will be used during message consumption

#### Client Id

The client id to identify the consumer

### Google PubSub binding annotations

#### Channel Binding Object

The Channel Bindings Object is used to describe the Google Cloud Pub/Sub Topic details.

```java
@GooglePubSubAsyncChannelBinding(
            messageRetentionDuration = "messageRetentionDuration",
            messageStoragePolicy =
                    @GooglePubsubAsyncMessageStoragePolicy(allowedPersistenceRegions = {"region1", "region2"}),
            schemaSettings =
                    @GooglePubSubAsyncSchemaSetting(
                            encoding = "BINARY",
                            firstRevisionId = "firstRevisionId",
                            lastRevisionId = "lastRevisionId",
                            name = "projects/{project}/schemas/{schema}"))
```

`MessageRetentionDuration`: Indicates the minimum duration to retain a message after it's published to the topic

`Message Storage Policy`: The Message Storage Policy Object is used to describe the Google Cloud Pub/Sub MessageStoragePolicy.

- A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage

`Schema Settings`:The Schema Settings Object is used to describe the Google Cloud Pub/Sub SchemaSettings.

- encoding: The encoding of the message
- firstRevisionId: The minimum (inclusive) revision allowed for validating messages
- lastRevisionId: The maximum (inclusive) revision allowed for validating messages
- name: The name of the schema that messages published should be validated against (The format is `projects/{project}/schemas/{schema}`.)

#### Message Binding Object

The Message Binding Object is used to describe the Google Cloud Pub/Sub PubsubMessage details, alongside with pertinent parts of the Google Cloud Pub/Sub Schema Object.

```java
@GooglePubSubAsyncMessageBinding(
            orderingKey = "key",
            schema = @GooglePubSubAsyncMessageSchema(name = "projects/{project}/schemas/{schema}"))
```

`OrderingKey`: If non-empty, identifies related messages for which publish order should be respected

`Schema Definition`: The Schema Definition Object is used to describe the Google Cloud Pub/Sub Schema Object with AsyncAPI. While some of this information could be, or is, described using native AsyncAPI, for consistency it makes sense to provide this information here at all times, especially for cases where AsyncAPI doesn't natively support describing payloads using a supported Google Cloud Pub/Sub schema format like Protobuf

- name: The name of the schema

[operation-binding]: https://www.asyncapi.com/docs/reference/specification/v3.0.0#operationBindingsObject
