import {
  INIT_STATE,
} from './mutation-types';

import {
  setStore,
} from '../util/util';

export default {
  [INIT_STATE](state) {
    let initBookList = getStore('SHEFLBOOK');
  },
}
