import Vue from 'vue'
import App from './App.vue'
import CardDisplay from './plugins/CardDisplay'
import './plugins/CardDisplay/styles.scss'

Vue.use(CardDisplay, {
});


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
