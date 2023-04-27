<template>
  <div :style="{height:height,width:width}">
    <bar-line
      :id="id"
      :type="type"
      v-if="type === 'bar' || type === 'line' || type === 'bar-line'"
      :option="option"
      :theme="theme"
      :width="width"
      :height="height"
    ></bar-line>
    
  </div>
</template>

<script>
import barLine from './bar-line'

export default {
  components: {
    barLine,
  },
  props: {
    type: {
      type: String,
      default: 'bar'
    },
    option: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    },
    theme: {
      type: String,
      default: 'white'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
