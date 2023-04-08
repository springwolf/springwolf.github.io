---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CodeSpringwolfGroovy from '!!raw-loader!./snippets/_springwolf_groovy.md';
import CodeSpringwolfMaven from '!!raw-loader!./snippets/_springwolf_maven.md';

# Quickstart

*The following instructions are for Kafka services - but amqp services configuration is almost identical. Check out the [example project for complete examples](https://github.com/timonback/springwolf-core/tree/master/springwolf-examples).*

## Dependencies

Add the following dependencies:

<Tabs>
  <TabItem value="Groovy" label="Groovy" default>
    <CodeBlock language="groovy">{CodeSpringwolfGroovy}</CodeBlock>
  </TabItem>
  <TabItem value="Maven" label="Maven">
    <CodeBlock language="xml">{CodeSpringwolfMaven}</CodeBlock>
  </TabItem>
</Tabs>


## Configuration properties

Add the following to your application.properties

```properties
springwolf.docket.base-package=io.github.stavshamir.springwolf.example.consumers

springwolf.docket.info.title=${spring.application.name}
springwolf.docket.info.version=1.0.0

springwolf.docket.servers.kafka.protocol=kafka
springwolf.docket.servers.kafka.url=${kafka.bootstrap.servers:localhost:29092}
```

*Make sure to change the value of `springwolf.docket.base-package` to the package containing your listeners, so that springwolf will automatically pick them up.*

## View the docs
After starting the application, visit `<host>:<port>/springwolf/asyncapi-ui.html` to view the UI or `<host>:<port>/springwolf/docs` to view the raw AsyncAPI document.

If you configured a different context path in your application, make sure to prepend it to springwolf urls, i.e. `<host>:<port>/<context-path>/springwolf/asyncapi-ui.html`

## Examples
- amqp: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example
- spring-cloud-stream: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-cloud-stream-example
- kafka: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example
