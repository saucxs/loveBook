import {
  FEATURED_TYPE, SET_HEADER_INFO
} from "../mutation-types.js";

const state = {
  feature_data: '',
  headerTitle: '',
  headerType: ''
}

const mutations = {
  [FEATURED_TYPE](state, newData){
    state.feature_data = newData;
  },
  [SET_HEADER_INFO](state, { title, type }) {
    state.headerTitle = title;
    state.headerType = type;
  },
}

export default {
  state,
  mutations
}
