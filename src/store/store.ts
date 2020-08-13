import Vuex from 'vuex'
import Vue from 'vue'
import { UserModuleClass, registerUserModule } from './UserModule'
import { PhotoModuleClass, registerPhotoModule } from './PhotoModule'

Vue.use(Vuex)

export interface RootState {
  UserModuleStore?: UserModuleClass,
  PhotoModuleStore?: PhotoModuleClass,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function createStore() {
  const store = new Vuex.Store<RootState>({})
  // とりあえず必要なmoduleはここでregisterする
  registerUserModule(store)
  registerPhotoModule(store)
  return store
}