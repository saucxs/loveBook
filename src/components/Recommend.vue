<template>
  <section class="recommend">
    <template v-if="recommendList.length > 0">
      <h4>同类推荐
        <router-link :to="{ name: 'list', params: { id: curBook.id } }" class="more red">更多</router-link>
      </h4>
      <ul class="recommend-list">
        <div v-for="(recommend, index) in recommendList" v-if="index < 4" :key="recommend._id">
          <!--<router-link :to="{ name: 'book', params: {id: recommend._id} }">-->
            <li class="recommend-item" @click="bookInfo(recommend._id)">
                <img :src="recommend.cover | setCover" alt="recommend.title" class="cover">
                <p>{{ recommend.title }}</p>
            </li>
          <!--</router-link>-->
        </div>
      </ul>
    </template>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { staticPath } from '../../util/util';

  export default {
    name: 'recommend',
    data() {
      return {
        recommendList: []
      }
    },
    filters: {
      setCover(cover) {
        return staticPath + cover;
      }
    },
    computed: {
      ...mapGetters([
        'curBook'
      ])
    },
    created() {
      this.getRecommend(this.curBook.id)
        .then(data => {
          this.recommendList = data;
        })
    },
    methods: {
      ...mapActions([
        "getRecommend",
        "getReview"
      ]),
      bookInfo(bookId){
        this.$router.push({ name: 'book', params: { id: bookId }});
        this.getReview(bookId)
          .then(data => {
            this.$store.commit('REVIEW_LIST', data);
          })
      }
    }
  }
</script>

<style lang="scss">
  .recommend {
    position: relative;
    overflow: hidden;

  h4 {
    font-weight: 400;
    font-size: 16px;
    color: #33373d;
    line-height: 1;
    border-left: 4px solid #5579ee;
    padding-left: 13px;
    margin: 10px 0;

  a {
    position: absolute;
    top: 12px;
    right: 15px;
    font-size: 13px;

  &::after {
     content: '>';
     display: inline-block;
     margin-left: 3px;
   }
  }
  }
  .recommend-list {
    position: relative;
    display: flex;

  .recommend-item {
    flex: 1;
    padding: 0 15px;
  }
  .cover {
    width: 60px;
    height: 80px;
  }
  }
  }
</style>
