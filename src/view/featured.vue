<template>
  <section class="featured">
    <header-bar></header-bar>
    <div class="featured-book-list" ref="featuredBookList">
      <section class="book-list-section" v-for="module in modules" v-if="module.type === 0" :key="module._id">
        <div class="book-list-top">
          <h2 class="book-list-title">{{ module.title }}</h2>
          <div class="book-list-more fr">
            <router-link :to="{ name: 'list', params: {id : module._id} }" class="red">更多</router-link>
          </div>
        </div>
        <home-list :book-info="{ id: module._id }" @load-result="loadResult"></home-list>
      </section>
    </div>
    <tabbar></tabbar>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import headerBar from '@/components/Header';
  import tabbar from '@/components/Tabbar';
  import homeList from '@/components/HomeList';
export default {
  name: 'featured',
  components: {
    tabbar,
    headerBar,
    homeList
  },
  data () {
    return {
      sex: 'male',    // 默认为男生
      modules: [],
      loadModules: []
    }
  },
  watch: {
    // loadModules: function () {
    //   if(this.loadModules.length === 0) {
    //     this.isShowPageLoading = false;
    //   }
    // }
  },
  created() {
    this.$store.commit('HEADER_TITLE', '热门');
    this.fetchData();
  },
  methods: {
    ...mapActions([
      "getFeaturedData"
    ]),
    fetchData(){
      this.getFeaturedData().then(data => {
       console.log(data, 'data1');
       data = Array.from(data).sort((a,b) => {
         return a.order - b.order;
       });
       let sexOrder = this.sex == 'male' ? [2, 5, 7, 9] : [1, 4, 6, 8];
       data = data.filter((obj) => {
         return sexOrder.includes(obj.order) && obj.type == 0;
       });
       this.modules = data;
       this.loadModules = Array.from(data, value => value._id);
      })
    },
    loadResult: function (id) {
      this.loadModules.splice(this.loadModules.indexOf(id), 1);
    }
  }
}
</script>

<style scoped lang="scss">
  .featured {
  .featured-book-list {
    margin: 40px 0 60px;
  }

  .book-list-section {
    position: relative; //margin-bottom: 10px;
    border-bottom: 10px solid #f6f7f9;
    padding: 15px 0 0 15px;
    background: #fff;
  }

  .book-list-top {
    position: relative;
    margin-bottom: 5px;
    overflow: hidden;

  .book-list-title {
    font-weight: 400;
    display: inline-block;
    color: #33373d;
    line-height: 1;
    border-left: 4px solid #5579ee;
    padding-left: 8px;
  }
  .book-list-more {
    display: inline-block;

  a {
    position: absolute;
    top: 2px;
    right: 15px;
    font-size: 13px;

  &::after {
     content: '>';
     display: inline-block;
     margin-left: 3px;
   }
  }
  }
  }
  }
</style>
