import Vue from 'vue'
import App from './App.vue'

import { faHeart, faUnlink, faBicycle, faCloud } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter, faInstagram)
library.add(faHeart, faUnlink, faBicycle, faCloud)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
