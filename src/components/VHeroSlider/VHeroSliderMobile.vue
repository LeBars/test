<template>
  <div class="v-hero-slider">
    <div class="swiper-button-prev" slot="button-prev"></div>
    <swiper class="swiper v-hero-swiper" ref="slider" :options="heroSwiperOption" @slideChange="slideChange">
      <swiper-slide class="v-hero-slide" v-for="(ava, index) in avatars" :key="index">
        <div class="v-hero-slide-inner">
          <img :src="ava" alt="">
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus'
export default {
  data () {
    return {
      heroSwiperOption: {
        direction: 'horizontal',
        loop: 'true',
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      avatars: [
        '../../images/avatars/ava-1.png',
        '../../images/avatars/ava-2.png',
        '../../images/avatars/ava-3.png'
      ]
    }
  },
  computed: {
    realIndex () {
      return this.$refs.slider.swiper.realIndex
    }
  },
  mounted () {
    this.slideChange()
  },
  methods: {
    slideChange () {
      EventBus.$emit('change-slide', this.realIndex)
    }
  }
}
</script>

<style scoped lang="postcss">
.v-hero-social,
.v-hero-slider {
  max-width: 260px;
  margin: 30px auto;
}
.v-hero-slide-inner {
  margin: 0 auto;
}
.swiper-slide-active:after {
  bottom: 0px;
  right: 20px;
}
.v-hero-slider .v-hero-swiper-button-next,
.v-hero-slider .v-hero-swiper-button-prev {
  left: 0;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev,
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url(../../images/arrow-controls.svg);
  outline: none;
  right: -9px;
  transform: rotate(-90deg);
  width: 15px;
  background-size: contain;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: -9px;
  transform: rotate(90deg);
}
</style>