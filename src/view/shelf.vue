<template>
  <section class="shelf">
    <header-bar></header-bar>
    <empty></empty>
    <tabbar></tabbar>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import headerBar from '@/components/Header';
  import tabbar from '@/components/Tabbar';
  import empty from '@/components/Empty';
export default {
  name: 'shelf',
  components: {
    tabbar,
    headerBar,
    empty
  },
  data () {
    return {

    }
  },
  created() {
    this.$store.commit('HEADER_TITLE', '书架');
  },
}
</script>

<style scoped lang="scss">
  .shelf {
    margin: 50px 0 70px;
  }
</style>
