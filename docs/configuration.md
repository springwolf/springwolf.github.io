---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CodeConfigurationProperties from '!!raw-loader!./snippets/_configuration_properties.md';
import CodeConfigurationAsyncApiDocket from '!!raw-loader!./snippets/_configuration_asyncApiDocket.md';

# Configuration

## Activating

Springwolf is actived automatically as soon as one of the available plugin dependencies (e.g. `springwolf-kafka`)
is added to the application classpath. 



## Springwolf configuration

There are 2 ways to configure springwolf:

1. `application.properties`, which is simple and should suit most use-cases
2. `AsyncApiDocket`, which allows adding producers and consumers via code (and avoiding annotations)

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

### basePackage (required)

It is recommended to structure the project such that all consumers and producers (classes containing listener/producer methods) are in the same package - it is not mandatory, and if they are scattered across multiple packages, just provide the highest in hierarchy package that contains all of them.

The base package will be scanned for classes containing `@Component` annotated classes (that includes `@Service` annotated classes) for methods annotated with `@KafkaListener`, `@RabbitListener`, `@AsyncListener`, `@AsyncPublisher`, etc.

### Info (required)

The `Info` object provides metadata about the API (see [Info Object][info]).

All provided fields will be present in the generated document, but not all will be displayed in the UI.

### Server

The `Server` object provides metadata the can help the reader understand the protocol, version, login details and more (see [Server Object][server]).

An AsyncAPI document can contain more than one server, but it is not common.

As with the `Info` object, all provided fields will be present in the generated document, but not all will be displayed in the UI.

## Additional `application.properties`

The following table contains additional properties that can be specified in the `application.properties` file:

| Property Name                                | Default Value | Description                                                                                                               |
|----------------------------------------------| ------------- |---------------------------------------------------------------------------------------------------------------------------|
| `springwolf.enabled`                         | `true` | Allows to enable/disable springwolf at one central place.                                                                 |
| `springwolf.paths.docs`                      | `/springwolf/docs` | The path of the AsyncAPI document in JSON format. *Note that at the moment the UI will work only with the default value.* |
| `springwolf.plugin.amqp.publishing.enabled`  | `false` | Allow (anyone) to produce amqp messages from the UI. *Note that this has security implications*                           |
| `springwolf.plugin.kafka.publishing.enabled` | `false` | Allow (anyone) to produce kafka messages from the UI. *Note that this has security implications*                          |

[info]: https://www.asyncapi.com/docs/reference/specification/v2.0.0#infoObject.
[server]: https://www.asyncapi.com/docs/reference/specification/v2.0.0#serversObject
