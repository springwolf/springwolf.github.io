---
sidebar_position: 80
---

# Frequently Asked Questions

## General

### Is Springwolf free & What's the license

Yes, you can use Springwolf for private and commercial purposes as long as you comply to the [Apache License 2.0](https://github.com/springwolf/springwolf-core/blob/master/LICENSE).

### Use `springwolf-ui` only (without plugins)

You can use `springwolf-ui` without any other Springwolf dependency.
`springwolf-ui` will fetch any documentation available at the `springwolf/docs` path.
It must be in `json` format (`yaml` isn't supported).

Either create a custom spring controller to serve the file or [serve static resources with spring](https://spring.io/guides/gs/serving-web-content/) and place AsyncAPI document file called `docs` (without file extension) into the folder `resources/springwolf`.

Note: `springwolf-ui` doesn't support the full AsyncAPI spec.

### Springwolf in unit / integration test

See [Static Generation](static-generation.md).

## Troubleshooting

### Show `debug` output in the logs

Springwolf uses the default logging setup of Spring Boot.
To enable `DEBUG` output (`TRACE` for even more debugging), add the following line to the `application.properties`:

```properties
logging.level.io.github.springwolf=DEBUG
```

Log output:
```log
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::                (v4.0.2)

 INFO 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.examples.kafka.ApiIntegrationTest  : Starting ApiIntegrationTest using Java 17.0.7 with PID 1792 (started by user in /springwolf-core/springwolf-examples/springwolf-kafka-example)
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.examples.kafka.ApiIntegrationTest  : Running with Spring Boot v4.0.2, Spring v7.0.3
 INFO 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.examples.kafka.ApiIntegrationTest  : No active profile set, falling back to 1 default profile: "default"
 INFO 1792 --- [Springwolf example project - Kafka] [    Test worker] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 0 (http)
 INFO 1792 --- [Springwolf example project - Kafka] [    Test worker] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
 INFO 1792 --- [Springwolf example project - Kafka] [    Test worker] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/11.0.15]
 INFO 1792 --- [Springwolf example project - Kafka] [    Test worker] b.w.c.s.WebApplicationContextInitializer : Root WebApplicationContext: initialization completed in 522 ms
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.c.c.SpringwolfUiResourceConfigurer : Serving Springwolf with base-path: /springwolf
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.c.c.PublishingBaseController       : Message publishing via SpringwolfKafkaController is active.
 INFO 1792 --- [Springwolf example project - Kafka] [    Test worker] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 1 endpoint beneath base path '/actuator'
 INFO 1792 --- [Springwolf example project - Kafka] [    Test worker] o.s.boot.tomcat.TomcatWebServer          : Tomcat started on port 8080 (http) with context path '/'
 INFO 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.examples.kafka.ApiIntegrationTest  : Started ApiIntegrationTest in 1.461 seconds (process running for 2.123)
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] .g.s.c.SpringwolfInitApplicationListener : Triggering asyncapi creation
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.c.asyncapi.DefaultAsyncApiService  : Building AsyncAPI document
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.c.a.s.c.a.AnnotationScannerUtil    : Detected method io.github.springwolf.examples.kafka.consumers.ExampleClassLevelKafkaListener#receiveMonetaryAmount
...
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.c.a.s.c.a.AnnotationScannerUtil    : Detected method io.github.springwolf.examples.kafka.consumers.AvroConsumer#receiveExampleAvroPayload
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.c.asyncapi.DefaultAsyncApiService  : Starting customizer io.github.springwolf.addons.json_schema.JsonSchemaCustomizer
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.c.a.grouping.AsyncApiGroupService  : Loaded AsyncApiGroup from configuration: AsyncApiGroup(groupName=Only Vehicles, groupInfo=Info(title=null, version=1.0.0, description=This group only contains endpoints that are related to vehicles., termsOfService=null, contact=null, license=null, tags=null, externalDocs=null), operationActionsToKeep=[], channelNamesToKeep=[], messageNamesToKeep=[.*Vehicle.*])
DEBUG 1792 --- [Springwolf example project - Kafka] [    Test worker] i.g.s.c.asyncapi.DefaultAsyncApiService  : AsyncAPI document was built
 INFO 1792 --- [Springwolf example project - Kafka] [o-auto-1-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'
 INFO 1792 --- [Springwolf example project - Kafka] [o-auto-1-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'
 INFO 1792 --- [Springwolf example project - Kafka] [o-auto-1-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 1 ms
DEBUG 1792 --- [Springwolf example project - Kafka] [o-auto-1-exec-1] i.g.s.c.controller.AsyncApiController    : Returning AsyncApi document for group Only Vehicles
DEBUG 1792 --- [Springwolf example project - Kafka] [o-auto-1-exec-2] i.g.s.c.controller.AsyncApiController    : Returning AsyncApi document for group default
DEBUG 1792 --- [Springwolf example project - Kafka] [o-auto-1-exec-3] i.g.s.c.a.grouping.AsyncApiGroupService  : Loaded AsyncApiGroup from configuration: AsyncApiGroup(groupName=Only Vehicles, groupInfo=Info(title=null, version=1.0.0, description=This group only contains endpoints that are related to vehicles., termsOfService=null, contact=null, license=null, tags=null, externalDocs=null), operationActionsToKeep=[], channelNamesToKeep=[], messageNamesToKeep=[.*Vehicle.*])
```

### The Springwolf UI isn't showing

When the `springwolf-ui` dependency is added, the UI should be visible at [http://localhost:8080/springwolf/asyncapi-ui.html](http://localhost:8080/springwolf/asyncapi-ui.html).

If not, whether

1. you customized the spring `context-path` setting
2. static assets are being served at all. See the code below:

    ```java
    @Configuration
    public class WebConfig implements WebMvcConfigurer {
       @Override
       public void addResourceHandlers(ResourceHandlerRegistry registry) {
         registry
             .addResourceHandler("/**")
             .addResourceLocations("classpath:/META-INF/resources/", "classpath:/resources/", "classpath:/static/", "classpath:/public/");
       }
    }
    ```

    Taken from [Discord Chat](https://discord.com/channels/950375987475005471/950375988217409548/1051909821848363038)
3. spring-security (or similar) denies access the URLs (HTTP 403). Check `CustomWebSecurityConfigurerAdapter` in `springwolf-kafka-example`.

### Unable to publish message from the UI

Publishing messages from the UI is disabled by default due to security concerns.
Springwolf doesn't offer authentication nor authorization, anyone can publish messages to channels (in production).

Check the [configuration](configuration/configuration.mdx) to enable this feature.
Be sure to enable fully qualified names ([`use-fqn`](configuration/configuration.mdx)) as well.

Spring Security allows to limit access to authorized users.

### Classes have fully qualified names (`io.springwolf.package.ClassName`)

Disable the [fully qualified class name (FQN) option (`springwolf.use-fqn=false`)](configuration/configuration.mdx).

### Only one of multiple classes with the same name (different package) is detected

Enable the [fully qualified class name (FQN) option (`springwolf.use-fqn=true`)](configuration/configuration.mdx).

### Springwolf interferes with OpenAPI documentation

Springwolf uses `swagger-core` to analyze classes, which is used by some OpenAPI libraries like `springdoc-openapi`.
`swagger-core` configuration is partly global and can't be isolated.

Options:

1. Use the same settings in Springwolf and the other library (including the [fully qualified class name (FQN) option](configuration/configuration.mdx)).
2. Don't run Springwolf and the other library at the same time, for example by [generating the documentation at build time](static-generation.md).

### Generic types (List) don't contain item properties

Due to java type erasure some generic type information is lost during runtime.

Defining your own type can resolve this.

Change

```java
public void sendMessage(List<String> msg) {}
```

to

```java
class ListWrapper extends ArrayList<String> {}

public void sendMessage(ListWrapper<String> msg) {}
```

### Consumers are detected multiple times (with different payloads)

When Springwolf finds multiple consumers/producers for the same channel/topic, these are merged together.
This is expected, as there are use-cases where different payloads are sent via the same channel/topic.

Springwolf uses scanners to find all consumer and producers in your application.
Most likely two scanners found your consumer/producer each.
See [configuration](configuration/configuration.mdx) to disable scanners.

## Usage Patterns

### How to access the generated documentation within java

Use the `AsyncApiService` to access the generated documentation.

### How to customize the generated documentation

See the [customization page](configuration/customizing.md)

## Release Notes / Migration Guide / Updating / Upgrading

Releases are managed in [GitHub Releases](https://github.com/springwolf/springwolf-core/releases),
which feature noteworthy changes, the full changelog and notes on how to migrate.

Since each release has a git [_tag_](https://github.com/springwolf/springwolf-core/tags),
the [Springwolf examples](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples) showcase the use of Springwolf for any version.

### Is Spring Boot 3.X supported
You can use an older version of Springwolf, which is build to support Spring Boot 3.X.
However, these versions don't get any updates.

Last version to support Spring Boot 3.X is `1.20.0` as Spring Boot 4 started the Springwolf 2.X release line.

### How to migrate from Springwolf 0.18.0 to 1.0.0

See [Release 1.0.0](https://github.com/springwolf/springwolf-core/releases/tag/v1.0.0).

### How to migrate from the deprecated `AsyncApiDocket` bean to Spring properties

See [Issue #445](https://github.com/springwolf/springwolf-core/issues/445).

### Is Spring Boot 2.X supported

You can use an older version of Springwolf, which is build to support Spring Boot 2.X.
However, these versions don't get any updates.

Last versions to support Spring Boot 2.X:

- `springwolf-amqp:0.6.0`
- `springwolf-cloud-stream:0.1.0`
- `springwolf-core:0.6.0`
- `springwolf-kafka:0.10.0`
- `springwolf-ui:0.6.0`
