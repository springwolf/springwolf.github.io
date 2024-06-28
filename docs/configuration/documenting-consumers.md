---
sidebar_position: 60
---

# Consumers

Springwolf comes with build-in support to auto-detect listeners of supported protocols.

Sometimes projects are configured in a way that makes Springwolf unable to automatically locate consumers or the generated documentation is insufficient.
For these use-cases, Springwolf provides additional ways to explicitly add them to the generated document.

To document consumers, either:

- add the `@AsyncListener` annotation or
- rely on the auto-detection of `@JmsListener`, `@KafkaListener`, `@MessageMapping`, `@RabbitListener`, `@SqsListener`, `@SendTo`, `@SendToUser`

You are free to use both options together. Channel and operation, documented via `@AsyncListener` have a higher precedence than auto-detected annotations.

## `@AsyncListener`

The `@AsyncListener` annotation is added to the method of the listeners and extracts the payload from its arguments.
Additional fields can be documented.

On the same method, the protocol binding is defined. More details can be found in the [bindings](documenting-bindings.md) section.

Below is an example to demonstrate the annotation:

```java
@KafkaListener
@AsyncListener(operation = @AsyncOperation(
        channelName = "example-consumer-topic",
        description = "Customer uploaded an example payload", // Optional
        servers = {"kafka-server"} // Optional
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

### Servers

Optional. Useful when an application is connect to multiple brokers and wants to indicate to which broker the channel belongs to.
The server name needs to exist in [configuration > Servers](configuration.mdx) as well.

## `@JmsListener`, `@KafkaListener`, `@RabbitListener`, `@SqsListener`

The `@JmsListener`, `@KafkaListener`, `@RabbitListener`, `@SqsListener` annotations are detected automatically.
There is nothing more to do.
Use the other option if the provided documentation is insufficient.
