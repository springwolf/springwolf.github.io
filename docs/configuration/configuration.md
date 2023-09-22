---
sidebar_position: 30
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CodeConfigurationProperties from '!!raw-loader!./snippets/_configuration_properties.properties';
import CodeConfigurationAsyncApiDocket from '!!raw-loader!./snippets/_configuration_asyncApiDocket.java';

# Configuration

There are 2 ways to configure Springwolf which can't be combined:

1. `application.properties`, which is simple and moves all configuration to this file and annotations
2. (deprecated) `AsyncApiDocket`, which allows adding producers and consumers via code (instead of annotations)

<Tabs>
  <TabItem value="application.properties" label="application.properties" default>
    Add the following to the spring application.properties file.
    <CodeBlock language="properties">{CodeConfigurationProperties}</CodeBlock>
  </TabItem>
  <TabItem value="AsyncApiDocket" label="AsyncApiDocket">
    Add a AsyncApiDocket bean to the spring context.
    <CodeBlock language="java">{CodeConfigurationAsyncApiDocket}</CodeBlock>
  </TabItem>
</Tabs>

## Properties

### `basePackage` (required)

It's recommended to structure the project such that all consumers and producers (classes containing listener/producer methods) are in the same package - it's not mandatory, and if they're scattered across multiple packages, just provide the highest in hierarchy package that contains all classes.

The base package will be scanned for classes containing `@Component` annotated classes (that includes `@Service` annotated classes) for methods annotated with `@KafkaListener`, `@RabbitListener`, `@AsyncListener`, `@AsyncPublisher`, etc.

### `id`

The `Identifier` value represents a unique universal identifier of the application. See [Identifier][identifier].

### `default-content-type`

A string representing the default content type to use when encoding/decoding a message's payload. See [Default Content Type][default-content-type]

### `Info` (required)

The `Info` object provides metadata about the API (see [Info Object][info]).

All provided fields will be present in the generated document, but not all will be displayed in the UI.

### `Server`

The `Server` object provides metadata the can help the reader understand the protocol, version, login details and more (see [Server Object][server]).

An AsyncAPI document can contain more than one server, but it's not common.

As with the `Info` object, all provided fields will be present in the generated document, but not all will be displayed in the UI.

## Additional `application.properties`

The following table contains additional properties that can be specified in the `application.properties` file:

| Property Name                                            | Default Value      | Description                                                                                                               |
|----------------------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------|
| `springwolf.enabled`                                     | `true`             | Allows to enable/disable Springwolf at one central place.                                                                 |
| `springwolf.init-mode`                                   | `fail_fast`        | Springwolf initializes during start up with `fail_fast` or in the `background` after the application has started.         |
| `springwolf.paths.docs`                                  | `/springwolf/docs` | The path of the AsyncAPI document in JSON format. *Note that at the moment the UI will work only with the default value.* |
| `springwolf.use-management-port`                         | `false`            | Publish the AsyncAPI document as part of Spring Boot’s actuator feature.                                                  |
| `springwolf.scanner.consumer-data.enabled`               | `true`             | Enable scanner to find consumers defined in `AsyncApiDocket`.                                                             |
| `springwolf.scanner.producer-data.enabled`               | `true`             | Enable scanner to find producers defined in `AsyncApiDocket`.                                                             |
| `springwolf.scanner.async-listener.enabled`              | `true`             | Enable scanner to find methods annotated with `@AsyncListener`.                                                           |
| `springwolf.scanner.async-publisher.enabled`             | `true`             | Enable scanner to find methods annotated with `@AsyncPublisher`.                                                          |
| **AMQP**                                                 |                    |                                                                                                                           |
| `springwolf.plugin.amqp.publishing.enabled`              | `false`            | Allow (anyone) to produce AMQP messages from the UI. *Note that this has security implications*                           |
| `springwolf.plugin.amqp.scanner.rabbit-listener.enabled` | `true`             | Enable scanner to find methods annotated with `@RabbitListener`.                                                          |
| **Kafka**                                                |                    |                                                                                                                           |
| `springwolf.plugin.kafka.publishing.enabled`             | `false`            | Allow (anyone) to produce Kafka messages from the UI. *Note that this has security implications*                          |
| `springwolf.plugin.kafka.publishing.producer`            | `null`             | Configure the Kafka producer used to publish messages from the UI. Uses identical parameters as `spring.kafka.producer`   |
| `springwolf.plugin.kafka.scanner.kafka-listener.enabled` | `true`             | Enable scanner to find methods annotated with `@KafkaListener`.                                                           |

## Actuator support
Springwolf supports exposing the AsyncAPI document as part of Spring Boot’s actuator endpoint.
If the spring-boot-actuator module is provided as a dependency, then the actuator support can be enabled by setting 
`springwolf.use-management-port=true`.

To expose the Springwolf actuator endpoint, add `springwolf` to your `management.endpoints.web.exposure.include` configuration.

The AsyncAPI document will then be exposed beneath actuators base path, that's `/actuator/springwolf/docs.json` or `/actuator/springwolf/docs.yaml` respectively.
If the actuator management port is configured differently than the application port or the actuator base path is changed, then
the exposed AsyncAPI document will follow accordingly.

:::note
Enabling actuator support for Springwolf will break the Springwolf UI.


[identifier]: https://www.asyncapi.com/docs/reference/specification/v2.0.0#A2SIdString.
[info]: https://www.asyncapi.com/docs/reference/specification/v2.0.0#infoObject.
[server]: https://www.asyncapi.com/docs/reference/specification/v2.0.0#serversObject
[default-content-type]: https://www.asyncapi.com/docs/reference/specification/v2.0.0#defaultContentTypeString
