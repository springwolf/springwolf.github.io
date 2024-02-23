---
sidebar_position: 10
---

# Introduction

:::info
Integrate Springwolf in minutes using the [Quickstart](../quickstart.mdx).
:::

## What's Springwolf
API Documentation is an important part of every project and product, but can be painful to maintain manually.
Spring Boot projects have great solutions for auto-generated documentation for REST APIs to overcome this pain (such as Springfox, or springdoc-openapi).

However, until now there were no solutions for asynchronous APIs (such as AMQP, JMS, Kafka, SNS, SQS, etc.). Springwolf aims to solve this and provides auto-generated documentation for asynchronous APIs built in Spring Boot.

Springwolf is compliant to [AsyncAPI](https://www.asyncapi.com), which brings the [swagger/OpenAPI](https://www.asyncapi.com/docs/tutorials/getting-started/coming-from-openapi) specification you know already from REST APIs into the world of event-driven architectures.

### Demo

View the [live demo](https://demo.springwolf.dev) of Springwolf in action.

Also, the demos of the 
[AMQP](https://amqp.demo.springwolf.dev), 
[Spring Cloud Stream](https://cloud-stream.demo.springwolf.dev),
[JMS](https://jms.demo.springwolf.dev),
[Kafka](https://kafka.demo.springwolf.dev),
[SNS](https://sns.demo.springwolf.dev),
[SQS](https://sqs.demo.springwolf.dev)
example projects are available.

![Springwolf publishing demo](/img/demo.gif)

## What does it do

If you are using Spring Boot annotation based listeners (such as `@KafkaListener`, `@RabbitListener` etc.), you probably have something like this in your codebase:

```java
@Service
public class ExampleConsumer {

    @KafkaListener(topics = "example-topic")
    public void receiveExamplePayload(ExamplePayloadDto payload) {
        // Do something with payload
    }

}
```

By simply adding Springwolf dependency to your project you will automatically get:
- An endpoint returning an AsyncAPI document describing your asynchronous API.
- A web UI for convenient use by your developers, QA or clients of your asynchronous API.
- An easy way to publish messages to your asynchronous API with a click of a button
