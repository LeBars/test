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
      <v-hero-slider></v-hero-slider>
    </div>
  </div>
</template>

<script>
import VHeroContent from '../VHeroContent/VHeroContent'
import VHeroSlider from '../VHeroSlider/VHeroSlider'
export default {
  components: {
    VHeroContent,
    VHeroSlider
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
  }
}
</script>

<style lang="postcss">
.v-hero {
  border-bottom: 1px solid var(--decor-line);
  & .container {
    display: flex;
    /* align-items: center; */
    height: 100%;
  }
  & .wrapper {
    height: 100%;
    margin: 0;
    border-right: 1px solid var(--decor-line);
    border-left: 1px solid var(--decor-line);
  }
}
.v-hero-social,
.v-hero-slider {
  flex: 7%;
  max-width: 100px;
  display: flex;
  justify-content: center;
}
.v-hero-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.v-hero-social-link {
  transition: opacity .3s;
  &:hover {
    opacity: .5;
  }
  &:not(:last-child) {
    margin-bottom: 50px;
  }
}
</style>