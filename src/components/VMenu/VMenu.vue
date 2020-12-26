<template>
  <div class="v-menu">
    <div class="v-menu-link __uppercase" v-if="isDesktope">
      <a :href="link.link"
         v-for="link in menu"
         :key="link.id"
      >
        {{ link.title }}
      </a>
    </div>
    <div v-else>
      <div class="v-menu-toggle __open">
        <span></span>
      </div>
      <div class="v-menu-mobile">
        <a :href="link.link"
           v-for="link in menu"
           :key="link.id"
        >
          {{ link.title }}
        </a>
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
      menu: []
    }
  },
  computed: {
    isDesktope () {
      return this.$root.screenWidth > 1300
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
  color: var(--c-black);
  & a {
    margin-right: 75px;
    color: inherit;
    &:last-child {
      margin-right: 0;
    }
  }
}
.v-menu-toggle {
  width: 20px;
  height: 20px;
  cursor: pointer;
  /* z-index > mobile menu */
  z-index: 2;
  & span {
    display: block;
    width: 100%;
    height: 2px;
    position: relative;
    background: var(--c-black);
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--c-black);
    }
    &:before {
      top: -5px;
    }
    &:after {
      bottom: -5px;
    }
  }
  &.__open {
    & span {
      background: transparent;
      &:before {
        transform: rotate(45deg);
        top: 0;
      }
      &:after {
        transform: rotate(-45deg);
        bottom: 0;
      }
    }
  }
}
.v-menu-mobile {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--c-accent);
  /* z-index > multiselect */
  z-index: 1;
  overflow: hidden;
  & a {
    font-size: 5rem;
    line-height: 15rem;
    color: var(--c-black);
  }
}
</style>