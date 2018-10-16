<template>
  <section class="featured">
    <header-bar></header-bar>
    <a>featured</a>
    <tabbar></tabbar>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import headerBar from '@/components/Header';
  import tabbar from '@/components/Tabbar';
export default {
  name: 'featured',
  components: {
    tabbar,
    headerBar,
  },
  data () {
    return {

    }
  },
  created() {

  },
}
</script>

<style scoped lang="scss">
  .featured {
    margin: 50px 0 70px;
  }
</style>
