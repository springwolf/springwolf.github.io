---
sidebar_position: 64
---

# Producers

Unlike consumers which are defined declaratively with an annotation, producers are defined imperatively, and there is no implementation uniform enough so that metadata can be picked up automatically.

Because producers are also an important part of Async APIs, Springwolf provides a way to explicitly add them to the generated document.

To document producers, either:
- add the `@AsyncPublisher` annotation or
- declare the `ProducerData` object as part of the `AsyncApiDocket`

You are free to use all options together. Per channel and operation, first `ProducerData` is used, then `@AsyncPublisher`.

## Option 1: `@AsyncPublisher`

The `@AsyncPublisher` annotation is added to the method of the publisher and extracts the payload from its arguments.
Additional fields can be documented.

The protocol operation binding is configured via `@AmqpAsyncOperationBinding` or `@KafkaAsyncOperationBinding`, which has to be on the same method.

Below is an example to demonstrate the annotation:
```java
@AsyncPublisher(operation = @AsyncOperation(
        channelName = "example-producer-topic",
        description = "Optional. Customer uploaded an example payload",
        headers = @AsyncOperation.Headers(
                schemaName = "SpringKafkaDefaultHeaders",
                values = {
                        @AsyncOperation.Headers.Header(
                                name = DEFAULT_CLASSID_FIELD_NAME,
                                description = "Spring Type Id Header",
                                value = "io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto"
                        ),
                }
        )
))
@KafkaAsyncOperationBinding
public void sendMessage(ExamplePayloadDto msg) {
    // send
}
```

:::note
Springwolf only finds methods that are within the `base-package`.
:::

### Channel Name

The channel name (or topic name in case of Kafka) - this is the name that will be used to publish messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Payload Type

The class object of the payload that will be published to this channel.
If not specified, it is extracted from the method arguments.

### Header

Optional. The headers describing the metadata of the payload.

### `@AmqpAsyncOperationBinding`

Associate this operation with amqp, see [operation-binding] for details.

```java
@AmqpAsyncOperationBinding(cc = "example-topic-routing-key")
```

### `@KafkaAsyncOperationBinding`

Associate this operation with kafka, see [operation-binding] for details.

```java
@KafkaAsyncOperationBinding(
        bindingVersion = "1"
)
```


## Option 2: `ProducerData`

:::tip
Use specific ProducerData types `AmqpProducerData` & `KafkaProducerData` for protocol specific attributes
:::

Below is an example of describing a Kafka producer:

```java
@Bean
public AsyncApiDocket asyncApiDocket() {

    ProducerData exampleProducerData = ProducerData.builder()
            .channelName("example-producer-topic")
            .description("Optional. Customer uploaded an example payload")
            .operationBinding(ImmutableMap.of("kafka", new KafkaOperationBinding()))
            .payloadType(ExamplePayloadDto.class)
            .headers(AsyncHeaders.NOT_USED)
            .build();
  
    return AsyncApiDocket.builder()
            .basePackage(...)
            .info(...)
            .server(...)
            .producer(exampleProducerData)
            .build();
}
```

Multiple producers can be configured by calling the `producer()` method multiple times.

### Channel Name

The channel name (or topic name in case of Kafka) - this is the name that will be used to publish messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Binding

This property is used to discriminate the producer's protocol and provide protocol-specific properties (see [operation-binding])).

### Payload Type

The class object of the payload that will be published to this channel.

### Header

Optional. The headers describing the metadata of the payload.
By default, `AsyncHeaders.NOT_DOCUMENTED` is used to indicate that no explicit header documentation exists.
Use `AsyncHeaders` to add your custom headers, use `AsyncHeaders.NOT_USED` if you do not use headers and `AsyncHeadersForCloudEventsBuilder` if your events follow the CloudEvent specification.


### `AmqpProducerData`

The above Kafka `ProducerData` equivalent in `AmqpProducerData`:
```java
    AmqpProducerData exampleProducer = AmqpProducerData.amqpProducerDataBuilder()
        .queueName("example-producer-channel")
        .description("example-producer-channel-description")
        .exchangeName("example-topic-exchange")
        .routingKey("example-topic-routing-key")
        .payloadType(AnotherPayloadDto.class)
        .build();
```

### `KafkaProducerData`

The above Kafka `ProducerData` simplifies to the following `KafkaProducerData`:
```java
    KafkaProducerData exampleProducerData = KafkaProducerData.kafkaProducerDataBuilder()
        .topicName("example-producer-topic")
        .description("Optional. Customer uploaded an example payload")
        .payloadType(ExamplePayloadDto.class)
        .headers(AsyncHeaders.NOT_USED)
        .build();
```


## AMQP Parameters
### Queue Name (Channel Name)

The queue name that will be used to publish messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Exchange Name

The exchange name that will be used to bind queues to.

### Routing Key

The routing key used when publishing a message.

### Payload Type

The class object of the payload that will be published to this channel.


## Kafka Parameters

### Topic Name (Channel Name)

The topic name that will be used to publish messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Payload Type

The class object of the payload that will be published to this channel.

### Headers

The Kafka headers describing the metadata of the payload, more details in the generic ProducerData.

The Springwolf Kafka plugin comes with a special `AsyncHeadersForSpringKafkaBuilder` to document the `__TypeId__` header of the spring-kafka dependency.

## Examples

- [AMQP Example](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-amqp-example/src/main/java/io/github/stavshamir/springwolf/example/amqp/configuration/AsyncApiConfiguration.java)
- [Cloud Stream Example](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-cloud-stream-example/src/main/java/io/github/stavshamir/springwolf/example/cloudstream/configuration/AsyncApiConfiguration.java)
- [Kafka Example](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/src/main/java/io/github/stavshamir/springwolf/example/kafka/configuration/AsyncApiConfiguration.java)

[operation-binding]: https://www.asyncapi.com/docs/reference/specification/v2.0.0#operationBindingsObject