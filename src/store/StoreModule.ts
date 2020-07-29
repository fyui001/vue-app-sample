import { Mutation, Action, VuexModule, getModule, Module } from 'vuex-module-decorators'
import { Store } from 'vuex'
import RootState from './store'

@Module({name: 'Store', namespaced: true, stateFactory: true})
export class StoreModuleClass extends VuexModule {

  storeState = ''

  @Mutation
  public storeMutation() {
    this.state = 'state'
  }

  @Action
  public async storeAction() {
  }

}

const StoreVuexModule = (store?: Store<RootState>) => getModule(StoreModuleClass, store)
export default StoreVuexModule

export function registerStoreModule(store: Store<RootState>) {
  if (!store.state.Store) {
    store.registerModule('Store', StoreModuleClass)
  }
}