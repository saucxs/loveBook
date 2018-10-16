export const SHELF_PAGE = 'SHELF';

// 图片根路径
export const staticPath = 'http://statics.zhuishushenqi.com';

// 存储localStorage
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(storePrefix + name, content);
}
