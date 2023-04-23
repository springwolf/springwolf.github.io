---
sidebar_position: 68
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CodeSchemaGroovy from '!!raw-loader!./snippets/_schema_groovy.md';
import CodeSchemaMaven from '!!raw-loader!./snippets/_schema_maven.md';

# Documenting Schemas

Under the hood springwolf relies on swagger-core `ModelConverters`.

By default, the type and example values for the properties are guessed.
The default Jackson `ModelResolver` supports schema definitions via `@Schema` to overwrite the property definitions.

## Using `@Schema`

The `@Schema` annotation allows to set many properties like `description`, `example`, `required` to document payloads.

All properties are part of the produced AsyncApi file. However, not all of them are displayed in springwolf-ui. The ones listed above are included.

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
```java
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Example payload model")
public class ExamplePayloadDto {
    @Schema(description = "Some string field", example = "some string value", required = true)
    private String someString;

    public String getSomeString() {
        return someString;
    }
}
```

For a full example, take a look at [ExamplePayloadDto.java in springwolf-amqp-example](https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-amqp-example/src/main/java/io/github/stavshamir/springwolf/example/dtos/ExamplePayloadDto.java)

## Custom ModelConverters

Additionally, custom `ModelConverters` are supported.
These are needed when swagger is unable to extract a schema from a class.

One example is `javax.money.MonetaryAmount`.
Adding a model converter is demoed in [springwolf-add-ons/springwolf-common-model-converters](https://github.com/springwolf/springwolf-core/tree/master/springwolf-add-ons/springwolf-common-model-converters)
