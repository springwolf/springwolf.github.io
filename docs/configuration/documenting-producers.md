---
sidebar_position: 64
---

# Producers

Unlike consumers which are defined declaratively with an annotation, producers are defined imperatively, and there is no implementation uniform enough so that metadata can be picked up automatically.

Because producers are also an important part of AsyncAPI, Springwolf provides a way to explicitly add them to the generated document.

To document producers, either:
- add the `@AsyncPublisher` annotation or
- (deprecated) declare the `ProducerData` object as part of the `AsyncApiDocket`

You are free to use all options together. Per channel and operation, first `ProducerData` is used, then `@AsyncPublisher`.

## Option 1: `@AsyncPublisher`

The `@AsyncPublisher` annotation is added to the method of the publisher and extracts the payload from its arguments.
Additional fields can be documented.

The protocol operation binding is configured via `@AmqpAsyncOperationBinding`, `@KafkaAsyncOperationBinding` or `@AsyncGenericOperationBinding`, which has to be on the same method.

Below is an example to demonstrate the annotation:
```java
@AsyncPublisher(operation = @AsyncOperation(
        channelName = "example-producer-topic",
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

### Header

Optional. The headers describing the metadata of the payload.

### Servers

Optional. Useful when an application is connect to multiple brokers and wants to indicate to which broker the channel belongs to.
The server needs to exist in [configuration > Servers](configuration.md) as well.


## Option 2: `ProducerData` (deprecated)

:::note
Must use configuration via `AsyncApiDocket` and can't use `application.properties`.
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

:::tip
Use specific ProducerData types `AmqpProducerData` & `KafkaProducerData` for protocol specific attributes.
:::

### Channel Name

The channel name (or topic name in case of Kafka) - this is the name that will be used to publish messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Binding

This property is used to discriminate the producer's protocol and provide protocol-specific properties (see [documenting bindings](documenting-bindings.md)).

### Payload Type

The class object of the payload that will be published to this channel.

### Header

Optional. The headers describing the metadata of the payload.
By default, `AsyncHeaders.NOT_DOCUMENTED` is used to indicate that no explicit header documentation exists.
Use `AsyncHeaders` to add your custom headers, use `AsyncHeaders.NOT_USED` if you don't use headers and `AsyncHeadersForCloudEventsBuilder` if your events follow the CloudEvent specification.


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
