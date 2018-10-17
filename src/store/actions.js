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

export const getRecommend = ({commit}, parmas) => {
  return Api.getRecommend(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

export const getBookList = ({commit}, parmas) => {
  return Api.getBookList(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}
