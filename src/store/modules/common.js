import { HEADER_TITLE } from "../mutation-types";

const state = {
  systemName: 'loveBook',
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
  [HEADER_TITLE](state, newData){
    state.headerTitle = newData;
  }
}

export default {
  state,
  mutations
}
