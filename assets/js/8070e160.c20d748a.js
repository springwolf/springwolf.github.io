"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[651],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),i=n(7294),o=n(6010),r=n(2389),l=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:m,groupId:f,className:k}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,l.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,s.U)(),[A,C]=(0,i.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==A&&g.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==A&&(I(t),C(a),null!=f&&y(f,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},k)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>E.push(e),onKeyDown:T,onFocus:S,onClick:S},r,{className:(0,o.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":A===t})}),n??t)}))),n?(0,i.cloneElement)(v.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function m(e){const t=(0,r.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},6070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),o=n(5488),r=n(5162),l=n(814);const s={sidebar_position:2},u="Quickstart",c={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"The following instructions are for Kafka services - but amqp services configuration is almost identical. Check out the example project for complete examples.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/springwolf/springwolf.github.io/edit/master/docs/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Configuration",permalink:"/docs/configuration"}},p={},d=[{value:"Dependencies",id:"dependencies",level:2},{value:"Configuration Class",id:"configuration-class",level:2},{value:"View the docs",id:"view-the-docs",level:2}],m={toc:d};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The following instructions are for Kafka services - but amqp services configuration is almost identical. Check out the ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/timonback/springwolf-core/tree/master/springwolf-examples"},"example project for complete examples"),".")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Add the following dependencies:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Groovy",label:"Groovy",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"groovy",mdxType:"CodeBlock"},"dependencies {\n    // Provides the documentation API\n    implementation 'io.github.springwolf:springwolf-kafka:0.8.0'\n\n    // Provides the UI - optional (recommended)\n    runtimeOnly 'io.github.springwolf:springwolf-ui:0.5.0'\n}")),(0,i.kt)(r.Z,{value:"Maven",label:"Maven",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"xml",mdxType:"CodeBlock"},"<dependencies>\n    \x3c!-- Provides the documentation API --\x3e\n    <dependency>\n        <groupId>io.github.springwolf</groupId>\n        <artifactId>springwolf-kafka</artifactId>\n        <version>0.8.0</version>\n    </dependency>\n    \x3c!-- Provides the UI - optional (recommended) --\x3e\n    <dependency>\n        <groupId>io.github.springwolf</groupId>\n        <artifactId>springwolf-ui</artifactId>\n        <version>0.5.0</version>\n    </dependency>\n</dependencies>"))),(0,i.kt)("h2",{id:"configuration-class"},"Configuration Class"),(0,i.kt)("p",null,"Add the following configuration class."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Make sure to change the value of ",(0,i.kt)("inlineCode",{parentName:"em"},"CONSUMERS_BASE_PACKAGE")," to the package containing your Kafka listeners."),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@EnableAsyncApi\npublic class AsyncApiConfiguration {\n\n    private final String BOOTSTRAP_SERVERS = "kafka:29092";\n    private final String CONSUMERS_BASE_PACKAGE = "io.github.stavshamir.springwolf.example.consumers";\n\n    @Bean\n    public AsyncApiDocket asyncApiDocket() {\n        Info info = Info.builder()\n                .version("1.0.0")\n                .title("Springwolf example project")\n                .build();\n\n        Server kafkaServer = Server.builder()\n            .protocol("kafka")\n            .url(BOOTSTRAP_SERVERS)\n            .build();\n\n        return AsyncApiDocket.builder()\n                .basePackage(CONSUMERS_BASE_PACKAGE)\n                .info(info)\n                .server("kafka", kafkaServer)\n                .build();\n    }\n\n}\n')),(0,i.kt)("h2",{id:"view-the-docs"},"View the docs"),(0,i.kt)("p",null,"After starting the application, visit ",(0,i.kt)("inlineCode",{parentName:"p"},"<host>:<port>/springwolf/asyncapi-ui.html")," to view the UI or ",(0,i.kt)("inlineCode",{parentName:"p"},"<host>:<port>/springwolf/docs")," to view the raw AsyncAPI document."),(0,i.kt)("p",null,"If you configured a different context path in your application, make sure to prepend it to springwolf urls, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"<host>:<port>/<context-path>/springwolf/asyncapi-ui.html")))}f.isMDXComponent=!0}}]);