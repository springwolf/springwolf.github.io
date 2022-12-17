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
public class WebConfig  implements WebMvcConfigurer {

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry
        .addResourceHandler("/**")
        .addResourceLocations("classpath:/META-INF/resources/", "classpath:/resources/", "classpath:/static/", "classpath:/public/");
  }
}
```

Taken from [Discord Chat](https://discord.com/channels/950375987475005471/950375988217409548/1051909821848363038)

## Usage Patterns

### How to access the generated documentation within java?

Use the `AsyncApiService` to access the generated documentation.