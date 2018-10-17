import {
  FEATURED_TYPE,
} from "../mutation-types.js";

const state = {
  feature_data: ''
}

const mutations = {
  [FEATURED_TYPE](state, newData){
    state.feature_data = newData;
  }
}

export default {
  state,
  mutations
}
