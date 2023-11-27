---
sidebar_position: 68
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CodeSchemaGroovy from '!!raw-loader!./snippets/_schema_groovy.gradle';
import CodeSchemaMaven from '!!raw-loader!./snippets/_schema_maven.xml';

# Messages

Springwolf provides different ways to document the messages. The `message` is part of the AsyncApi `operationObject`

> A definition of the message that will be published or received by this operation

A message can be defined as part of the `@AsyncOperation` annotation, using `message = @AsyncMessage()` field.

For example:
```java
@AsyncPublisher(operation = @AsyncOperation(
        channelName = "example-producer-topic",
        description = "Optional. Customer uploaded an example payload",
        payloadType = ExamplePayloadDto.class, // optional
        message = @AsyncMessage(
                messageId = "my-unique-id",
                name = "ExamplePayloadDto",
                schemaFormat = "application/schema+json;version=draft-07",
                description = "Example payload model for sending messages"
        )
))
public void sendMessage(ExamplePayloadDto msg) {
    // send
}
```

## Payload Type

Springwolf tries to auto-detect the payload type based on the method signature.

When the method has multiple arguments, the payload can be indicated via `@Payload`, i.e.
```java
public void sendMessage(@Payload ExamplePayloadDto msg, String traceId, Object loggingContext) {}
```

Alternatively, the annotation property `payloadType` of `@AsyncOperation` allows to overwrite the detected class.

### Unwrapping the Payload

Sometimes, the payload type is wrapped in other objects.
Some wrappers are automatically unwrapped, including `Message<String>`, which becomes `String`.

:::note
The [configuration property](configuration.md) to modify the defaults is currently in _beta_.
:::

Assuming a method signature of `sendMessage(Function<Void, String> msg)`, where the actual payload is located in parameter index 1 (String).
Adding the configuration property `springwolf.payload.extractable-classes.java.util.function.Function=1` tells Springwolf how to handle this payload type.

The configuration property is split into three parts.
First, the base property `springwolf.payload.extractable-classes`.
Second, the canonical class name, `java.util.function.Function` in this case.
And third, the generic parameter index (`1`).


## Schema

Under the hood Springwolf relies on swagger-core `ModelConverters` to define the message schema.

By default, the type and example values for the properties are guessed.
The default Jackson `ModelResolver` supports schema definitions via `@Schema` to overwrite the property definitions.

### Using `@Schema`

The `@Schema` annotation allows to set many properties like `description`, `example`, `requiredMode` to document payloads.

All properties are part of the produced AsyncApi file. However, not all are displayed in `springwolf-ui`. The ones listed above are included.

### Usage

Add the following dependency:

<Tabs>
  <TabItem value="Groovy" label="Groovy" default>
    <CodeBlock language="groovy">{CodeSchemaGroovy}</CodeBlock>
  </TabItem>
  <TabItem value="Maven" label="Maven">
    <CodeBlock language="xml">{CodeSchemaMaven}</CodeBlock>
  </TabItem>
</Tabs>

Then, add the `@Schema` annotation to the payload class:

<!-- vale off -->
```java
import io.swagger.v3.oas.annotations.media.Schema;
import static io.swagger.v3.oas.annotations.media.Schema.RequiredMode.REQUIRED;

@Schema(description = "Example payload model")
public class ExamplePayloadDto {
    @Schema(description = "Some string field", example = "some string value", requiredMode = REQUIRED)
    private String someString;

    public String getSomeString() {
        return someString;
    }
}
```
<!-- vale on -->

:::note
The `@AsyncMessage.description` field will always override the `@Schema` description if provided
:::

For a full example, take a look at [ExamplePayloadDto.java in `springwolf-amqp-example`](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-amqp-example/src/main/java/io/github/stavshamir/springwolf/example/amqp/dtos/ExamplePayloadDto.java)

### `json-schema`

The [`springwolf-add-ons/springwolf-json-schema`](https://github.com/springwolf/springwolf-core/tree/master/springwolf-add-ons/springwolf-json-schema) adds the [json-schema](https://json-schema.org) schema to the AsyncApi document. 

## Custom ModelConverters

Additionally, custom `ModelConverters` are supported.
These are needed when swagger is unable to extract a schema from a class.

One example is `javax.money.MonetaryAmount`.
Adding a model converter is demoed in [`springwolf-add-ons/springwolf-common-model-converters`](https://github.com/springwolf/springwolf-core/tree/master/springwolf-add-ons/springwolf-common-model-converters)
