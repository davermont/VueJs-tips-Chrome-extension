var tipsData = [ {
    tip:'Starting a VueJs app with vue-cli',
    code:'vue init  webpack projectName'
}, {
    tip:'Starting a PWA web app with vue-cli',
    code:'vue init  pwa projectName'
}, {
    tip:'To make an instance of Vue when creating your app with a data model',
    code:"Vue({<br>  el:'#app',<br>  data:{}<br>})"
}, {
    tip:'VueJs uses an MVVM pattern where:',
    code:'data= Model <br>template= View <br>Vue instance= ViewModel'
}, {
    tip:'To create a component with Vue you do',
    code:"Vue.component('component-name',{})"
}, {
    tip:'Looping through a list or an array you use the v-for directive',
    code:" v-for='item in items' v-bind:key='item' "
}, {
    tip:'To interpolate your data in you view/template use <b> {{}}</b>',
    code:'{{data}}'
}, {
    tip:'Running flow control in your template in vue is very easy ethier you use <b>v-if</b> which remove the element from the DOM or <b>v-seen</b> set the <b>display</b> to <b>none</b>',
    code:' E.g:<br>  v-if="true">Now you can see me <br>  v-seen="false">Am hiding now'
}, {
    tip:'Creating a plugin in Vue is very easy all you need to do is create an object that has an install method and pass Vue as a parameter. Here we create a simple <b>sqrt</b> custom directive',
    code:"//using ES6 <br>const MathPlugin = {<br>  install(Vue){<br>    Vue.directive('sqrt', (el, binding) => {<br>      el.innerHTML = Math.sqrt(binding.value)<br>    })<br>  }<br>}<br>//to use it you have to install it <br>Vue.use(MathPlugIn)<br>//then use the directive in your template<br>&lt;span v-sqrt='index'>&lt;span>"
}, {
    tip:'Vue is similar to React in the way it handles component data flow which is <b>one way</b> from the parent to the child',
    code:"Vue.component({<br>  props: ['properName']<br>})"
}, {
    tip:"To pass data from the child to the parent component we use an event handler which take two parameters: <b>event</b> and <b>value</b> as shown below",
    code:"this.$emit('event', value); //which is passed up to the parent"
} ];