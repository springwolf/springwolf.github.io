"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[493],{743:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=e(5893),i=e(1151);const s={sidebar_position:10},r="Introduction",a={id:"introduction/introduction",title:"Introduction",description:"Integrate Springwolf in minutes using the Quickstart.",source:"@site/docs/introduction/introduction.md",sourceDirName:"introduction",slug:"/introduction/",permalink:"/docs/introduction/",draft:!1,unlisted:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/introduction/introduction.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"defaultSidebar",next:{title:"Supported Protocols",permalink:"/docs/introduction/supported-protocols"}},c={},d=[{value:"What&#39;s Springwolf",id:"whats-springwolf",level:2},{value:"Demo",id:"demo",level:2},{value:"What does it do",id:"what-does-it-do",level:2}];function l(n){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["Integrate Springwolf in minutes using the ",(0,t.jsx)(o.a,{href:"/docs/quickstart",children:"Quickstart"}),"."]})}),"\n",(0,t.jsx)(o.h2,{id:"whats-springwolf",children:"What's Springwolf"}),"\n",(0,t.jsx)(o.p,{children:"API Documentation is an important part of every project and product, but can be painful to maintain manually.\nSpring Boot projects have great solutions for auto-generated documentation for REST APIs to overcome this pain (such as Springfox, or springdoc-openapi)."}),"\n",(0,t.jsx)(o.p,{children:"However, until now there were no solutions for asynchronous APIs (such as AMQP, JMS, Kafka, SNS, SQS, STOMP/WebSocket, etc.). Springwolf aims to solve this and provides auto-generated documentation for asynchronous APIs built in Spring Boot."}),"\n",(0,t.jsxs)(o.p,{children:["Springwolf is compliant to ",(0,t.jsx)(o.a,{href:"https://www.asyncapi.com",children:"AsyncAPI"}),", which brings the ",(0,t.jsx)(o.a,{href:"https://www.asyncapi.com/docs/tutorials/getting-started/coming-from-openapi",children:"swagger/OpenAPI"})," specification you know already from REST APIs into the world of event-driven architectures."]}),"\n",(0,t.jsx)(o.h2,{id:"demo",children:"Demo"}),"\n",(0,t.jsxs)(o.p,{children:["View the ",(0,t.jsx)(o.a,{href:"https://demo.springwolf.dev",children:"live demo"})," of Springwolf in action."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://demo.springwolf.dev",children:(0,t.jsx)(o.img,{alt:"Springwolf publishing demo",src:e(911).Z+"",width:"1734",height:"621"})})}),"\n",(0,t.jsx)(o.h2,{id:"what-does-it-do",children:"What does it do"}),"\n",(0,t.jsxs)(o.p,{children:["If you are using Spring Boot annotation based listeners (such as ",(0,t.jsx)(o.code,{children:"@KafkaListener"}),", ",(0,t.jsx)(o.code,{children:"@RabbitListener"})," etc.), you probably have something like this in your codebase:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:'@Service\npublic class ExampleConsumer {\n\n    @KafkaListener(topics = "example-topic")\n    public void receiveExamplePayload(ExamplePayloadDto payload) {\n        // Do something with payload\n    }\n\n}\n'})}),"\n",(0,t.jsx)(o.p,{children:"By simply adding Springwolf dependency to your project you will automatically get:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"An endpoint returning an AsyncAPI document describing your asynchronous API."}),"\n",(0,t.jsx)(o.li,{children:"A web UI for convenient use by your developers, QA or clients of your asynchronous API."}),"\n",(0,t.jsx)(o.li,{children:"An easy way to publish messages to your asynchronous API with a click of a button"}),"\n"]})]})}function u(n={}){const{wrapper:o}={...(0,i.a)(),...n.components};return o?(0,t.jsx)(o,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},911:(n,o,e)=>{e.d(o,{Z:()=>t});const t=e.p+"assets/images/demo-9f314b728b957b686c32585ff0a7c8a0.gif"},1151:(n,o,e)=>{e.d(o,{Z:()=>a,a:()=>r});var t=e(7294);const i={},s=t.createContext(i);function r(n){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function a(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(s.Provider,{value:o},n.children)}}}]);