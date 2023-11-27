---
sidebar_position: 66
---

# Bindings

To indicate the binding (protocol) that's documented, there are multiple options to document them.
Add at least one binding so that readers know the protocol in use and functionality like publishing works.

To use the protocol specific bindings, ensure that you have added the corresponding [plugin](../introduction/supported-protocols.md).

## Option 1: Annotations

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

### `@AsyncGenericOperationBinding`

This binding is generic, so that any properties can be specified.
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

## Option 2: AsyncApiDocket (deprecated)

### `AmqpProducerData` / `AmqpConsumerData`

```java
    AmqpProducerData exampleProducer = AmqpProducerData.amqpProducerDataBuilder()
        .queueName("example-producer-channel")
        .description("example-producer-channel-description")
        .exchangeName("example-topic-exchange")
        .routingKey("example-topic-routing-key")
        .payloadType(AnotherPayloadDto.class)
        .build();
```

### `KafkaProducerData` / `KafkaConsumeData`

```java
    KafkaProducerData exampleProducerData = KafkaProducerData.kafkaProducerDataBuilder()
        .topicName("example-producer-topic")
        .description("Optional. Customer uploaded an example payload")
        .payloadType(ExamplePayloadDto.class)
        .headers(AsyncHeaders.NOT_USED)
        .build();
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

The `kafka` header `__TypeId__` (constant from ` AbstractJavaTypeMapper.DEFAULT_CLASSID_FIELD_NAME`) can be documented as well.

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

[operation-binding]: https://www.asyncapi.com/docs/reference/specification/v2.6.0#operationBindingsObject
