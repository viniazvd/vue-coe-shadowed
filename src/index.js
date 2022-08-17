import Shadowed from './Shadowed.vue'

const install = Vue => {
  Vue.component('shadowed', Shadowed)
}

export { Shadowed }
export default { install }