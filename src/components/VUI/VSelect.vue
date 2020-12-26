<template>
  <div class="v-select">
    <multiselect
      :options="options"
      v-model="value"
      :placeholder="options[0]"
      select-label=""
      :searchable="false"
      :show-labels="false"
    >
    </multiselect>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        'ua',
        'ru'
      ],
      value: null
    }
  }
}
</script>