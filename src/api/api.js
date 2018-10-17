import async from './config';

const apiUrl = '/api';
const chapterUrl = '/chapterapi';

export default  {
  getFeaturedData() {
    return async ( apiUrl + '/recommendPage/nodes/5910018c8094b1e228e5868f').then(res => res.data);
  }
}
