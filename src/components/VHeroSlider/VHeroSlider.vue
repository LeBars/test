<template>
  <div class="v-hero-slider">
    <div class="swiper-button-prev v-hero-swiper-button-prev" slot="button-prev"></div>
    <swiper class="swiper v-hero-swiper" ref="slider" :options="heroSwiperOption" @slideChange="slideChange">
      <swiper-slide class="v-hero-slide" v-for="(ava, index) in avatars" :key="index">
        <div class="v-hero-slide-inner">
          <img :src="ava" alt="">
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next v-hero-swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus'
export default {
  data () {
    return {
      heroSwiperOption: {
        direction: 'vertical',
        loop: 'true',
        slidesPerView: 3,
        navigation: {
          nextEl: '.v-hero-swiper-button-next',
          prevEl: '.v-hero-swiper-button-prev'
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

<style lang="postcss">
.v-hero-swiper {
  max-height: 240px;
}
.v-hero-slide {
  position: relative;
  max-height: 90px;
}
.v-hero-slide-inner {
  width: 60px;
  height: 60px;
  border: 1.5px solid var(--c-gray-light);
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.v-hero-slider {
  position: relative;
  flex: 7%;
  align-items: center;
  & .v-hero-swiper-button-next,
  & .v-hero-swiper-button-prev {
    width: 15px;
    left: 50%;
    background-image: url(../../images/arrow-controls.svg);
    background-size: contain;
    outline: none;
  }
  & .v-hero-swiper-button-prev {
    top: 25%;
    transform: translateX(-50%) rotate(180deg);
  }
  & .v-hero-swiper-button-next {
    bottom: 25%;
    top: auto;
    transform: translateX(-50%);
  }
}
.swiper-slide-active:after {
  content: '';
  position: absolute;
  bottom: 20px;
  right: 8px;
  width: 12px;
  height: 12px;
  background: var(--c-accent);
  border: 2px solid var(--c-white);
  border-radius: 50%;
}
</style>