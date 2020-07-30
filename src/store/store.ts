import Vuex from 'vuex'
import Vue from 'vue'
import { UserModuleClass, registerUserModule } from './UserModule'

Vue.use(Vuex)

export interface RootState {
  Store?: UserModuleClass
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function createStore() {
  const store = new Vuex.Store<RootState>({})
  // とりあえず必要なmoduleはここでregisterする
  registerUserModule(store)
  return store
}