<template>
  <div class="v-partners">
    <div class="wrapper">
      <h2>{{ partners.title }}</h2>
      <h2>{{ partners.subtitle }}</h2>
      <div class="v-partners-logos">
        <div class="v-patners-logo" v-for="(logo, index) in partners.logos" :key="index">
          <div class="v-patners-logo-wrapper">
            <img :src="logo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus'
import { data } from '@/components/Api/Api'
export default {
  data () {
    return {
      partners: {}
    }
  },
  created () {
    EventBus.$on('change-lang', this.changeLang)
  },
  methods: {
    changeLang (value) {
      this.getLang(value)
    },
    getLang (lang) {
      let partners = {}
      lang === 'ua' ? partners = data.ua.partners : partners = data.ru.partners
      this.partners = partners
    }
  }
}
</script>

<style lang="postcss">
.v-partners {
  background: var(--bg-dark);
  & h2 {
    text-align: center;
    &:first-of-type {
      padding-top: 20px;
      margin-bottom: 0;
      @media (--min-desktop) {
        padding-top: 120px;
      }
    }
    &:last-of-type {
      margin-bottom: 50px;
      color: #999;
      @media (--min-desktop) {
        margin-bottom: 100px;
      }
    }
    @media (--min-desktop) {
      text-align: left;
    }
  }
  & .wrapper {
    padding: 0 70px 40px 70px;
  }
}
.v-partners-logos {
  display: flex;
  flex-wrap: wrap;
}
.v-patners-logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media (--min-phone) {
    width: 50%;
  }
  @media (--min-desktop) {
    width: 25%;
    margin-bottom: 80px;
    &:nth-child(1) {
      justify-content: flex-start;
    }
    &:nth-child(5) {
      justify-content: flex-start;
    }
    &:nth-child(4) {
      justify-content: flex-end;
    }
    &:nth-child(8) {
      justify-content: flex-end;
    }
  }
}
.v-patners-logo-wrapper {
  max-width: 180px;
  max-height: 90px;
  & img {
    object-fit: contain;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray; /* IE 6-9 */
  }
}
</style>