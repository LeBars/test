import Vue from 'vue'
import Multiselect from 'vue-multiselect'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// Index
import VMenu from './components/VMenu/VMenu'
import VHero from './components/VHero/VHero'
import VHeroContent from './components/VHeroContent/VHeroContent'
import VHeroSlider from './components/VHeroSlider/VHeroSlider'
import VFactoids from './components/VFactoids/VFactoids'
import VPartners from './components/VPartners/VPartners'

// VUI
import VButton from './components/VUI/VButton'
import VSelect from './components/VUI/VSelect'

import {
  resourcePath,
  screenWidth,
  injectAgreementDocs
} from '@/mixins/index'

import { lazyLoad } from '@/plugins/index'
import 'swiper/dist/css/swiper.css'

Vue.component('multiselect', Multiselect)

Vue.use(VueAwesomeSwiper)
Vue.use(lazyLoad)

new Vue({
  components: {
    VButton,
    VSelect,
    VMenu,
    VHero,
    VHeroContent,
    VHeroSlider,
    VFactoids,
    VPartners
  },
  mixins: [
    resourcePath,
    screenWidth,
    injectAgreementDocs
  ]
}).$mount('#app')