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

## Configuration Class

Add the following configuration class.

*Make sure to change the value of `CONSUMERS_BASE_PACKAGE` to the package containing your Kafka listeners.*  

```java
@Configuration
@EnableAsyncApi
public class AsyncApiConfiguration {

    private final String BOOTSTRAP_SERVERS = "kafka:29092";
    private final String CONSUMERS_BASE_PACKAGE = "io.github.stavshamir.springwolf.example.consumers";

    @Bean
    public AsyncApiDocket asyncApiDocket() {
        Info info = Info.builder()
                .version("1.0.0")
                .title("Springwolf example project")
                .build();

        Server kafkaServer = Server.builder()
            .protocol("kafka")
            .url(BOOTSTRAP_SERVERS)
            .build();

        return AsyncApiDocket.builder()
                .basePackage(CONSUMERS_BASE_PACKAGE)
                .info(info)
                .server("kafka", kafkaServer)
                .build();
    }

}
```

## View the docs
After starting the application, visit `<host>:<port>/springwolf/asyncapi-ui.html` to view the UI or `<host>:<port>/springwolf/docs` to view the raw AsyncAPI document.

If you configured a different context path in your application, make sure to prepend it to springwolf urls, i.e. `<host>:<port>/<context-path>/springwolf/asyncapi-ui.html`


[kafka]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example
[amqp]:https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example
