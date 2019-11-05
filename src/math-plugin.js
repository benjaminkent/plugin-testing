import MathComponent from './plugins/MathComponent.vue'

const MathPlugin = {
    install(Vue, options) {
        Vue.component(MathComponent.name, MathComponent)
    }
}

export default MathPlugin