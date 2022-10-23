---
sidebar_position: 5
---

# Documenting Producers

Unlike consumers which are defined declaratively with an annotation, producers are defined imperatively, and there is no implementation uniform enough so that metadata can be picked up automatically.

Because producers are also an important part of Async APIs, Springwolf provides a way to explicitly add them to the generated document, by declaring them in the `AsyncApiDocket` using the `ProducerData` object.

## `ProducerData`

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

This property is used to discriminate the producer's protocol and provide protocol-specific properties (see [Operation Binding Object](https://www.asyncapi.com/docs/specifications/v2.0.0#operationBindingsObject)).

### Payload Type

The class object of the payload that will be published to this channel.

### Header

Optional. The headers describing the metadata of the payload.
By default, `AsyncHeaders.NOT_DOCUMENTED` is used to indicate that no explicit header documentation exists.
Use `AsyncHeaders` to add your custom headers, use `AsyncHeaders.NOT_USED` if you do not use headers and `AsyncHeadersForCloudEventsBuilder` if your events follow the CloudEvent specification.


## `AmqpProducerData`

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

### Example

See a full example [here](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-amqp-example/src/main/java/io/github/stavshamir/springwolf/example/configuration/AsyncApiConfiguration.java).


## `KafkaProducerData`

The above Kafka `ProducerData` simplifies to the following `KafkaProducerData`:
```java
    KafkaProducerData exampleProducerData = KafkaProducerData.kafkaProducerDataBuilder()
        .topicName("example-producer-topic")
        .description("Optional. Customer uploaded an example payload")
        .payloadType(ExamplePayloadDto.class)
        .headers(AsyncHeaders.NOT_USED)
        .build();
```

### Topic Name (Channel Name)

The topic name that will be used to publish messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Payload Type

The class object of the payload that will be published to this channel.

### Headers

The Kafka headers describing the metadata of the payload, more details in the generic ProducerData.

The Springwolf Kafka plugin comes with a special `AsyncHeadersForSpringKafkaBuilder` to document the `__TypeId__` header of the spring-kafka dependency.

### Example

See a full example [here](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/src/main/java/io/github/stavshamir/springwolf/example/configuration/AsyncApiConfiguration.java).
