<template>
  <section class="rank">
    <header-bar></header-bar>
    <a>rank</a>
    <tabbar></tabbar>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import headerBar from '@/components/Header';
  import tabbar from '@/components/Tabbar';
export default {
  name: 'rank',
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
  .rank {
    margin: 50px 0 70px;
  }
</style>
