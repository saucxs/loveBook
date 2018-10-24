<template>
  <section class="shelf">
    <header-bar></header-bar>
    <shelf-list v-if="shelfBookList.length > 0"></shelf-list>
    <empty v-else></empty>
    <tabbar></tabbar>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import headerBar from '@/components/Header';
  import tabbar from '@/components/Tabbar';
  import shelfList from '@/components/shelfList';
  import empty from '@/components/Empty';
export default {
  name: 'shelf',
  components: {
    tabbar,
    headerBar,
    shelfList,
    empty
  },
  computed: {
    ...mapGetters([
      'shelfBookList'
    ])
  },
  data () {
    return {
      bookList: []
    }
  },
  created() {
    this.$store.commit('HEADER_TITLE', '我的书架');
  },
}
</script>

<style scoped lang="scss">
  .shelf {
    margin: 50px 0 70px;
  }
</style>
