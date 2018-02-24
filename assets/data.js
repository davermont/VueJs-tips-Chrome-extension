var tipsData = [ {
    tip:'Starting a VueJs app with vue-cli',
    code:'vue init webpack projectName'
}, {
    tip:'Starting a PWA web app with vue-cli',
    code:'vue init pwa projectName'
}, {
    tip:'To make an instance of Vue when creating your app with a data model',
    code:"Vue({\n  el:'#app',\n  data:{\n    title: 'My App'\n  }\n})"
}, {
    tip:'VueJs uses an MVVM pattern where:',
    code:'data= Model<br>template= View <br>Vue instance= ViewModel'
}, {
    tip:'To create a component with Vue:',
    code:"Vue.component('some-thing',{\n  data: function() {\n    return {}\n  }\n})"
}, {
    tip:'Looping through a list or an array you use the v-for directive',
    code:"&lt;div v-for='item in items' v-bind:key='item'><br><br>// or:<br>&lt;div v-for='item in items' :key='item'>"
}, {
    tip:'To interpolate your data in you view/template use <b> {{}}</b>',
    code:'{{ data }}'
}, {
    tip:'Running flow control in your template in vue is very easy either you use <b>v-if</b> which removes the element from the DOM or <b>v-show</b> to set the <b>display</b> to <b>none</b>',
    code:'&lt;div v-if="true">Now you can see me&lt;/div>\n\n&lt;div v-show="false">Am hiding now&lt;/div>'
}, {
    tip:'Creating a plugin in Vue is very easy, all you need to do is create an object that has an install method and pass Vue as a parameter. Here we create a simple <b>sqrt</b> custom directive',
    code:"// using ES6 <br>const MathPlugin = {\n  install(Vue){\n    Vue.directive('sqrt', (el, binding) => {\n      el.innerHTML = Math.sqrt(binding.value)\n    })\n  }\n}\n\n// to use it you have to install it <br>Vue.use(MathPlugIn)\n\n// then use the directive in your template<br>&lt;span v-sqrt='index'>&lt;span>"
}, {
    tip:'Vue is similar to React in the way it handles component data flow which is <b>one way</b> from the parent to the child',
    code:"Vue.component('some-thing', {\n  props: {\n    name: {required: true, type: String}\n  }\n})"
}, {
    tip:"To pass data from the child to the parent component we use an event handler which take two parameters: <b>event</b> and <b>value</b> as shown below",
    code:"this.$emit('event', value); // passes event &amp; value up to the parent"
}, {
    tip:"Vue Lifecycle Hooks",
    code:"created() - called after component is created<br>mounted() - called after component is rendered into the DOM<br>updated() - called after component data changes and the DOM re-renders"
} ];