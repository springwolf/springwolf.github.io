---
sidebar_position: 5
---

# Manually Documenting Consumers

Sometimes projects are configured in a way that makes Springwolf unable to automatically locate consumers, producers are defined imperatively (They don't have the `@KafkaListener` or `@RabbitListener` annotations on the consuming methods).

Because there is still immense value in documenting the consumers, Springwolf provides a way to explicitly add them to the generated document, by declaring them in the `AsyncApiDocket` using the `ConsumerData` object.

## `ConsumerData`

:::tip
Use specific ConsumerData types `AmqpConsumerData` & `KafkaConsumerData` for protocol specific attributes
:::

Below is an example of describing a Kafka consumer:

```java
@Bean
public AsyncApiDocket asyncApiDocket() {

    ConsumerData exampleConsumerData = ConsumerData.builder()
            .channelName("example-consumer-topic")
            .description("Optional. Customer uploaded an example payload")
            .operationBinding(ImmutableMap.of("kafka", new KafkaOperationBinding()))
            .payloadType(ExamplePayloadDto.class)
            .headers(AsyncHeaders.NOT_USED)
            .build();
  
    return AsyncApiDocket.builder()
            .basePackage(...)
            .info(...)
            .server(...)
            .consumer(exampleConsumerData)
            .build();
}
```

Multiple consumers can be configured by calling the `consumer()` method multiple times.

### Channel Name

The channel name (or topic name in case of Kafka) - this is the name that will be used to subscribe to messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Binding

This property is used to discriminate the consumer's protocol and provide protocol-specific properties (see [Operation Binding Object](https://www.asyncapi.com/docs/specifications/v2.0.0#operationBindingsObject)).

### Payload Type

The class object of the payload that will be consumed from this channel.

### Header

Optional. The headers describing the metadata of the payload.
By default, `AsyncHeaders.NOT_DOCUMENTED` is used to indicate that no explicit header documentation exists.
Use `AsyncHeaders` to add your custom headers, use `AsyncHeaders.NOT_USED` if you do not use headers and `AsyncHeadersForCloudEventsBuilder` if your events follow the CloudEvent specification.


## `AmqpConsumerData`

The above Kafka `ConsumerData` equivalent in `AmqpConsumerData`:
```java
    AmqpConsumerData exampleConsumer = AmqpConsumerData.amqpConsumerDataBuilder()
        .queueName("example-consumer-channel")
        .description("example-consumer-channel-description")
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

The class object of the payload that will be consumed from this channel.

### Example

See a full example [here](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-amqp-example/src/main/java/io/github/stavshamir/springwolf/example/configuration/AsyncApiConfiguration.java).


## `KafkaConsumerData`

The above Kafka `ConsumerData` simplifies to the following `KafkaConsumerData`:
```java
    KafkaConsumerData exampleConsumerData = KafkaConsumerData.kafkaConsumerDataBuilder()
        .topicName("example-consumer-topic")
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

The class object of the payload that will be consumed from this channel.

### Headers

The Kafka headers describing the metadata of the payload, more details in the generic ConsumerData.

The Springwolf Kafka plugin comes with a special `AsyncHeadersForSpringKafkaBuilder` to document the `__TypeId__` header of the spring-kafka dependency.


### Example

See a full example [here](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/src/main/java/io/github/stavshamir/springwolf/example/configuration/AsyncApiConfiguration.java).
