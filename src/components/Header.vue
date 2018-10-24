<template>
  <header class="header">
    <h2 class="header-logo">{{systemName}}--{{headerTitle}}</h2>
    <div class="header-search">
      <router-link :to="{ name: 'search' }">
        <i class="el-icon-search"></i>
      </router-link>
    </div>
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
      "systemName",
      "headerTitle"
    ])
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
    .header-search {
      position: absolute;
      display: inline-block;
      top: 12px;
      right: 15px;
      font-size: 22px;
        .icon {
          width: 20px;
          height: 20px
        }
    }
  }
</style>
