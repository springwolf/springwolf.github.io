---
sidebar_position: 20
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CodeSpringwolfGroovy from '!!raw-loader!./snippets/_springwolf_groovy.md';
import CodeSpringwolfMaven from '!!raw-loader!./snippets/_springwolf_maven.md';

# Quickstart

*The following instructions are for Kafka services - but amqp services configuration is almost identical. Check out the [example project for complete examples](https://github.com/timonback/springwolf-core/tree/master/springwolf-examples).*

## 1. Add dependencies

Add the following dependencies:

<Tabs>
  <TabItem value="Groovy" label="Groovy" default>
    <CodeBlock language="groovy">{CodeSpringwolfGroovy}</CodeBlock>
  </TabItem>
  <TabItem value="Maven" label="Maven">
    <CodeBlock language="xml">{CodeSpringwolfMaven}</CodeBlock>
  </TabItem>
</Tabs>

Latest version:
- ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-amqp?color=green&label=springwolf-amqp&style=plastic)
- ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-cloud-stream?color=green&label=springwolf-cloud-stream&style=plastic)
- ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-kafka?color=green&label=springwolf-kafka&style=plastic)
- ![Maven Central](https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-ui?color=green&label=springwolf-ui&style=plastic)

## 2. Configure properties

Add the following to your application.properties:

```properties
springwolf.docket.base-package=io.github.stavshamir.springwolf.example.consumers

springwolf.docket.info.title=${spring.application.name}
springwolf.docket.info.version=1.0.0

springwolf.docket.servers.kafka.protocol=kafka
springwolf.docket.servers.kafka.url=${kafka.bootstrap.servers:localhost:29092}
```

*Make sure to change the value of `springwolf.docket.base-package` to the package containing your listeners, so that springwolf will automatically pick them up.*

## 3. View the docs
Start the application and open the urls in your browser:
- Json: [`<host>:<port>/springwolf/docs`](http://localhost:8080/springwolf/docs)
- Yaml: [`<host>:<port>/springwolf/docs.yaml`](http://localhost:8080/springwolf/docs.yaml)
- UI: [`<host>:<port>/springwolf/asyncapi-ui.html`](http://localhost:8080/springwolf/asyncapi-ui.html)

If you configured a different context path in your application, make sure to prepend it to springwolf urls, i.e. `<host>:<port>/<context-path>/springwolf/asyncapi-ui.html`

## 4. Next steps

- Read an elaborated tutorial on Baeldung at https://www.baeldung.com/java-spring-doc-asyncapi-springwolf
- Check out the example projects:
    - amqp: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example
    - spring-cloud-stream: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-cloud-stream-example
    - kafka: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example
- Dive deeper on the next pages
