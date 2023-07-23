---
sidebar_position: 80
---

# Customizing
Adding and changing functionality of Springwolf is easy.
The [configuration](../configuration/configuration.md) page mentions the existing ones.

When you feel that Springwolf is missing a feature, you are able to add it yourself.
To learn more about how Springwolf works, look [behind the scenes](../behind-the-scenes.md).

:::note
Please let us know on GitHub or Discord, so that other people can benefit from it as well.
[Contributions are welcome, here are some basic tips](https://github.com/springwolf/springwolf-core/blob/master/CONTRIBUTING.md).
:::

Springwolf uses interfaces to allow to inject functionality at integration points.
Springwolf provides default implementation, but those can be replaced.
All default implementations are Spring managed beans, which can be overridden.

## `AsyncApiCustomizer` - Full AsyncAPI document

By implementing the `AsyncApiCustomizer`, the AsyncAPI document can be modified after Springwolf has done all the scanning and has built the document.
It is the final interception point before the document is available to the user.

## `ChannelScanners` - Channel detection

All `ChannelScanner` beans are called to scan for channels.
This interface is helpful when a protocol currently unsupported by Springwolf is used.
Remember to register all payloads in the `SchemasService`.