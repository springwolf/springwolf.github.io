---
sidebar_position: 15
---

# Supported Protocols

Besides auto-detection of protocols (native support),
any protocol can be defined using Springwolf custom annotations `@AsyncListener` and `@AsyncPublisher`.

## Native Support

The following protocols are supported natively:

| Protocol        | Auto-detected annotations         | Example Project                           | Latest Plugin Version                                                                                                                                         |
|-----------------|-----------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AMQP (RabbitMQ) | `@RabbitListener`                 | [`springwolf-amqp-example`][amqp]         | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-amqp?color=green&label=springwolf-amqp&style=plastic)                 |
| Cloud Functions | `@Bean` (functional interface)    | [`springwolf-cloud-stream`][cloud-stream] | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-cloud-stream?color=green&label=springwolf-cloud-stream&style=plastic) |
| JMS             | `@JmsListener`                    | [`springwolf-jms-example`][jms]           | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-jms?color=green&label=springwolf-jms&style=plastic)                    |
| Kafka           | `@KafkaListener`, `@KafkaHandler` | [`springwolf-kafka-example`][kafka]       | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-kafka?color=green&label=springwolf-kafka&style=plastic)               |
| SNS             |                                   | [`springwolf-sns-example`][sns]           | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sns?color=green&label=springwolf-sns&style=plastic)                   |
| SQS             | `@SqsListener`                    | [`springwolf-sqs-example`][sqs]           | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sqs?color=green&label=springwolf-sqs&style=plastic)                   |

Check out the example projects, which include a full `docker-compose` setup.
The examples are simple, easy to start with, good for testing and reproducing bugs.

Please [open an issue](https://github.com/springwolf/springwolf-core/issues/new) if you want a protocol to be supported.

## Any protocol

Using [`@AsyncListener`](../configuration/documenting-consumers.md) and [`@AsyncPublisher`](../configuration/documenting-producers.md) any protocol can be documented, although the binding in the AsyncAPI document will remain empty.

The protocols with native support come along with a `@_ProtocolName_Binding` annotation to define protocol specific properties.

### `springwolf-generic-binding` add-on
The `springwolf-generic-binding` add-on allows to document any binding.
This includes bindings not supported by Springwolf, but also any custom fields not part of the AsyncAPI specification.

```java
@AsyncPublisher(...)
@AsyncGenericOperationBinding(
    type = "custom-protocol-binding",
    fields = {
            "internal-field=customValue", 
            "nested.key=nestedValue"})
public void sendMessage(AnotherPayloadDto msg) {
    // publish message
}
```

[amqp]:https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example
[cloud-stream]:https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-cloud-stream-example
[jms]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-jms-example
[kafka]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example
[sns]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-sns-example
[sqs]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-sqs-example
