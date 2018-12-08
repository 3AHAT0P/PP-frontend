<template>
  <div :class="blockName">
    HELLO!
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private blockName: string = 'home-page';
}
</script>

<style scoped lang="stylus">
.home-page
  display grid
  grid-template-columns 1fr 300px 1fr
  grid-template-rows auto 1fr
  justify-items stretch
  align-items start
  overflow hidden

  max-height 100%
</style>

