import Vuex from 'vuex'
import Vue from 'vue'
import { StoreModuleClass, registerStoreModule } from './StoreModule'

Vue.use(Vuex)

export interface RootState {
  Store?: StoreModuleClass
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function createStore() {
  const store = new Vuex.Store<RootState>({})
  // とりあえず必要なmoduleはここでregisterする
  registerStoreModule(store)
  return store
}