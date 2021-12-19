---
sidebar_position: 4
---

# Documenting Producers

Unlike consumers which are defined declaratively with an annotation, producers are defined imperatively, and there is no implementation uniform enough so that metadata can be picked up automatically.

Because producers are also an important part of Async APIs, Springwolf provides a way to explicitly add them to the generated document, by declaring them in the `AsyncApiDocket` using the `ProducerData` object.

## ProducerData

Below is an example of describing a Kafka producer:

```java
@Bean
public AsyncApiDocket asyncApiDocket() {

    ProducerData exampleProducerData = ProducerData.builder()
            .channelName("example-producer-topic")
            .binding(ImmutableMap.of("kafka", new KafkaOperationBinding()))
            .payloadType(ExamplePayloadDto.class)
            .build();
  
    return AsyncApiDocket.builder()
            .basePackage(...)
            .info(...)
            .server(...)
            .producer(exampleProducerData)
            .build();
}
```

### Channel Name

The channel name (or topic name in case of Kafka) - this is the name that will be used to publish messages to by the UI.


### Binding

This property is used to discriminate the producer's protocl and provide protocol-specific properties (see [Operation Binding Object](https://www.asyncapi.com/docs/specifications/v2.0.0#operationBindingsObject)).

### Payload Type

The class object of the payload published to this channel.

## Example

See a full example [here](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/src/main/java/io/github/stavshamir/springwolf/example/configuration/AsyncApiConfiguration.java).