import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from '../Reducers';
import rootSaga from '../Sagas/RootSaga';

// created saga middleware instance
const sagaMiddleware = createSagaMiddleware();

// redux persist config params
const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

// watches which actions is dispatched to store and executes accordingly
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
