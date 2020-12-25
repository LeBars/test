import Vue from 'vue'
import Multiselect from 'vue-multiselect'

// VUI
import VButton from './components/VUI/VButton'
import VSelect from './components/VUI/VSelect'

// Header
import VMenu from './components/VMenu/VMenu'

import {
  resourcePath,
  screenWidth,
  injectAgreementDocs
} from '@/mixins/index'

import { lazyLoad } from '@/plugins/index'

Vue.component('multiselect', Multiselect)

Vue.use(lazyLoad)

new Vue({
  components: {
    VButton,
    VSelect,
    VMenu
  },
  mixins: [
    resourcePath,
    screenWidth,
    injectAgreementDocs
  ]
}).$mount('#app')