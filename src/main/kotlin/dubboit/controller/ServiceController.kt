package dubboit.controller

import dubboit.ApplicationManager
import dubboit.InvokeResult
import org.apache.dubbo.config.ReferenceConfig
import org.apache.dubbo.rpc.service.GenericService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class ServiceController : BaseController() {
    @PostMapping("/services/invoke")
    fun invoke(): InvokeResult {
        val referenceConfig = ReferenceConfig<GenericService>()
        referenceConfig.setInterface("demo.DemoService")
        referenceConfig.isGeneric = true
        referenceConfig.application = ApplicationManager.getApplication("test")

        val genericService = referenceConfig.get()
        val value = genericService.`$invoke`("sayHello", arrayOf(String::class.java.name), arrayOf("World"))

        return InvokeResult(value)
    }
}
