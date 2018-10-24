<template>
<section class="search">
	<section class="search-header">
		<span class="search-back" @click="$router.go(-1)">
      <i class="el-icon-arrow-left"></i>
		</span>
		<div class="search-input-section">
			<input type="text" class="search-input" ref="searchInput" placeholder="请输入您要搜索的关键字" @keyup.enter="searchByKeywordSpe">
			<span class="search-icon" @click="searchByKeywordSpe">
        <i class="el-icon-search"></i>
			</span>
		</div>
	</section>
	<book-list :book-list="searchBooks" v-if="searchBooks.length > 0"></book-list>
	<template v-else>
		<section class="search-hot search-section">
			<h4>热门搜索</h4>
			<ul class="search-keyword-list">
				<li class="search-keyword" v-for="hot in hotKeywords">{{ hot.word }}</li>
			</ul>
		</section>
		<section class="search-history search-section">
			<h4>历史搜索<span class="clear-all" @click="clearAll">清空</span></h4>
			<ul class="search-keyword-list">
				<li class="search-keyword" v-for="history in searchHistory">{{ history }}</li>
			</ul>
		</section>
	</template>
</section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import bookList from '@/components/BookList';
  export default {
    name: 'search',
    components: {
      bookList
    },
    data() {
      return {
        hotKeywords: [],
        searchBooks: []
      }
    },
    computed: {
      ...mapGetters([
        'searchHistory'
      ])
    },
    created() {
      this.getSearchHotKeywords()
        .then(data => {
          this.hotKeywords = data.slice(0, 19);
        })
    },
    methods: {
      ...mapActions([
        'getSearchHotKeywords',
        'searchByKeyword'
      ]),
      searchByKeywordSpe: function () {
        let keyword = this.$refs.searchInput.value;
        this.$store.commit('SET_SEARCH_HISTORY', keyword);
        // this.SET_SEARCH_HISTORY(keyword);
        this.searchByKeyword(keyword)
          .then(data => {
            this.searchBooks = data;
          })
      },
      clearAll: function () {
        this.$store.commit('CLEAR_SEARCH_HISTORY', '');
        // this.CLEAR_SEARCH_HISTORY();
      }
    }
  }
</script>

<style lang="scss">
.search {
    position: relative;
    overflow: hidden;
    background-color: #fff;

    .search-header {
        position: relative;
        height: 40px;
        width: 100%;
        background-color: #5579ee;

        .search-back {
            position: absolute;
            top: 10px;
            left: 5px;
            width: 20px;
            height: 20px;
            font-size: 22px;
            color: #fff;
            .icon {
                font-size: 20px;
                color: #fff;
            }
        }
        .search-input-section {
            padding: 8px 15px 7px 35px;
            overflow: hidden;
        }
        .search-input {
            width: 100%;
            height: 25px;
            color: #ffffff;
            background-color: #5579ee;
            border: none;
            border-bottom: 1px solid #fff;
            outline: none;
        }

        ::-webkit-input-placeholder {
            color: #eee;
        }
        :-moz-placeholder {

            color: #eee;
        }
        ::-moz-placeholder {
            color: #eee;
        }
        :-ms-input-placeholder {
            color: #eee;
        }

        .search-icon {
            position: absolute;
            top: 10px;
            right: 15px;
            width: 20px;
            height: 20px;
            font-size: 22px;
            color:#fff;
            .icon {
                font-size: 20px;
                color: #fff;
            }
        }
    }

    .search-section {
        position: relative;
        padding: 10px 10px 20px;
        overflow: hidden;
        margin-bottom: 10px;
        background-color: #fff;

        h4 {
            line-height: 30px;
            border-bottom: 1px solid rgb(198, 199, 201);

            span.clear-all {
                float: right;
            }
        }

        .search-keyword-list {
            padding: 10px;

            .search-keyword {
                display: inline-block;
                font-size: 12px;
                margin: 5px;
                padding: 5px;
                color: rgb(140, 140, 140);
                border: 1px solid rgb(198, 199, 201);
                border-radius: 20px;
            }
        }
    }
}
</style>
