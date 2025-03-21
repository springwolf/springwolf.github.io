---
sidebar_position: 15
---

# Supported Protocols

Besides auto-detection of protocols (native support),
any protocol can be defined using Springwolf custom annotations `@AsyncListener` and `@AsyncPublisher`.

## Native Support

The following protocols are supported natively:
| Protocol + Demo   | Auto-detected annotations                   | Example Project                           | Latest Version                                                                                                                                         |
|-------------------|---------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [AMQP (RabbitMQ)](https://amqp.demo.springwolf.dev)   | `@RabbitListener`                           | [`springwolf-amqp-example`][amqp]         | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-amqp?color=green&label=springwolf-amqp&style=plastic)                 |
| [Cloud Functions](https://cloud-stream.demo.springwolf.dev)   | `@Bean` (functional interface)              | [`springwolf-cloud-stream`][cloud-stream] | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-cloud-stream?color=green&label=springwolf-cloud-stream&style=plastic) |
| [JMS](https://jms.demo.springwolf.dev)               | `@JmsListener`                              | [`springwolf-jms-example`][jms]           | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-jms?color=green&label=springwolf-jms&style=plastic)                   |
| [Kafka](https://kafka.demo.springwolf.dev)             | `@KafkaListener`, `@KafkaHandler`           | [`springwolf-kafka-example`][kafka]       | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-kafka?color=green&label=springwolf-kafka&style=plastic)               |
| [SNS](https://sns.demo.springwolf.dev)               |                                             | [`springwolf-sns-example`][sns]           | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sns?color=green&label=springwolf-sns&style=plastic)                   |
| [SQS](https://sqs.demo.springwolf.dev)               | `@SqsListener`                              | [`springwolf-sqs-example`][sqs]           | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sqs?color=green&label=springwolf-sqs&style=plastic)                   |
| [STOMP (WebSocket)](https://stomp.demo.springwolf.dev) | `@MessageMapping`, `@SendTo`, `@SendToUser` | [`springwolf-stomp-example`][stomp]       | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-stomp?color=green&label=springwolf-stomp&style=plastic)               |

Check out the example projects, which include a full `docker-compose` setup.
The examples are simple, easy to start with, good for testing and reproducing bugs.

Please [open an issue](https://github.com/springwolf/springwolf-core/issues/new) if you want a protocol to be supported.

## Any protocol

Using [`@AsyncListener`](../configuration/documenting-consumers.md) and [`@AsyncPublisher`](../configuration/documenting-producers.md) any protocol can be documented, although the binding in the AsyncAPI document will remain empty.

The protocols with native support come along with a `@_ProtocolName_Binding` annotation to define protocol specific properties.

### `springwolf-<protocol>-binding` bindings

Springwolf also provides some libraries to document bindings. Those libraries provide a light alternative (without 3rd party dependencies)

The supported binding annotations are:

| Protocol          | Annotations                        | Latest Plugin Version                                                                                                                                                         |
|-------------------|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AMQP              | `@AmqpAsyncOperationBinding`       | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-amqp-binding?color=green&label=springwolf-amqp-binding&style=plastic)                 |
| GooglePubSub      | `@GooglePubSubAsyncChannelBinding` | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-googlepubsub-binding?color=green&label=springwolf-googlepubsub-binding&style=plastic) |
| JMS               | `@JmsAsyncOperationBinding`        | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-jms-binding?color=green&label=springwolf-jms-binding&style=plastic)                   |
| Kafka             | `@KafkaAsyncOperationBinding`      | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-kafka-binding?color=green&label=springwolf-kafka-binding&style=plastic)               |
| SNS               | `@SnsAsyncOperationBinding`        | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sns-binding?color=green&label=springwolf-sns-binding&style=plastic)                   |
| SQS               | `@SqsAsyncOperationBinding`        | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sqs-binding?color=green&label=springwolf-sqs-binding&style=plastic)                   |
| STOMP (WebSocket) | `@StompAsyncOperationBinding`      | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-stomp-binding?color=green&label=springwolf-stomp-binding&style=plastic)               |

:::info
See [Add-Ons / Generic Annotation Binding](../add-ons#generic-binding)
:::

## Wire format (Data serialization)

Besides the classical JSON events, Springwolf has best-effort support for some other wire formats.

### Avro

[Avro](https://avro.apache.org) is supported out-of-the box and demoed in [kafka example](#native-support).

### Protobuf

[Protobuf](https://protobuf.dev) is demoed in [kafka example](#native-support).

To remove the fields generated by the Protobuf class generated, add a `ModelResolver` bean, which uses the `ProtobufModule` to your project.
See [ProtobufConfiguration](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/src/main/java/io/github/springwolf/examples/kafka/configuration/ProtobufConfiguration.java) for details.

[amqp]:https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example
[cloud-stream]:https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-cloud-stream-example
[jms]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-jms-example
[kafka]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example
[sns]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-sns-example
[sqs]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-sqs-example
[stomp]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-stomp-example
