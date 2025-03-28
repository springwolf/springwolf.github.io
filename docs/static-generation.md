---
sidebar_position: 40
---

# Static Generation

Users tend to start out with running Springwolf at runtime as part of the Spring Boot application context.
Still, it's possible to generate the AsyncAPI documentation statically at build time.

One use-case is to protect against unexpected API changes using a test.
For this, the expected `asyncapi.json` file is stored in the VCS repository.

## Spring Boot Test (full spring context)

The most simple way is a Spring Boot test (taken from [springwolf-kafka-example](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/src/test/java/io/github/springwolf/examples/kafka/ApiIntegrationTest.java)):

```java
@SpringBootTest(
     classes = {SpringwolfKafkaExampleApplication.class},
     webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ApiIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void asyncApiResourceArtifactTest() throws IOException {
        // given
        String url = "/springwolf/docs";
       
        // when
        String actual = restTemplate.getForObject(url, String.class);
       
        // then
        // writing the actual file can be useful for debugging (remember: .gitignore)
        Files.writeString(Path.of("src", "test", "resources", "asyncapi.actual.json"), actual);

        // then
        InputStream s = this.getClass().getResourceAsStream("/asyncapi.json");
        String expected = new String(s.readAllBytes(), StandardCharsets.UTF_8).trim();
        assertEquals(expected, actual);
    }
}
```

## Springwolf Standalone (minimal spring context)

Especially for large application, starting the full Spring Boot context can be slow.
Springwolf _standalone_ uses a minimal Spring application context, by only including beans and configurations marked with `@StandaloneConfiguration`.

Demo code (taken from [`springwolf-kafka-example`](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/src/test/java/io/github/springwolf/examples/kafka/StandaloneTest.java)):

```java
class StandaloneTest {

    @Test
    public void asyncApiStandaloneArtifactTest() throws IOException {
        // given
        StandaloneApplication standaloneApplication =
                DefaultStandaloneApplication.builder().buildAndStart();

        // when
        AsyncAPI asyncApi = standaloneApplication.getAsyncApiService().getAsyncAPI();
        String actual = new DefaultAsyncApiSerializerService().toJsonString(asyncApi);

        // then
        // writing the actual file can be useful for debugging (remember: gitignore)
        Files.writeString(Path.of("src", "test", "resources", "asyncapi.standalone.json"), actual);

        // then
        InputStream s = this.getClass().getResourceAsStream("/asyncapi.json");
        String expected = new String(s.readAllBytes(), StandardCharsets.UTF_8).trim();
        assertEquals(expected, actualPatched);
    }
}
```

By default, only the `io.github.springwolf` package is scanned and `@StandaloneConfiguration` in other packages are _not_ picked up.
Use the `DefaultStandaloneApplication.builder()` to customize the Spring environment, load custom beans and configurations.

The [`application.properties` configuration](configuration/configuration.mdx) is picked up.

## Gradle Plugin (full spring context)

You can use the [`springdoc-openapi-gradle-plugin`](https://github.com/springdoc/springdoc-openapi-gradle-plugin) and configure the plugin
for Springwolf (taken from [`springwolf-kafka-example`](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/build.gradle)):

```groovy
openApi {
    apiDocsUrl = "http://localhost:8080/springwolf/docs"
    outputDir = file("$buildDir/docs")
    outputFileName = "asyncapi.json"
}
```

The plugin will start up the spring boot application by using the `bootRun` task and then try to download the documentation
from the given `apiDocsUrl` and store it in the `outputDir` and with the given `outputFileName`.

If your application is unable to start up with the `bootRun` task, see if [customBootRun](https://github.com/springdoc/springdoc-openapi-gradle-plugin#customization)
properties can help you.
