<template>
  <div class="v-select">
    <multiselect
      :options="options"
      v-model="value"
      :placeholder="options[0]"
      select-label=""
      :searchable="false"
      :show-labels="false"
      :allow-empty="false"
      @input="changeLang"
    >
    </multiselect>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus'
export default {
  data () {
    return {
      options: [
        'ua',
        'ru'
      ],
      value: null
    }
  },
  created () {
    this.value = this.options[0]
  },
  mounted () {
    this.changeLang()
  },
  methods: {
    changeLang () {
      EventBus.$emit('change-lang', this.value)
    }
  }
}
</script>