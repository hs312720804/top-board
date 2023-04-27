<template>
  <!-- <div> -->
    <!-- <div style="color: #fff;" @click="show = !show">切换</div> -->
    <page v-if="show" :menuId="menuId"></page>
    <page2 v-else :menuId="menuId"></page2>
  <!-- </div> -->
</template>

<script>
import page from './Page.vue'
import page2 from './Page2.vue'
export default {
  components: {
    page,
    page2
  },
  props: {
    menuId: [String, Number]
  },
  data () {
    return {
      show: true
    }
  }

}
</script>
