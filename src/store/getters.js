import loveBook from "./modules/lovebook";

export const systemName = state => state.common.systemName
export const headerTitle = state => state.common.headerTitle

export const curBook = state => state.loveBook.curBook
export const headerType = state => state.loveBook.headerType
export const shelfBookList = state => state.loveBook.shelfBookList
export const nightMode = state => state.loveBook.nightMode
export const skinColor = state => state.loveBook.skinColor
export const fontSize = state => state.loveBook.fontSize
export const searchHistory = state => state.loveBook.searchHistory
