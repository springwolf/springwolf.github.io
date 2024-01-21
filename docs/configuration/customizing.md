---
sidebar_position: 80
---

# Customizing
Adding and changing functionality of Springwolf is easy.
The [configuration](../configuration/configuration.mdx) page mentions the existing ones.

When you feel that Springwolf is missing a feature, you are able to add it yourself.
To learn more about how Springwolf works, look [behind the scenes](../behind-the-scenes.md).

:::note
<!-- vale Microsoft.We = NO -->
Please let us know on GitHub or Discord, so that other people can benefit from it as well.
[Contributions are welcome, here are some basic tips](https://github.com/springwolf/springwolf-core/blob/master/CONTRIBUTING.md).
<!-- vale Microsoft.We = YES -->
:::

Springwolf uses interfaces to allow to inject functionality at integration points.
Springwolf provides default implementation, but those can be replaced.
All default implementations are Spring managed beans, which can be overridden.

## `AsyncApiCustomizer` - Full AsyncAPI document

By implementing the `AsyncApiCustomizer`, the AsyncAPI document can be modified after Springwolf has done all the scanning and has built the document.
It's the final interception point before the document is available to the user.

For example, the title can be adjusted - although this should be done through the configuration:
```java
@Component
public class AsyncApiTitleCustomizer implements AsyncApiCustomizer {
    @Override
    public void customize(AsyncAPI asyncAPI) {
         asyncAPI.getInfo().setTitle("Title set through customizer");
    }
}
```

## `ChannelScanners` - Channel detection

All `ChannelScanner` beans are called to scan for channels.
This interface is helpful when a protocol currently unsupported by Springwolf is used.
Remember to register all payloads in the `SchemasService`.
