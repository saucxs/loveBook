<template>
  <header class="header">
    <h2 class="header-logo">loveBook</h2>
    <nav class="nav-group">
      <h3 :class="['nav-item', { active: sexType == 'male'}]" @click="changSex('male')">
        男生
      </h3>
      <h3 :class="['nav-item', { active: sexType == 'female'}]" @click="changSex('male')">
        女生
      </h3>
    </nav>
    <div class="header-search">
      <!--<router-link :to="">-->
        <!--<svg class="icon" aria-hidden="true">-->
          <!--<use xlink:href="#icon-search"></use>-->
        <!--</svg>-->
      <!--</router-link>-->
    </div>
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
.tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, .1);
  box-sizing: border-box;
  .tab-item{
    display: block;
    flex: 1;
    padding: 10px 0;
  }
  .tab-item-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 4px;
    .icon {
      width: 24px;
      height: 24px;
    }
  }
  .tab-item-label {
    text-align: center;
    font-size: 12px;
  }
}
</style>
