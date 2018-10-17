import Api from "../api/api"
import * as types from "./mutation-types";

export const getFeaturedData = ({commit}, parmas) => {
  return Api.getFeaturedData(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

export const getBooks = ({commit}, parmas) => {
  return Api.getBooks(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}
