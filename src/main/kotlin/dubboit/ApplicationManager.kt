package dubboit

import org.apache.dubbo.config.ApplicationConfig
import org.apache.dubbo.config.RegistryConfig
import java.util.concurrent.ConcurrentHashMap

object ApplicationManager {
    private val applications: MutableMap<String, ApplicationConfig> = ConcurrentHashMap()

    fun addApplication(registry: Registry) {
        val registryConfig = RegistryConfig()
        registryConfig.address = registry.address

        val applicationConfig = ApplicationConfig()
        applicationConfig.name = registry.name
        applicationConfig.registry = registryConfig

        applications[registry.name] = applicationConfig
    }

    fun getApplication(name: String): ApplicationConfig? {
        return applications[name]
    }
}
