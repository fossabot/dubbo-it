package dubboit

class InvokeResult(val value: Any?) {
    constructor(error: InvokeError) : this(null) {
        this.success = false
        this.error = error
    }

    var success = true

    var error: InvokeError? = null
}
