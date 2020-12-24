<template>
  <div class="v-button">
    <a class="v-button-link uppercase" :href="link">{{ value }}
      <svg>
        <use xlink:href="../../images/sprite.svg#arrow"></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style lang="postcss">
.v-button {
  max-width: 360px;
  display: flex;
  & svg {
    width: 18px;
    height: 9px;
    margin-left: 20px;
  }
}
.v-button-link {
  display: inline-flex;
  place-items: center;
  padding: 24px 44px;
  border-radius: 100px;
  background: var(--c-accent);
  color: var(--c-white);
}
</style>