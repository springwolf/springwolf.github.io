---
sidebar_position: 10
---

# Introduction

## What is springwolf
API Documentation is an important part of every project and product, but can be painful to maintain manually.
Spring Boot projects have great solutions for auto-generated documentation for REST APIs to overcome this pain (such as springfox, or springdoc-openapi).

However, until now there were no solutions for async APIs (such as kafka, amqp etc.). Springwolf aims to solve this and provides auto-generated documentation for async APIs built in Spring Boot.

Springwolf is compliant to [AsyncAPI](https://www.asyncapi.com), which brings the [swagger/OpenAPI](https://www.asyncapi.com/docs/tutorials/getting-started/coming-from-openapi) specification you know already from REST APIs into the world of event-driven architectures.

### Demo

View the [live demo](https://demo.springwolf.dev) of springwolf in action.

Also, the demos of the 
[amqp](https://amqp.demo.springwolf.dev), 
[cloud-stream](https://cloud-stream.demo.springwolf.dev),
[kafka](https://kafka.demo.springwolf.dev)
example projects are available.

![springwolf publishing demo](/img/demo.gif)

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
- An endpoint returning an asyncapi document describing your async API.
- A web UI for convenient use by your developers, QA or clients of your async API.
- An easy way to publish messages to your async API with a click of a button


