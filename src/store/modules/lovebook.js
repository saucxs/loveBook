import {
  FEATURED_TYPE, SET_HEADER_INFO, SET_CUR_BOOK, ADD_TO_SHELF
} from "../mutation-types.js";

import {
  setStore,
  getStore,
  removeStore
} from '../../../util/util';

const state = {
  feature_data: '',
  headerTitle: '',

  curBook: null,		//当前查看的书籍对象
  headerType: '',		//头部类型：featured:精选、rank:排行榜
  shelfBookList: [],	//书架书籍对象数组
  nightMode: false,	//是否夜间模式
  skinColor: '',		//阅读页面背景色
  fontSize: 14,		//设置页面字体大小
  searchHistory: []	//搜索历史
}

const mutations = {
  [FEATURED_TYPE](state, newData){
    state.feature_data = newData;
  },
  [SET_HEADER_INFO](state, { title, type }) {
    console.log(title, type, '11111111111')
    state.headerTitle = title;
    state.headerType = type;
  },
  [SET_CUR_BOOK](state, book) {
    state.curBook = book;
    if (state.curBook.isInShelf) {
      for (let [idx, shelfBook] of Object.entries(state.shelfBookList)) {
        if (shelfBook.id === state.curBook.id) {
          state.shelfBookList.splice(idx, 1, state.curBook);
          setStore('SHEFLBOOK', state.shelfBookList);
          break;
        }
      }
    }
  },
  [ADD_TO_SHELF](state, book) {
    let isExist = false;
    for (let shelfBook of Object.values(state.shelfBookList)) {
      if (shelfBook.id === book.id) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      state.shelfBookList.push(book);
      setStore('SHEFLBOOK', state.shelfBookList);
    }
  }
}

export default {
  state,
  mutations
}
