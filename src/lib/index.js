import vuePayKeyBoard from './vue-pay-keyboard.vue'

const paykeyboard = {
    install (Vue, options) {
        Vue.component(vuePayKeyBoard.name, vuePayKeyBoard)
    }
}

if(typeof window !== undefined && window.Vue) {
    window.Vue.use(paykeyboard)
}

export default paykeyboard