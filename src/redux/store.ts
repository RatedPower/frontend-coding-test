import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
});

if ((module as any).hot) {
  (module as any).hot.accept('./root-reducer', () => {
    const newRootReducer = require('./root-reducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
