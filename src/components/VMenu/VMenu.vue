<template>
  <div class="v-menu">
    <div class="v-menu-link __uppercase">
      <a :href="link.link"
         v-for="link in menu"
         :key="link.id"
      >
        {{ link.title }}
      </a>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus'
import { data } from '@/components/Api/Api'
export default {
  data () {
    return {
      menu: []
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
      let menu = []
      lang === 'ua' ? menu = data.ua.menu : menu = data.ru.menu
      this.menu = menu
    }
  }
}
</script>

<style lang="postcss">
.v-menu-link {
  display: flex;
  flex-direction: column;
  color: var(--c-black);
  & a {
    text-align: center;
    margin-top: 20px;
    color: inherit;
    &:last-child {
      margin-right: 0;
    }
    @media (--min-desktop) {
      text-align-last: left;
      margin-top: 0;
      margin-right: 75px;
    }
  }
  @media (--min-desktop) {
    display: block;
  }
}
</style>