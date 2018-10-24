import {
  FEATURED_TYPE, SET_HEADER_INFO, SET_CUR_BOOK, ADD_TO_SHELF, SET_NIGHT_MODE,
  SET_SKIN_COLOR, SET_FONT_SIZE, DEL_FROM_SHELF, INIT_STATE, SHELF_BOOK_UPDATE
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
  [INIT_STATE](state) {
    let initBookList = getStore('SHEFLBOOK');
    if (initBookList) {
      state.shelfBookList = JSON.parse(initBookList);
    }
    let initSearchHistory = getStore('SEARCHHISTORY');
    if (initSearchHistory) {
      state.searchHistory = JSON.parse(initSearchHistory);
    }
    state.nightMode = getStore('NIGHTMODE') === 'true' ? true : false;
    state.fontSize = Number.isInteger(getStore('FONTSIZE')) ? parseInt(getStore('FONTSIZE')) : 14;
    state.skinColor = getStore('SKINCOLOR');
  },
  [FEATURED_TYPE](state, newData){
    state.feature_data = newData;
  },
  [SET_HEADER_INFO](state, { title, type }) {
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
  },
  [SET_NIGHT_MODE](state, isNight) {
    state.nightMode = isNight;
    setStore('NIGHTMODE', state.nightMode);
  },
  [SET_SKIN_COLOR](state, skinColor) {
    state.skinColor = skinColor;
    setStore('SKINCOLOR', state.skinColor);
  },
  [SET_FONT_SIZE](state, fontSize) {
    state.fontSize = fontSize;
    setStore('FONTSIZE', state.fontSize);
  },
  [DEL_FROM_SHELF](state, bookIds) {
    state.shelfBookList = state.shelfBookList.filter(value => {
      return !bookIds.includes(value.id);
    });
    setStore('SHEFLBOOK', state.shelfBookList);
  },
  [SHELF_BOOK_UPDATE](state, data) {
    for (let value of Object.values(data)) {
      for (let [idx, book] of Object.entries(state.shelfBookList)) {
        if (book.id === value._id) {
          book.updated = value.updated;
          book.lastChapter = value.lastChapter;
          state.shelfBookList[idx] = book;
          break;
        }
      }
      setStore('SHEFLBOOK', state.shelfBookList);
    }
  },

}

export default {
  state,
  mutations
}
