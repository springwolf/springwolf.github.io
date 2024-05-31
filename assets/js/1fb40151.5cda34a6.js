"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[847],{5241:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(5893),i=s(1151);const o={sidebar_position:70},r="Behind the scenes",c={id:"behind-the-scenes",title:"Behind the scenes",description:"The following paragraphs describe how Springwolf works internally.",source:"@site/docs/behind-the-scenes.md",sourceDirName:".",slug:"/behind-the-scenes",permalink:"/docs/behind-the-scenes",draft:!1,unlisted:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/behind-the-scenes.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Add-Ons",permalink:"/docs/add-ons"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},a={},d=[{value:"Big Picture",id:"big-picture",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Scanners",id:"scanners",level:2},{value:"Building an example payload",id:"building-an-example-payload",level:2},{value:"ModelConverters",id:"modelconverters",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"behind-the-scenes",children:"Behind the scenes"}),"\n",(0,t.jsx)(n.p,{children:"The following paragraphs describe how Springwolf works internally."}),"\n",(0,t.jsx)(n.h2,{id:"big-picture",children:"Big Picture"}),"\n",(0,t.jsxs)(n.p,{children:["When the Spring Boot application is started, Springwolf uses its scanners to find defined consumers and producers within the application.\nBased on the results, the channels/topics are extracted including payload type and merged together into an ",(0,t.jsx)(n.a,{href:"https://www.asyncapi.com/docs/reference/specification/v3.0.0",children:"AsyncAPI conform document"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The AsyncAPI document is accessible an endpoint.\nWhen the Springwolf UI is opened, the browser fetches the document and renders it (see demo)."}),"\n",(0,t.jsx)(n.p,{children:"When publishing is enabled, the user can publish a message through the UI to another endpoint.\nFrom there, Springwolf forwards the message to the protocol specific producer."}),"\n",(0,t.jsx)(n.h2,{id:"plugins",children:"Plugins"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"springwolf-core"})," provides the base functionality to orchestrate the scanning and building of the AsyncAPI document.\nThe different protocol (AMQP, Cloud-Stream, JMS, Kafka, SNS, SQS) are supported through plugins.\nThese plugins are found through the Spring dependency injection functionality.\nWhen building own scanner plugins, your plugin will need to implement the ",(0,t.jsx)(n.code,{children:"ChannelsScanner"})," interface."]}),"\n",(0,t.jsx)(n.h2,{id:"scanners",children:"Scanners"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"springwolf-core"})," runs all scanners and merges the found results together into one AsyncAPI document.\nWhen the same channel/topic is found multiple times, it's merged as well.\nOne example of such, is when a method uses the Springwolf ",(0,t.jsx)(n.code,{children:"@AsyncListener"})," annotation together with the protocol annotation, like ",(0,t.jsx)(n.code,{children:"@KafkaListener"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The result is a ",(0,t.jsx)(n.a,{href:"https://www.asyncapi.com/docs/reference/specification/v3.0.0#channelObject",children:(0,t.jsx)(n.code,{children:"ChannelItem"})}),".\nThe ",(0,t.jsx)(n.code,{children:"ChannelObject"})," contains the ",(0,t.jsx)(n.code,{children:"Message"})," for the receive and/or send operation."]}),"\n",(0,t.jsx)(n.h2,{id:"building-an-example-payload",children:"Building an example payload"}),"\n",(0,t.jsxs)(n.p,{children:["When the scanners scan and build the result, they also extract the payload type.\nThe payload is registered in the ",(0,t.jsx)(n.code,{children:"ComponentsService"}),", which allows to split the ",(0,t.jsx)(n.code,{children:"Message"})," from the schema definition - within the AsyncAPI doc a ",(0,t.jsx)(n.code,{children:"$ref"})," references is used."]}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"swagger-core"})," any class can be converted into an OpenApi schema.\nThe schema is ",(0,t.jsx)(n.a,{href:"https://www.asyncapi.com/docs/tutorials/getting-started/coming-from-openapi",children:"mapped into an AsyncAPI schema"})," and included in the AsyncAPI document.\nAdditionally, Springwolf generates an example based on the provided schema."]}),"\n",(0,t.jsxs)(n.p,{children:["By using ",(0,t.jsx)(n.code,{children:"swagger-parser"}),", all the ",(0,t.jsx)(n.code,{children:"@Schema"})," and other swagger annotations are supported as well as ",(0,t.jsx)(n.code,{children:"@JsonProperty"})," through the use of the ObjectMapper."]}),"\n",(0,t.jsx)(n.h3,{id:"modelconverters",children:"ModelConverters"}),"\n",(0,t.jsx)(n.p,{children:"ModelConverters provide a way to improve documentation for classes, which can't be modified, for example because they're part of an external library.\nThey follow the same plugin model."}),"\n",(0,t.jsx)(n.h2,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"AsyncApiService"})," collects all the channels, schemas and general info and builds the AsyncApi document.\nThe controller access this services to serve the document to the UI."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(7294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);