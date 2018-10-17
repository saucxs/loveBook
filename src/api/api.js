import async from './config';

const apiUrl = '/api';
const chapterUrl = '/chapterapi';

export default  {
  getFeaturedData() {
    return async ( apiUrl + '/recommendPage/nodes/5910018c8094b1e228e5868f')
      .then(res => res.data);
  },

  getBooks(id) {
    return async(apiUrl + '/recommendPage/books/' + id)
      .then(data => data.data);
  },

  getRecommend(id) {
    return async(apiUrl + '/book/' + id + '/recommend')
      .then(data => data.books);
  },

  getBookList(id, st = 1, size = 10) {
    return async(apiUrl + '/recommendPage/node/books/all/' + id, {
      ajax: 'ajax',
      st: st,
      size: size
    }, 'post');
  },
}
