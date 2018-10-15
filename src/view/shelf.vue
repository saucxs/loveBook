<template>
  <section class="shelf">
    <header-bar></header-bar>
    <tabbar></tabbar>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import headerBar from '@/components/Header';
  import tabbar from '@/components/Tabbar';
export default {
  name: 'shelf',
  components: {
    tabbar,
    headerBar,
  },
  data () {
    return {
      isShowPageLoading: true,
      bookList: []
    }
  },
  created() {

  },
}
</script>

<style scoped lang="scss">
  .shelf {
    margin: 50px 0 70px;
  }
</style>
