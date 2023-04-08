@Configuration
public class AsyncApiConfiguration {

    private final String BOOTSTRAP_SERVERS;

    public AsyncApiConfiguration(@Value("${kafka.bootstrap.servers}") String bootstrapServers) {
        this.BOOTSTRAP_SERVERS = bootstrapServers;
    }

    @Bean
    public AsyncApiDocket asyncApiDocket() {
        Info info = Info.builder()
                .title("Springwolf example project - Kafka")
                .version("1.0.0")
                .contact(Contact.builder()
                        .name("springwolf")
                        .url("https://github.com/springwolf/springwolf-core")
                        .email("example@example.com")
                        .build())
                .description("Springwolf example project to demonstrate springwolfs abilities")
                .license(License.builder()
                        .name("Apache License 2.0")
                        .build())
                .build();

        return AsyncApiDocket.builder()
                .basePackage("io.github.stavshamir.springwolf.example.consumers")
                .info(info)
                .server("kafka", Server.builder()
                        .protocol("kafka")
                        .url(BOOTSTRAP_SERVERS)
                        .build())
                .build();
    }
}
