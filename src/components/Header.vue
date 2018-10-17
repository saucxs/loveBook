<template>
  <header class="header">
    <h2 class="header-logo">{{systemName}}</h2>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'header',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      "systemName"
    ])
  },
}
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    overflow: hidden;
    color: #fff;
    background-color: #5579ee;
    box-sizing: border-box;
    z-index: 99;

    h2.header-logo {
      position: absolute;
      top: 12px;
      left: 15px;
      color: #fff;
      line-height: 20px;
    }
  }
</style>
