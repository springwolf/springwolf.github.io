---
sidebar_position: 6
---

# Supported Protocols

| Protocol        | Annotation                        | Example Project                   | Latest Plugin Version |
| --------------- | --------------------------------- | --------------------------------- | --------------------- |
| AMQP (RabbitMQ) | `@RabbitListener`                 | [springwolf-amqp-example][amqp]   | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-amqp?color=green&label=springwolf-amqp&style=plastic) |
| Cloud Functions |                                   | [springwolf-cloud-stream][cloud-stream] | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-cloud-stream?color=green&label=springwolf-cloud-stream&style=plastic) |
| Kafka           | `@KafkaListener`, `@KafkaHandler` | [springwolf-kafka-example][kafka] | ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-kafka?color=green&label=springwolf-kafka&style=plastic) |

Please [open an issue](https://github.com/springwolf/springwolf-core/issues/new) if you want a protocol to be supported.


[amqp]:https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example
[kafka]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example
[cloud-stream]:https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-cloud-stream-example
