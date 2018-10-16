<template>
  <header class="header">
    <h2 class="header-logo">loveBook</h2>
  </header>
</template>

<script>
  import { mapState } from 'vuex';
export default {
  name: 'tababr',
  data () {
    return {

    }
  }
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
  .nav-group {
    margin: 10px auto;
    display: table;
    border: 1px solid #fff;
    border-radius: 4px;

  .nav-item {
    display: table-cell;
    font-weight: 400;
    line-height: 20px;
    padding: 0 10px;
    color: #fff;

  &.active {
     color: #666;
     background-color: #fff;
   }
  }
  }

  .header-search {
    position: absolute;
    display: inline-block;
    top: 12px;
    right: 15px;

  .icon {
    width: 20px;
    height: 20px;
  }
  }
  }
</style>
