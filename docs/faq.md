---
sidebar_position: 80
---

# Frequently Asked Questions

## General

### Is Springwolf free? What is the license?

Yes, you can use Springwolf for private and commercial purposes as long as you comply to the [Apache License 2.0](https://github.com/springwolf/springwolf-core/blob/master/LICENSE).

## Troubleshooting

### The Springwolf UI is not showing

When the `springwolf-ui` dependency is added, the ui should be visible at [http://localhost:8080/springwolf/asyncapi-ui.html](http://localhost:8080/springwolf/asyncapi-ui.html).

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
3. spring-security (or similar) denies access the urls (HTTP 403). Check `CustomWebSecurityConfigurerAdapter` in springwolf-kafka-example.

### Unable to publish message from the UI

Publishing messages from the UI is disabled by default due to security concerns.
Springwolf does not offer authentication nor authorization, anyone can publish messages to (production) channels.

Check the [configuration](configuration/configuration.md) to enable this feature.

Spring Security allows to limit access to authorized users.

### Is Spring Boot 2.X supported?

You can use an older version of Springwolf, which is build to support Spring Boot 2.X.
However, these versions do not get any updates.

Last versions to support Spring Boot 2.X:
- springwolf-amqp:0.6.0
- springwolf-cloud-stream:0.1.0
- springwolf-core:0.6.0
- springwolf-kafka:0.10.0
- springwolf-ui:0.6.0

## Usage Patterns

### How to access the generated documentation within java?

Use the `AsyncApiService` to access the generated documentation.

### How to generate the documentation at build time?

#### With Gradle

You can use the [springdoc-openapi-gradle-plugin](https://github.com/springdoc/springdoc-openapi-gradle-plugin) and configure the plugin
for Springwolf by pointing it to the Springwolf docs endpoint: 

```groovy
openApi {
    apiDocsUrl = "http://localhost:8080/springwolf/docs"
    outputDir = file("$buildDir/docs")
    outputFileName = "async-api.json"
}
```

The [springwolf-kafka-example](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/build.gradle)
contains a working example.

The plugin will startup the spring boot application by using the `bootRun` task and then try to download the documentation
from the given `apiDocsUrl` and store it in the `outputDir` and with the given `outputFileName`.

If your application is unable to start up with the bootRun task, see if [customBootRun](https://github.com/springdoc/springdoc-openapi-gradle-plugin#customization)
properties can help you.

### My consumers are detected multiple times (with different payloads)

When Springwolf finds multiple consumers/producers for the same channel/topic, these are merged together.
This is expected, as there are use-cases where different payloads are sent via the same channel/topic.

Springwolf uses on scanners to find all consumer and producers in your application.
Most likely two scanners found your consumer/producer each.
See [configuration](configuration/configuration.md) to disable scanners.

