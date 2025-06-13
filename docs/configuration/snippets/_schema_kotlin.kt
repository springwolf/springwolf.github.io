import io.swagger.v3.oas.annotations.media.Schema
import io.swagger.v3.oas.annotations.media.Schema.RequiredMode.REQUIRED

@Schema(description = "Example payload model")
public data class ExamplePayloadDto(
    // The `@field:` annotation use-site target is important
    @field:Schema(description = "Some string field", example = "some string value", requiredMode = REQUIRED)
    public val someString: String,
)

// Note: Kotlin inline value classes use mangling: https://kotlinlang.org/docs/inline-classes.html#mangling