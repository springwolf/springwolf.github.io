"use strict";(self.webpackChunkspringwolf_docs=self.webpackChunkspringwolf_docs||[]).push([[715],{220:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),t=["components"],p={sidebar_position:5},l="Providing An Example Producer",u={unversionedId:"providing-an-example-producer",id:"providing-an-example-producer",isDocsHomePage:!1,title:"Providing An Example Producer",description:"Springwolf is great not only for auto-generated documentation from code - it provides additional value by allowing you to publish a payload with one click:",source:"@site/docs/providing-an-example-producer.md",sourceDirName:".",slug:"/providing-an-example-producer",permalink:"/docs/providing-an-example-producer",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/providing-an-example-producer.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Documenting Producers",permalink:"/docs/documenting-producers"},next:{title:"Supported Protocols",permalink:"/docs/supported-protocols"}},d=[{value:"SpringwolfProducer",id:"springwolfproducer",children:[],level:2},{value:"Kafka Producer Configuration",id:"kafka-producer-configuration",children:[{value:"Producer Configuration",id:"producer-configuration",children:[],level:3},{value:"SpringwolfKafkaProducer",id:"springwolfkafkaproducer",children:[],level:3}],level:2},{value:"AMQP (RabbitMQ) Producer Configuration",id:"amqp-rabbitmq-producer-configuration",children:[{value:"Producer Configuration",id:"producer-configuration-1",children:[],level:3},{value:"SpringwolfAmqpProducer",id:"springwolfamqpproducer",children:[],level:3}],level:2}],c={toc:d};function s(e){var r=e.components,p=(0,o.Z)(e,t);return(0,i.kt)("wrapper",(0,a.Z)({},c,p,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"providing-an-example-producer"},"Providing An Example Producer"),(0,i.kt)("p",null,"Springwolf is great not only for auto-generated documentation from code - it provides additional value by allowing you to publish a payload with one click:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Publisher UI",src:n(8768).Z})),(0,i.kt)("p",null,"This feature must be enabled by providing an example producer implementation in you Spring Boot application."),(0,i.kt)("h2",{id:"springwolfproducer"},"SpringwolfProducer"),(0,i.kt)("p",null,"Provide a bean implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringwolfProducer")," interface. The name of the bean is important and must match the name of the protocl (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringwolfKafkaProducer"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringwolfAmqpProducer")," etc.)."),(0,i.kt)("p",null,"The published payload type is ",(0,i.kt)("inlineCode",{parentName:"p"},"Map<String, Object>")," so that all types from the different channels can be serialized and published. "),(0,i.kt)("h2",{id:"kafka-producer-configuration"},"Kafka Producer Configuration"),(0,i.kt)("p",null,"There are multiple ways to implement a Kafka producer, this is just an example to help you get started.\nYou can see the full example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example"},"here"),"."),(0,i.kt)("h3",{id:"producer-configuration"},"Producer Configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make sure to include the ",(0,i.kt)("inlineCode",{parentName:"strong"},"JsonSerializer.ADD_TYPE_INFO_HEADERS, false")," configuration property, otherwise Spring adds type headers which mess up the deserialization to the actual payload type in the consumer.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@EnableKafka\npublic class KafkaConfiguration {\n\n    private final String BOOTSTRAP_SERVERS;\n\n    public KafkaConfiguration(@Value("${kafka.bootstrap.servers}") String bootstrapServers) {\n        this.BOOTSTRAP_SERVERS = bootstrapServers;\n    }\n\n    @Bean\n    public KafkaTemplate<String, Map<String, Object>> objectKafkaTemplate() {\n        Map<String, Object> configuration = ImmutableMap.of(\n                ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAP_SERVERS,\n                ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class,\n                ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class,\n                JsonSerializer.ADD_TYPE_INFO_HEADERS, false\n        );\n\n        return new KafkaTemplate<>(new DefaultKafkaProducerFactory<>(configuration));\n    }\n\n}\n')),(0,i.kt)("h3",{id:"springwolfkafkaproducer"},"SpringwolfKafkaProducer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Service\npublic class SpringwolfKafkaProducer implements SpringwolfProducer {\n\n    @Autowired\n    private KafkaTemplate<String, Map<String, Object>> kafkaTemplate;\n\n    @Override\n    public void send(String channelName, Map<String, Object> payload) {\n        kafkaTemplate.send(channelName, payload);\n    }\n\n}\n")),(0,i.kt)("h2",{id:"amqp-rabbitmq-producer-configuration"},"AMQP (RabbitMQ) Producer Configuration"),(0,i.kt)("p",null,"There are multiple ways to implement a Rabbit producer, this is just an example to help you get started.\nYou can see the full example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example"},"here"),"."),(0,i.kt)("h3",{id:"producer-configuration-1"},"Producer Configuration"),(0,i.kt)("p",null,"There is no special configuration required for the producer."),(0,i.kt)("h3",{id:"springwolfamqpproducer"},"SpringwolfAmqpProducer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Service\npublic class SpringwolfAmqpProducer implements SpringwolfProducer {\n\n    @Autowired\n    private RabbitTemplate rabbitTemplate;\n\n    @Override\n    public void send(String channelName, Map<String, Object> payload) {\n        rabbitTemplate.convertAndSend(channelName, payload);\n    }\n\n}\n")))}s.isMDXComponent=!0},8768:function(e,r,n){r.Z=n.p+"assets/images/publisher-ui-e7b80fd54319f5b86a13953f918bd263.png"}}]);