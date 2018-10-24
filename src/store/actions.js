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

export const getBook = ({commit}, parmas) => {
  return Api.getBook(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

export const getReview = ({commit}, parmas) => {
  return Api.getReview(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

export const getChapters = ({commit}, parmas) => {
  return Api.getChapters(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

export const getChapterContent = ({commit}, parmas) => {
  return Api.getChapterContent(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

export const getCategory = ({commit}, parmas) => {
  return Api.getCategory(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

export const getCatBooks = ({commit}, parmas) => {
  return Api.getCatBooks(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

export const getMinorList = ({commit}, parmas) => {
  return Api.getMinorList(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

export const getShelfBookUpdate = ({commit}, parmas) => {
  return Api.getShelfBookUpdate(parmas).then(res => {
    // commit(types.FEATURED_TYPE, res.data)
    return res;
  })
}

