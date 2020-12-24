import Vue from 'vue'

// VUI
import VButton from './components/VUI/VButton'

import {
  resourcePath,
  screenWidth,
  injectAgreementDocs
} from '@/mixins/index'

import { lazyLoad } from '@/plugins/index'

Vue.use(lazyLoad)

new Vue({
  components: {
    VButton
  },
  mixins: [
    resourcePath,
    screenWidth,
    injectAgreementDocs
  ]
}).$mount('#app')