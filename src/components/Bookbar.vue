<template>
  <section class="book-bar">
    <div class="book-bar-item" v-show="!isAdded" @click="addToShelf">
      <div class="book-bar-icon">
        <i class="el-icon-circle-check"></i>
      </div>
      <p class="book-bar-content">加入书架</p>
    </div>
    <div class="book-bar-item" v-show="isAdded">
      <div class="book-bar-icon">
        <i class="el-icon-circle-check"></i>
      </div>
      <p class="book-bar-content">已加入书架</p>
    </div>
    <div class="book-bar-item read">
      <router-link :to="{ name: 'read', params: { id: curBook.id }}">
        <p class="book-bar-content">立即阅读</p>
      </router-link>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'bookbar',
    data() {
      return {
        isAdded: false
      }
    },
    computed: {
      ...mapGetters([
        'curBook',
        'shelfBookList'
      ])
    },
    created() {
      this.isAdded = this.curBook.isInShelf;
    },
    methods: {
      ...mapActions([
        "getBook"
      ]),
      addToShelf: function() {
        let book = this.curBook;
        book.isInShelf = true;
        this.$store.commit('SET_CUR_BOOK', book);
        this.$store.commit('ADD_TO_SHELF', book);
        // this.ADD_TO_SHELF(book);
        this.isAdded = true;
      }
    }
  }
</script>

<style lang="scss">
  .book-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    height: 50px;
    background-color: #fff;

  .book-bar-item {
    display: block;
    flex: 1;
    /*padding: 10px 0;*/
    font-size: 12px;
    color: #999;
    border-top: 1px solid rgba(0, 0, 0, .1);

  &.read {
     font-size: 16px;
     color: #fff;
     background: #5579ee;
     line-height: 50px;
     border-top-color: #5579ee;
   }
  }

  .book-bar-icon {
    width: 24px;
    height: 24px;
    margin: 6px auto 0px;
    font-size: 20px;

  .icon {
    width: 24px;
    height: 24px;
  }
  }
  .book-bar-content {
    text-align: center;
  }
  }
</style>
