---
sidebar_position: 1
---

# Introduction

## What is it
API Documentation is an important part of every project and product, but can be painful to maintain manually.
Spring Boot projects have great solutions for auto-generated documentation for REST APIs to overcome this pain (such as springfox, or springdoc-openapi).

**However, until now there were no solutions for async APIs (such as kafka, amqp etc.). Springwolf aims to solve this and provide auto-generated documentation for async APIs built in Spring Boot. You don't need to change your code - just add a simple configuration class and it works!**

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

By simply adding Springwolf dependency and a short configuration class to your project you will automatically get:
- An endpoint returning an asyncapi document (similar to an openapi document) describing your async API.
- A web UI for convenient use by your developers, QA or clients of your async API.
- An easy way to publish messages to your async API with a click of a button


## Demo
You are welcome to take a look at a [live demo](https://springwolf.github.io/springwolf-ui/) of springwolf.

