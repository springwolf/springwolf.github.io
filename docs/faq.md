---
sidebar_position: 10
---

# Frequently Asked Questions

## General

### Is springwolf free? What is the license?

Yes, you can use springwolf for private and commercial purposes as long as you comply to the [Apache License 2.0](https://github.com/springwolf/springwolf-core/blob/master/LICENSE).

## Troubleshooting

### The springwolf UI is not showing

When the `springwolf-ui` dependency is added, the ui should be visible at [http://localhost:8080/springwolf/asyncapi-ui.html](http://localhost:8080/springwolf/asyncapi-ui.html).

If not, check
1. the spring `context-path` setting 
2. if static assets are being served. See the code below:
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

### Unable to publish message from the UI

Publishing messages from the UI is disabled by default due to security concerns.
Springwolf does not offer authentication nor authorization, anyone can publish messages to (production) channels.

Check the [configuration](configuration.md) to enable this feature.

Spring Security allows to limit access to authorized users.

### Is Spring Boot 2.X supported?

You can use an older version of springwolf, which is build to support Spring Boot 2.X.
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
for springwolf by pointing it to the springwolf docs endpoint: 

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
