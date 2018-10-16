<template>
  <section class="category">
    <header-bar></header-bar>
    <a>category</a>
    <tabbar></tabbar>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import headerBar from '@/components/Header';
  import tabbar from '@/components/Tabbar';
export default {
  name: 'category',
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
  .category {
    margin: 50px 0 70px;
  }
</style>
