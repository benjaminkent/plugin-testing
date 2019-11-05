import Springers from './plugins/Springers.vue'

const SpringerPlugin = {
    install(Vue, options) {
        Vue.component(Springers.name, Springers)
    }
}

export default SpringerPlugin