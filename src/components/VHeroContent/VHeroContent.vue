<template>
  <div class="v-hero-content">
    <div class="v-hero-info">
      <a href="#" class="v-hero-review">
        <p class="__uppercase">Дивитись відгук</p>
        <svg>
          <use xlink:href="../../images/sprite.svg#play"></use>
        </svg>
      </a>
      <h1 class="v-hero-title">CURSOR</h1>
      <h4 class="v-hero-subtitle">Школа програмування<br> Ефективна та неформальна IT освiта</h4>
      <v-button link="#" value="Вивчити програмування"></v-button>
    </div>
    <div class="v-hero-img">
      <img src="../../images/humans/img-1.png" alt="">
    </div>
  </div>
</template>

<script>
import VButton from '../VUI/VButton'
export default {
  components: {
    VButton
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