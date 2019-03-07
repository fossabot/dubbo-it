package dubboit.controller

import dubboit.Registry
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class RegistryController : BaseController() {
    @PostMapping("/registries")
    fun addRegistry(@RequestBody registry: Registry): Registry {
        return registry
    }
}
