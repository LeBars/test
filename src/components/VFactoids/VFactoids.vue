<template>
  <div class="v-factoids">
    <div class="wrapper">
      <div class="v-factoids-item" v-for="factoid in factoids" :key="factoid.id">
        <div class="v-factoids-icon">
          <img :src="factoid.icon">
        </div>
        <div class="v-factoids-info">
          <h3>{{ factoid.title }}</h3>
          <p class="__uppercase">{{ factoid.descr }}</p>
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
      factoids: []
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
      let factoids = []
      lang === 'ua' ? factoids = data.ua.factoids : factoids = data.ru.factoids
      this.factoids = factoids
    }
  }
}
</script>

<style lang="postcss">
.v-factoids {
  padding: 30px 0;
  & .wrapper {
    min-height: 180px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    @media (--min-desktop) {
      flex-wrap: nowrap;
    }
  }
  @media (--min-desktop) {
    padding: 0;
  }
}
.v-factoids-item {
  display: flex;
  max-height: 50px;
  padding-left: 5%;
  &:not(:last-child) {
    margin-bottom: 25px;
    @media (--min-desktop) {
      border-right: 1px solid var(--decor-line);
      padding-right: 5%;
      margin-bottom: 0;
    }
  }
}
.v-factoids-icon {
  width: 20%;
  & img {
    width: 100%;
  }
}
.v-factoids-info {
  width: 80%;
  margin-top: -10px;
  padding-left: 30px;
  min-width: 250px;
}
</style>