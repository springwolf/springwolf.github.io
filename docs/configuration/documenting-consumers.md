---
sidebar_position: 60
---

# Consumers

Springwolf comes with build-in support to auto-detect listeners of supported protocols.

Sometimes projects are configured in a way that makes Springwolf unable to automatically locate consumers or the generated documentation is insufficient.
For these use-cases, Springwolf provides additional ways to explicitly add them to the generated document.

To document consumers, either:
- add the `@AsyncListener` annotation or
- (deprecated) declare the `ConsumerData` object as part of the `AsyncApiDocket` or
- rely on the auto-detection of `@JmsListener`, `@KafkaListener`, `@RabbitListener`, `@SqsListener`

You are free to use all options together. Per channel and operation, first `ConsumerData` is used, then `@AsyncListener` and last the auto-detected annotations.

## Option 1: `@AsyncListener`

The `@AsyncListener` annotation is added to the method of the listeners and extracts the payload from its arguments.
Additional fields can be documented.

The protocol operation binding is configured via `@AmqpAsyncOperationBinding`, `@KafkaAsyncOperationBinding` or `@AsyncGenericOperationBinding`, which has to be on the same method.

Below is an example to demonstrate the annotation:
```java
@KafkaListener
@AsyncListener(operation = @AsyncOperation(
        channelName = "example-consumer-topic",
        description = "Optional. Customer uploaded an example payload",
        servers = {"kafka"},
        headers = @AsyncOperation.Headers(
                schemaName = "SpringKafkaDefaultHeaders",
                values = {
                        @AsyncOperation.Headers.Header(
                                name = DEFAULT_CLASSID_FIELD_NAME,
                                description = "Spring Type Id Header",
                                value = "io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto"
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
public void receiveMessage(ExamplePayloadDto msg) {
    // process
}
```

:::note
Springwolf only finds methods that are within the `base-package`.
:::

### Channel Name

The channel name (or topic name in case of Kafka) - this is the name that will be used to subscribe to messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Header

Optional. The headers describing the metadata of the payload.

### Servers

Optional. Useful when an application is connect to multiple brokers and wants to indicate to which broker the channel belongs to.
The server needs to exist in [configuration > Servers](configuration.md) as well.


## Option 2: `ConsumerData` (deprecated)

:::note
Must use configuration via `AsyncApiDocket` and can't use `application.properties`.
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

:::tip
Use specific ConsumerData types `AmqpConsumerData` & `KafkaConsumerData` for protocol specific attributes
:::

### Channel Name

The channel name (or topic name in case of Kafka) - this is the name that will be used to subscribe to messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Binding

This property is used to discriminate the producer's protocol and provide protocol-specific properties (see [documenting bindings](documenting-bindings.md)).

### Payload Type

The class object of the payload that will be consumed from this channel.

### Header

Optional. The headers describing the metadata of the payload.
By default, `AsyncHeaders.NOT_DOCUMENTED` is used to indicate that no explicit header documentation exists.
Use `AsyncHeaders` to add your custom headers, use `AsyncHeaders.NOT_USED` if you don't use headers and `AsyncHeadersForCloudEventsBuilder` if your events follow the CloudEvent specification.


### `AmqpConsumerData`

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

### `KafkaConsumerData`

The above Kafka `ConsumerData` simplifies to the following `KafkaConsumerData`:
```java
    KafkaConsumerData exampleConsumerData = KafkaConsumerData.kafkaConsumerDataBuilder()
        .topicName("example-consumer-topic")
        .description("Optional. Customer uploaded an example payload")
        .payloadType(ExamplePayloadDto.class)
        .headers(AsyncHeaders.NOT_USED)
        .build();
```


## Option 3: `@JmsListener`, `@KafkaListener`, `@RabbitListener`, `@SqsListener`
The `@JmsListener`, `@KafkaListener`, `@RabbitListener`, `@SqsListener` annotations are detected automatically.
There is nothing more to do.
Use the other options if the provided documentation is insufficient.
