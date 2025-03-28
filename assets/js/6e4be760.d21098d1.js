"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[532],{1183:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"introduction/supported-protocols","title":"Supported Protocols","description":"Besides auto-detection of protocols (native support),","source":"@site/docs/introduction/supported-protocols.md","sourceDirName":"introduction","slug":"/introduction/supported-protocols","permalink":"/docs/introduction/supported-protocols","draft":false,"unlisted":false,"editUrl":"https://github.com/springwolf/springwolf.github.io/edit/master/docs/introduction/supported-protocols.md","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_position":15},"sidebar":"defaultSidebar","previous":{"title":"Introduction","permalink":"/docs/introduction/"},"next":{"title":"Add-Ons","permalink":"/docs/introduction/add-ons"}}');var r=n(4848),o=n(8453);const t={sidebar_position:15},l="Supported Protocols",d={},c=[{value:"Native Support",id:"native-support",level:2},{value:"Any protocol",id:"any-protocol",level:2},{value:"<code>springwolf-&lt;protocol&gt;-binding</code> bindings",id:"springwolf-protocol-binding-bindings",level:3},{value:"Wire format (Data serialization)",id:"wire-format-data-serialization",level:2},{value:"Avro",id:"avro",level:3},{value:"Protobuf",id:"protobuf",level:3}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"supported-protocols",children:"Supported Protocols"})}),"\n",(0,r.jsxs)(s.p,{children:["Besides auto-detection of protocols (native support),\nany protocol can be defined using Springwolf custom annotations ",(0,r.jsx)(s.code,{children:"@AsyncListener"})," and ",(0,r.jsx)(s.code,{children:"@AsyncPublisher"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"native-support",children:"Native Support"}),"\n",(0,r.jsx)(s.p,{children:"The following protocols are supported natively:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Protocol + Demo"}),(0,r.jsx)(s.th,{children:"Auto-detected annotations"}),(0,r.jsx)(s.th,{children:"Example Project"}),(0,r.jsx)(s.th,{children:"Latest Version"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://amqp.demo.springwolf.dev",children:"AMQP (RabbitMQ)"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@RabbitListener"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example",children:(0,r.jsx)(s.code,{children:"springwolf-amqp-example"})})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-amqp?color=green&label=springwolf-amqp&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://cloud-stream.demo.springwolf.dev",children:"Cloud Functions"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"@Bean"})," (functional interface)"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-cloud-stream-example",children:(0,r.jsx)(s.code,{children:"springwolf-cloud-stream"})})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-cloud-stream?color=green&label=springwolf-cloud-stream&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://jms.demo.springwolf.dev",children:"JMS"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@JmsListener"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-jms-example",children:(0,r.jsx)(s.code,{children:"springwolf-jms-example"})})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-jms?color=green&label=springwolf-jms&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://kafka.demo.springwolf.dev",children:"Kafka"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"@KafkaListener"}),", ",(0,r.jsx)(s.code,{children:"@KafkaHandler"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example",children:(0,r.jsx)(s.code,{children:"springwolf-kafka-example"})})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-kafka?color=green&label=springwolf-kafka&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://sns.demo.springwolf.dev",children:"SNS"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-sns-example",children:(0,r.jsx)(s.code,{children:"springwolf-sns-example"})})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sns?color=green&label=springwolf-sns&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://sqs.demo.springwolf.dev",children:"SQS"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@SqsListener"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-sqs-example",children:(0,r.jsx)(s.code,{children:"springwolf-sqs-example"})})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sqs?color=green&label=springwolf-sqs&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://stomp.demo.springwolf.dev",children:"STOMP (WebSocket)"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"@MessageMapping"}),", ",(0,r.jsx)(s.code,{children:"@SendTo"}),", ",(0,r.jsx)(s.code,{children:"@SendToUser"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-stomp-example",children:(0,r.jsx)(s.code,{children:"springwolf-stomp-example"})})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-stomp?color=green&label=springwolf-stomp&style=plastic",alt:"Maven Central"})})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Check out the example projects, which include a full ",(0,r.jsx)(s.code,{children:"docker-compose"})," setup.\nThe examples are simple, easy to start with, good for testing and reproducing bugs."]}),"\n",(0,r.jsxs)(s.p,{children:["Please ",(0,r.jsx)(s.a,{href:"https://github.com/springwolf/springwolf-core/issues/new",children:"open an issue"})," if you want a protocol to be supported."]}),"\n",(0,r.jsx)(s.h2,{id:"any-protocol",children:"Any protocol"}),"\n",(0,r.jsxs)(s.p,{children:["Using ",(0,r.jsx)(s.a,{href:"/docs/configuration/documenting-consumers",children:(0,r.jsx)(s.code,{children:"@AsyncListener"})})," and ",(0,r.jsx)(s.a,{href:"/docs/configuration/documenting-producers",children:(0,r.jsx)(s.code,{children:"@AsyncPublisher"})})," any protocol can be documented, although the binding in the AsyncAPI document will remain empty."]}),"\n",(0,r.jsxs)(s.p,{children:["The protocols with native support come along with a ",(0,r.jsx)(s.code,{children:"@_ProtocolName_Binding"})," annotation to define protocol specific properties."]}),"\n",(0,r.jsxs)(s.h3,{id:"springwolf-protocol-binding-bindings",children:[(0,r.jsx)(s.code,{children:"springwolf-<protocol>-binding"})," bindings"]}),"\n",(0,r.jsx)(s.p,{children:"Springwolf also provides some libraries to document bindings. Those libraries provide a light alternative (without 3rd party dependencies)"}),"\n",(0,r.jsx)(s.p,{children:"The supported binding annotations are:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Protocol"}),(0,r.jsx)(s.th,{children:"Annotations"}),(0,r.jsx)(s.th,{children:"Latest Plugin Version"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AMQP"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@AmqpAsyncOperationBinding"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-amqp-binding?color=green&label=springwolf-amqp-binding&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"GooglePubSub"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@GooglePubSubAsyncChannelBinding"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-googlepubsub-binding?color=green&label=springwolf-googlepubsub-binding&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"JMS"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@JmsAsyncOperationBinding"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-jms-binding?color=green&label=springwolf-jms-binding&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Kafka"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@KafkaAsyncOperationBinding"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-kafka-binding?color=green&label=springwolf-kafka-binding&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SNS"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@SnsAsyncOperationBinding"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sns-binding?color=green&label=springwolf-sns-binding&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SQS"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@SqsAsyncOperationBinding"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-sqs-binding?color=green&label=springwolf-sqs-binding&style=plastic",alt:"Maven Central"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"STOMP (WebSocket)"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"@StompAsyncOperationBinding"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.img,{src:"https://img.shields.io/maven-central/v/io.github.springwolf/springwolf-stomp-binding?color=green&label=springwolf-stomp-binding&style=plastic",alt:"Maven Central"})})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"/docs/introduction/add-ons#generic-binding",children:"Add-Ons / Generic Annotation Binding"})]})}),"\n",(0,r.jsx)(s.h2,{id:"wire-format-data-serialization",children:"Wire format (Data serialization)"}),"\n",(0,r.jsx)(s.p,{children:"Besides the classical JSON events, Springwolf has best-effort support for some other wire formats."}),"\n",(0,r.jsx)(s.h3,{id:"avro",children:"Avro"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://avro.apache.org",children:"Avro"})," is supported out-of-the box and demoed in ",(0,r.jsx)(s.a,{href:"#native-support",children:"kafka example"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"protobuf",children:"Protobuf"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://protobuf.dev",children:"Protobuf"})," is demoed in ",(0,r.jsx)(s.a,{href:"#native-support",children:"kafka example"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["To remove the fields generated by the Protobuf class generated, add a ",(0,r.jsx)(s.code,{children:"ModelResolver"})," bean, which uses the ",(0,r.jsx)(s.code,{children:"ProtobufModule"})," to your project.\nSee ",(0,r.jsx)(s.a,{href:"https://github.com/springwolf/springwolf-core/blob/master/springwolf-examples/springwolf-kafka-example/src/main/java/io/github/springwolf/examples/kafka/configuration/ProtobufConfiguration.java",children:"ProtobufConfiguration"})," for details."]})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var i=n(6540);const r={},o=i.createContext(r);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);