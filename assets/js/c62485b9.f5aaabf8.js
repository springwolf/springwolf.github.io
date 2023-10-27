"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10},a="Introduction",s={unversionedId:"introduction/introduction",id:"introduction/introduction",title:"Introduction",description:"What's Springwolf",source:"@site/docs/introduction/introduction.md",sourceDirName:"introduction",slug:"/introduction/",permalink:"/docs/introduction/",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/introduction/introduction.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",next:{title:"Supported Protocols",permalink:"/docs/introduction/supported-protocols"}},p={},l=[{value:"What&#39;s Springwolf",id:"whats-springwolf",level:2},{value:"Demo",id:"demo",level:3},{value:"What does it do",id:"what-does-it-do",level:2}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("h2",{id:"whats-springwolf"},"What's Springwolf"),(0,r.kt)("p",null,"API Documentation is an important part of every project and product, but can be painful to maintain manually.\nSpring Boot projects have great solutions for auto-generated documentation for REST APIs to overcome this pain (such as Springfox, or springdoc-openapi)."),(0,r.kt)("p",null,"However, until now there were no solutions for asynchronous APIs (such as AMQP, Kafka, SQS, etc.). Springwolf aims to solve this and provides auto-generated documentation for asynchronous APIs built in Spring Boot."),(0,r.kt)("p",null,"Springwolf is compliant to ",(0,r.kt)("a",{parentName:"p",href:"https://www.asyncapi.com"},"AsyncAPI"),", which brings the ",(0,r.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/tutorials/getting-started/coming-from-openapi"},"swagger/OpenAPI")," specification you know already from REST APIs into the world of event-driven architectures."),(0,r.kt)("h3",{id:"demo"},"Demo"),(0,r.kt)("p",null,"View the ",(0,r.kt)("a",{parentName:"p",href:"https://demo.springwolf.dev"},"live demo")," of Springwolf in action."),(0,r.kt)("p",null,"Also, the demos of the\n",(0,r.kt)("a",{parentName:"p",href:"https://amqp.demo.springwolf.dev"},"AMQP"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud-stream.demo.springwolf.dev"},"Spring Cloud Stream"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://kafka.demo.springwolf.dev"},"Kafka"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://sqs.demo.springwolf.dev"},"SQS"),"\nexample projects are available."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Springwolf publishing demo",src:n(911).Z,width:"1734",height:"621"})),(0,r.kt)("h2",{id:"what-does-it-do"},"What does it do"),(0,r.kt)("p",null,"If you are using Spring Boot annotation based listeners (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@KafkaListener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@RabbitListener")," etc.), you probably have something like this in your codebase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Service\npublic class ExampleConsumer {\n\n    @KafkaListener(topics = "example-topic")\n    public void receiveExamplePayload(ExamplePayloadDto payload) {\n        // Do something with payload\n    }\n\n}\n')),(0,r.kt)("p",null,"By simply adding Springwolf dependency to your project you will automatically get:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An endpoint returning an AsyncAPI document describing your asynchronous API."),(0,r.kt)("li",{parentName:"ul"},"A web UI for convenient use by your developers, QA or clients of your asynchronous API."),(0,r.kt)("li",{parentName:"ul"},"An easy way to publish messages to your asynchronous API with a click of a button")))}u.isMDXComponent=!0},911:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/demo-9f314b728b957b686c32585ff0a7c8a0.gif"}}]);