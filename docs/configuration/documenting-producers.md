---
sidebar_position: 64
---

# Producers

Unlike consumers which are defined declaratively with an annotation,
producers are defined imperatively (that's `KafkaTemplate`),
and there is no implementation uniform enough so that metadata can be picked up automatically.

Because producers are also an important part of AsyncAPI,
Springwolf provides a way to explicitly add them to the generated document using the `@AsyncPublisher` annotation.

## `@AsyncPublisher`

The `@AsyncPublisher` annotation is added to the method of the publisher and extracts the payload from its arguments.
Additional fields can be documented.

On the same method, the protocol binding is defined. More details can be found in the [bindings](documenting-bindings.md) section.

### Single parameter
Below is an example to demonstrate the annotation with a single parameter method:

```java
@AsyncPublisher(operation = @AsyncOperation(
        channelName = "example-producer-topic",
        description = "Customer uploaded an example payload", // Optional
        servers = {"kafka-server"} // Optional
))
@KafkaAsyncOperationBinding
public void sendMessage(ExamplePayloadDto msg) {
    // process
}
```
### Multiple parameters
The `@Payload` annotation is necessary for methods with multiple parameters, indicating which parameter is the payload. If this annotation is missing when multiple parameters are present, the Publisher will not be documented. 

The annotation is available by importing the `spring-messaging` library.

Here's an example:
```java
@AsyncPublisher(operation = @AsyncOperation(
        channelName = "example-producer-topic",
        description = "Customer uploaded an example payload", // Optional
        servers = {"kafka-server"} // Optional
))
@KafkaAsyncOperationBinding
public void sendMessage(@Payload ExamplePayloadDto msg, String otherParam) {
    // process
}
```

:::note
Springwolf only finds methods that are within the `base-package`.
:::

### Channel Name

The channel name (or topic name in case of Kafka) - this is the name that will be used to publish messages to by the UI.

### Description

Optional. The description allows for human-friendly text to verbosely explain the _message_, like specific domain, what the topic is used for and which data it contains.

### Servers

Optional. Useful when an application is connect to multiple brokers and wants to indicate to which broker the channel belongs to.
The server name needs to exist in [configuration > Servers](configuration.mdx) as well.
