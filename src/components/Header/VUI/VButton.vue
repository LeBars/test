<template>
  <div class="v-button">
    <a :href="link">Кнока</a>
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

</style>