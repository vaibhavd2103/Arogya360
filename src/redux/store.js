import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default createStore(reducer, applyMiddleware(thunk));

// import {applyMiddleware, createStore} from 'redux';
// import {persistStore, persistReducer} from 'redux-persist';
// import reducer from '../Redux/reducer';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };
// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = createStore(persistedReducer, applyMiddleware(thunk));
// export const persistor = persistStore(store);
