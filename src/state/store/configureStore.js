import { createStore } from 'redux';

import LocalStorage from '../../modules/local-storage';
import rootReducer from '../reducers/rootReducer';

const configureStore = () => {
  const persistedState = LocalStorage.load();
  const store = createStore(rootReducer, persistedState);
  store.subscribe(() => {
    LocalStorage.save(store.getState());
  });
  return store;
};

export default configureStore;
