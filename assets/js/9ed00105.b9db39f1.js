"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[4],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="Configuration",l={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Configuration Class",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/docs/quickstart"},next:{title:"Documenting Schemas",permalink:"/docs/documenting-schemas"}},c={},p=[{value:"Configuration Class",id:"configuration-class",level:2},{value:"AsyncApiDocket",id:"asyncapidocket",level:2},{value:"basePackage (required)",id:"basepackage-required",level:3},{value:"Info (required)",id:"info-required",level:3},{value:"Server",id:"server",level:3},{value:"application.properties",id:"applicationproperties",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("h2",{id:"configuration-class"},"Configuration Class"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need to provide a configuration class annotated with:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"@Configuration")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"@EnableAsyncApi")))),(0,r.kt)("li",{parentName:"ul"},"The name of the class does no matter. You don't have to, but it is a good idea to name the class related to Springwolf or AsyncApi.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\n@EnableAsyncApi\npublic class AsyncApiConfiguration {\n  ...\n}\n")),(0,r.kt)("h2",{id:"asyncapidocket"},"AsyncApiDocket"),(0,r.kt)("p",null,"You need to provide an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncApiDocket")," bean, which provides Springwolf with metadata that is either not specified in code or can't be picked up automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic AsyncApiDocket asyncApiDocket() {\n    return AsyncApiDocket.builder()\n            .basePackage(...)\n            .info(...)\n            .server(...)\n            .build();\n}\n")),(0,r.kt)("h3",{id:"basepackage-required"},"basePackage (required)"),(0,r.kt)("p",null,"It is recommended to structue the project such that all consumers (classes containing listener methods) are in the same package - it is not mandatory, and if the consumer are scattered across multiple packages, just provide the highest in hierarchy package that containes all of them."),(0,r.kt)("p",null,"The base package will be scanned for classes containing ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component")," annotated classes (that includes ",(0,r.kt)("inlineCode",{parentName:"p"},"@Service")," annotated classes) for methods annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@KafkaListener"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@RabbitListener"),", etc."),(0,r.kt)("h3",{id:"info-required"},"Info (required)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Info")," object provides metadata about the API (see ",(0,r.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/specifications/v2.0.0#infoObject)."},"Info Object"),")."),(0,r.kt)("p",null,"All provided fields will be present in the generated document, but not all will be displayed in the UI."),(0,r.kt)("h3",{id:"server"},"Server"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Server")," object provides metadata the can help the reader understand the protocol, version, login details and more (see ",(0,r.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/specifications/v2.0.0#serverObject"},"Server Object"),")."),(0,r.kt)("p",null,"An AsyncAPI document can contain more than one server, but it is not common."),(0,r.kt)("p",null,"The server is provided to the document with an arbitrary name as the key, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Server")," object as the value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic AsyncApiDocket asyncApiDocket() {\n    Server kafkaServer = Server.builder()\n        .protocol("kafka")\n        .url(BOOTSTRAP_SERVERS)\n        .build();\n\n    return AsyncApiDocket.builder()\n            .basePackage(...)\n            .info(...)\n            .server("whatever name you want", kafkaServer)\n            .build();\n}\n')),(0,r.kt)("p",null,"As with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Info")," object, all provided fields will be present in the generated document, but not all will be displayed in the UI."),(0,r.kt)("h2",{id:"applicationproperties"},"application.properties"),(0,r.kt)("p",null,"The following table contains the complete list of additional properties that can be specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," file:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"springwolf.paths.docs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/springwolf/docs")),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the AsyncAPI document in JSON format. ",(0,r.kt)("em",{parentName:"td"},"Note that at the moment the UI will work only with the default value."))))))}d.isMDXComponent=!0}}]);