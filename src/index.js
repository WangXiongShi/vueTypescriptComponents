import * as components from './components'
var VuePlugin = {}
VuePlugin.install = function(Vue, options) {
    for(let component in components) {
      console.log(component);
        Vue.component('yw'+component, components[component]);
    }
}
export default VuePlugin