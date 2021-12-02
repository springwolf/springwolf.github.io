---
sidebar_position: 3
---

# Configuration

## Configuration Class

- You need to provide a configuration class annotated with:
  1. `@Configuration`
  2. `@EnableAsyncApi`
- The name of the class does no matter. You don't have to, but it is a good idea to name the class related to Springwolf or AsyncApi.

```java
@Configuration
@EnableAsyncApi
public class AsyncApiConfiguration {
  ...
}
```

## AsyncApiDocket

You need to provide an `AsyncApiDocket` bean, which provides Springwolf with metadata that is either not specified in code or can't be picked up automatically.

```java
@Bean
public AsyncApiDocket asyncApiDocket() {
    return AsyncApiDocket.builder()
            .basePackage(...)
            .info(...)
            .server(...)
            .build();
}
```

### basePackage (required)

It is recommended to structue the project such that all consumers (classes containing listener methods) are in the same package - it is not mandatory, and if the consumer are scattered across multiple packages, just provide the highest in hierarchy package that containes all of them.

The base package will be scanned for classes containing `@Component` annotated classes (that includes `@Service` annotated classes) for methods annotated with `@KafkaListener`, `@RabbitListener`, etc.

### Info (required)

The `Info` object provides metadata about the API (see [Info Object][info]).

All provided fields will be present in the generated document, but not all will be displayed in the UI.

### Server

The `Server` object provides metadata the can help the reader understand the protocol, version, login details and more (see [Server Object][server]).

An AsyncAPI document can contain more than one server, but it is not common.

The server is provided to the document with an arbitrary name as the key, and a `Server` object as the value:

```java
@Bean
public AsyncApiDocket asyncApiDocket() {
    Server kafkaServer = Server.builder()
        .protocol("kafka")
        .url(BOOTSTRAP_SERVERS)
        .build();

    return AsyncApiDocket.builder()
            .basePackage(...)
            .info(...)
            .server("whatever name you want", kafkaServer)
            .build();
}
```

As with the `Info` object, all provided fields will be present in the generated document, but not all will be displayed in the UI.

## application.properties

The following table contains the complete list of additional properties that can be specified in the `application.properties` file:

| Property Name | Default Value | Description |
| ------------- | ------------- | ----------- |
| `springwolf.paths.docs` | `/springwolf/docs` | The path of the AsyncAPI document in JSON format. *Note that at the moment the UI will work only with the default value.* |

[info]: https://www.asyncapi.com/docs/specifications/v2.0.0#infoObject).
[server]: https://www.asyncapi.com/docs/specifications/v2.0.0#serverObject