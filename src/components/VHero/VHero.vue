<template>
  <div class="v-hero">
    <div class="container">
      <div class="v-hero-social">
        <a :href="soc.link" class="v-hero-social-link" v-for="(soc, index) in social" :key="index">
          <img :src="`../../images/social/${soc.icon}`" alt="">
        </a>
      </div>
      <div class="wrapper">
        <v-hero-content></v-hero-content>
      </div>
      <v-hero-slider v-if="isDesktope"></v-hero-slider>
      <v-hero-slider-mobile v-else></v-hero-slider-mobile>
    </div>
  </div>
</template>

<script>
import VHeroContent from '../VHeroContent/VHeroContent'
import VHeroSlider from '../VHeroSlider/VHeroSlider'
import VHeroSliderMobile from '../VHeroSlider/VHeroSliderMobile'
export default {
  components: {
    VHeroContent,
    VHeroSlider,
    VHeroSliderMobile
  },
  data () {
    return {
      social: {
        facebook: {
          link: '#',
          icon: 'facebook.svg'
        },
        insta: {
          link: '#',
          icon: 'instagram.svg'
        },
        youtube: {
          link: '#',
          icon: 'youtube.svg'
        }
      }
    }
  },
  computed: {
    isDesktope () {
      return this.$root.screenWidth > 1300
    }
  }
}
</script>

<style lang="postcss">
.v-hero {
  border-bottom: 1px solid var(--decor-line);
  & .container {
    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    height: 100%;
    @media (--min-desktop) {
      flex-wrap: nowrap;
    }
  }
  & .wrapper {
    height: 100%;
    margin: 0;
    @media (--min-desktop) {
      border-right: 1px solid var(--decor-line);
      border-left: 1px solid var(--decor-line);
    }
  }
}
.v-hero-social,
.v-hero-slider {
  flex: 100%;
  display: flex;
  justify-content: center;
  max-width: 100%;
  @media (--min-desktop) {
    flex: 7%;
    max-width: 100px;
    align-items: center;
  }
}
.v-hero-social {
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (--min-desktop) {
    padding-top: 0;
    flex-direction: column;
    justify-content: center;
  }
}
.v-hero-social-link {
  transition: opacity .3s;
  &:hover {
    opacity: .5;
  }
  @media (--min-desktop) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
}
</style>