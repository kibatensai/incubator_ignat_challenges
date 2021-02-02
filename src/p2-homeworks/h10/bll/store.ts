import { combineReducers } from 'redux';
import { createStore } from 'redux';
import {loadingReducer} from "./loadingReducer";
import { Store } from 'redux'

const reducers = combineReducers({
    loading: loadingReducer,

});

const store: Store<AppStoreType> = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
