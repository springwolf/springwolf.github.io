import io.swagger.v3.oas.annotations.media.Schema;
import static io.swagger.v3.oas.annotations.media.Schema.RequiredMode.REQUIRED;

@Schema(description = "Example payload model")
public class ExamplePayloadDto {
    @Schema(description = "Some string field", example = "some string value", requiredMode = REQUIRED)
    private String someString;

    public String getSomeString() {
        return someString;
    }
}