---
sidebar_position: 5
---

# Providing An Example Producer

Springwolf is great not only for auto-generated documentation from code - it provides additional value by allowing you to publish a payload with one click:

![Publisher UI](/img/publisher-ui.png)

This feature must be enabled by providing an example producer implementation in you Spring Boot application.

## SpringwolfProducer

Provide a bean implementing the `SpringwolfProducer` interface. The name of the bean is important and must match the name of the protocl (i.e. `SpringwolfKafkaProducer`, `SpringwolfAmqpProducer` etc.).

The published payload type is `Map<String, Object>` so that all types from the different channels can be serialized and published. 

## Kafka Producer Configuration

There are multiple ways to implement a Kafka producer, this is just an example to help you get started.
You can see the full example [here][kafka-example].

### Producer Configuration

**Make sure to include the `JsonSerializer.ADD_TYPE_INFO_HEADERS, false` configuration property, otherwise Spring adds type headers which mess up the deserialization to the actual payload type in the consumer.**

```java
@Configuration
@EnableKafka
public class KafkaConfiguration {

    private final String BOOTSTRAP_SERVERS;

    public KafkaConfiguration(@Value("${kafka.bootstrap.servers}") String bootstrapServers) {
        this.BOOTSTRAP_SERVERS = bootstrapServers;
    }

    @Bean
    public KafkaTemplate<String, Map<String, Object>> objectKafkaTemplate() {
        Map<String, Object> configuration = ImmutableMap.of(
                ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAP_SERVERS,
                ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class,
                ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class,
                JsonSerializer.ADD_TYPE_INFO_HEADERS, false
        );

        return new KafkaTemplate<>(new DefaultKafkaProducerFactory<>(configuration));
    }

}
```

### SpringwolfKafkaProducer

```java
@Service
public class SpringwolfKafkaProducer implements SpringwolfProducer {

    @Autowired
    private KafkaTemplate<String, Map<String, Object>> kafkaTemplate;

    @Override
    public void send(String channelName, Map<String, Object> payload) {
        kafkaTemplate.send(channelName, payload);
    }

}
```

## AMQP (RabbitMQ) Producer Configuration

There are multiple ways to implement a Rabbit producer, this is just an example to help you get started.
You can see the full example [here][amqp-example].

### Producer Configuration

There is no special configuration required for the producer.

### SpringwolfAmqpProducer

```java
@Service
public class SpringwolfAmqpProducer implements SpringwolfProducer {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Override
    public void send(String channelName, Map<String, Object> payload) {
        rabbitTemplate.convertAndSend(channelName, payload);
    }

}
```

[kafka-example]: https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-kafka-example
[amqp-example]:https://github.com/springwolf/springwolf-core/tree/master/springwolf-examples/springwolf-amqp-example