<template>
  <header class="v-header" v-sticky>
    <div class="container" v-if="isDesktope">
      <a href="#" class="logo">
        <img src="../../images/logo.svg" alt="logo">
      </a>
      <div class="wrapper">
        <v-menu></v-menu>
        <div class="header-links __uppercase">
          <a href="mailto:hello@cursor.education">hello@cursor.education</a>
          <a href="tel:+38 (063) 049 3115">+38 (063) 049 3115</a>
        </div>
      </div>
      <v-select></v-select>
    </div>
    <div class="container v-header-mobile" v-else>
      <a href="#" class="logo">
        <img src="../../images/logo.svg" alt="logo">
      </a>
      <v-select></v-select>
      <div class="v-menu-toggle" :class="{ __active: toggle }" @click="openMenu">
        <span></span>
      </div>
      <div class="wrapper" :class="{ __open: toggle }">
        <v-menu></v-menu>
        <div class="header-links __uppercase">
          <a href="mailto:hello@cursor.education">hello@cursor.education</a>
          <a href="tel:+38 (063) 049 3115">+38 (063) 049 3115</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import VMenu from '../VMenu/VMenu.vue'
import VSelect from '../VUI/VSelect.vue'
export default {
  components: {
    VSelect,
    VMenu
  },
  data () {
    return {
      toggle: false,
      menu: false
    }
  },
  computed: {
    isDesktope () {
      return this.$root.screenWidth > 1200
    }
  },
  methods: {
    openMenu () {
      this.toggle = !this.toggle
      this.menu = !this.menu
    }
  }
}
</script>

<style lang="postcss">
.v-header {
  display: flex;
  height: auto;
  align-items: center;
  border-bottom: 1px solid var(--decor-line);
  & .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    @media (--min-desktop) {
      flex-wrap: nowrap;
      justify-content: none;
    }
  }
  & .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    margin: 0;
    @media (--min-desktop) {
      flex-wrap: nowrap;
      border-right: 1px solid var(--decor-line);
      border-left: 1px solid var(--decor-line);
    }
  }
  @media (--min-desktop) {
    height: 100px;
  }
}
.logo,
.v-select {
  flex: 7%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  /* z-index > mobile menu */
  z-index: 2;
}
.header-links {
  flex-basis: 1;
  & a {
    color: var(--c-accent);
    transition: color .5s;
    &:hover {
      color: rgba(255, 92, 0, .7);
    }
    &:first-child {
      padding-right: 40px;
    }
  }
}

/* STICKY MENU */
.is-affixed .inner-wrapper-sticky {
  display: flex;
  width: 100% !important;
  height: auto;
  align-items: center;
  border-bottom: 1px solid var(--decor-line);
  background: var(--c-white);
  /* z-index > all */
  z-index: 11;

  & .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;

    @media (--min-desktop) {
      flex-wrap: nowrap;
    }
  }

  & .wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    margin: 0;

    @media (--min-desktop) {
      flex-wrap: nowrap;
      border-right: 1px solid var(--decor-line);
      border-left: 1px solid var(--decor-line);
    }
  }
  @media (--min-desktop) {
    height: 100px;
  }
}

.is-affixed .inner-wrapper-sticky .v-header-mobile .wrapper {
  position: absolute;
  height: auto;
  top: -500px;
  background: var(--c-white);
  transition: top .5s;
  &.__open {
    top: 40px;
  }
}

.inner-wrapper-sticky {
  width: 100%;
  height: 100%;
}

.v-header-mobile {
  position: relative;
  & .wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: auto;
    top: -500px;
    background: var(--c-white);
    transition: top .5s;
    &.__open {
      top: 40px;
    }
  }
  & .logo,
  & .v-select,
  & .v-menu-toggle {
    flex: 30%;
    max-width: none;
  }
  & .header-links {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border-top: 1px solid var(--decor-line);
    & a {
      padding: 20px 0;
      text-align: center;
    }
  }
}
.v-menu-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 20px;
  /* z-index > mobile menu */
  z-index: 2;
  & span {
    display: block;
    margin: 1em;
    width: 25px;
    &:before,
    &:after {
      background-color: var(--c-gray);
      content: '';
      display: block;
      height: 1px;
      transition: all 200ms ease-in-out;
    }
    &:before {
      box-shadow: 0 8px 0 var(--c-gray);
      margin-bottom: 15px;
    }
  }
  &.__active {
    & span {
      background: transparent;
      &:before {
        box-shadow: 0 0 0 var(--c-gray);
        margin-bottom: 19px;
        transform: translateY(10px) rotate(45deg);
      }
      &:after {
        transform: translateY(-10px) rotate(-45deg);
      }
    }
  }
}
</style>