<template>
  <div class="c-fullscreen" @click="click">
    <i :class="isFullscreen ? 'el-icon-c-fullscreen-exit' : 'el-icon-full-screen'"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'Screenfull',
  data () {
    return {
      isFullscreen: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    click () {
      if (!screenfull.isEnabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
      screenfull.on('change', () => {
        if (screenfull.isFullscreen) {
          this.isFullscreen = true
        } else {
          this.isFullscreen = false
        }
      })
    },
    init () {
      if (screenfull.enabled) {
        screenfull.on('change', () => {
          this.isFullscreen = screenfull.isFullscreen
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.c-fullscreen
  width 40px
  height 40px
  line-height 40px
  font-size 30px
  margin-top 12px
  color #fff
  opacity .5
  float right
  cursor pointer
  text-align right
</style>
