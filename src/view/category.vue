<template>
  <section class="category">
    <header-bar></header-bar>
    <div class="cat-section">
      <cat v-for="category in categories" :category="category" v-if="category !== null" :key="category.title"></cat>
    </div>
    <tabbar></tabbar>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import headerBar from '@/components/Header';
  import cat from '@/components/Cat';
  import tabbar from '@/components/Tabbar';
  import { CATEGORY_PAGE } from '../../util/util';
export default {
  name: 'category',
  components: {
    tabbar,
    headerBar,
    cat
  },
  data () {
    return {
      headerTitle: '分类',
      categories: []
    }
  },
  created() {
    this.$store.commit('HEADER_TITLE', this.headerTitle);
    this.fetchData();
  },
  methods: {
    ...mapActions([
      "getCategory"
    ]),
    fetchData: function() {
      this.getCategory()
        .then(data => {
          for (let [key, value] of Object.entries(data)) {
            let obj = null;
            switch (key) {
              case 'male':
                obj = {
                  title: '男生',
                  gender: 'male',
                  catList: value
                };
                break;
              case 'female':
                obj = {
                  title: '女生',
                  gender: 'female',
                  catList: value
                };
                break;
              case 'press':
                obj = {
                  title: '出版',
                  gender: 'press',
                  catList: value
                };
                break;
              default:
                break;
            }
            if (obj !== null) {
              this.categories.push(obj);
            }
          }
          this.$nextTick(function () {
            this.isShowPageLoading = false;
          })
        })
    }
  }
}
</script>

<style scoped lang="scss">
  .category {
    margin: 50px 0 70px;
  }
</style>
