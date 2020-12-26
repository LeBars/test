<template>
  <div class="v-hero-content">
    <div class="v-hero-info">
      <a href="#" class="v-hero-review">
        <p class="__uppercase">{{ content.review }}</p>
        <svg>
          <use xlink:href="../../images/sprite.svg#play"></use>
        </svg>
      </a>
      <h1 class="v-hero-title">CURSOR</h1>
      <h4 class="v-hero-subtitle" v-html="content.subtitle"></h4>
      <v-button :link="content.link" :value="content.button"></v-button>
    </div>
    <div class="v-hero-img">
      <img :src="activeImg" alt="">
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus'
import { data } from '@/components/Api/Api'
import VButton from '../VUI/VButton'
export default {
  components: {
    VButton
  },
  data () {
    return {
      content: {},
      humans: [
        '../../images/humans/img-1.png',
        '../../images/humans/img-2.png',
        '../../images/humans/img-3.png'
      ],
      activeImg: ''
    }
  },
  created () {
    EventBus.$on('change-lang', this.changeLang)
    EventBus.$on('change-slide', this.changeImg)
  },
  methods: {
    changeLang (value) {
      this.getLang(value)
    },
    getLang (lang) {
      let content = {}
      lang === 'ua' ? content = data.ua.hero : content = data.ru.hero
      this.content = content
    },
    changeImg (value) {
      const img = value + 1
      console.log(img)
      this.activeImg = `../../images/humans/img-${img}.png`
    }
  }
}
</script>

<style lang="postcss">
.v-hero-content {
  display: flex;
  justify-content: space-between;
}
.v-hero-info {
  width: 50%;
  padding: 115px 0 0 70px;
  & .v-button {
    margin-bottom: 115px;
  }
}
.v-hero-img {
  position: relative;
  width: 50%;
  min-height: 640px;
  & img {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.v-hero-review {
  display: flex;
  align-items: center;
  & p {
    color: var(--c-accent);
    padding-right: 10px;
  }
  & svg {
    width: 46px;
    height: 46px;
  }
}
.v-hero-title {
  padding-top: 20px;
}
</style>