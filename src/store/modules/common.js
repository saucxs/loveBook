import { HEADER_TITLE } from "../mutation-types";

const state = {
  systemName: 'loveBook',
  headerTitle: '',
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
