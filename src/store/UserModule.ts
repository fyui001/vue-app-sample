import { Mutation, Action, VuexModule, getModule, Module } from 'vuex-module-decorators'
import { Store } from 'vuex'
import RootState from './store'
import UserStateType from '../modules/User'
import ApiRequest, {SendCredential} from '../client/api'

@Module({name: 'Store', namespaced: true, stateFactory: true})
export class UserModuleClass extends VuexModule {

  user: UserStateType = {
    userId: '',
    name: '',
    accessToken: '',
  }

  @Mutation
  public SET_USER(param: UserStateType) {
    this.user = param
  }

  @Action
  public async loginAction(credential: SendCredential) {
    const result = await ApiRequest.postLoginRequest(credential)
    if (!result.data.length) {
      document.cookie = 'access_token=' + result.data.access_token + ';'
      this.SET_USER({
        userId: result.data.login_id,
        name: result.data.name,
        accessToken: result.data.access_token,
      })
    }
  }

  @Action
  public async isLogin() {
    console.log('Action isLogin')
    let accessToken = ''
    const cookies = document.cookie
    const cookiesArray = cookies.split(';')
    for (const c of cookiesArray) {
      const keyValue = c.split('=')
      if ( keyValue[0] === 'access_token') {
        accessToken = keyValue[1]
      }
    }
    const result = await ApiRequest.bearerAuthentication(accessToken)
    if (!result.data.length) {
      const param = {
        userId: result.data.user_id,
        name: result.data.name,
        accessToken: accessToken
      }
      this.SET_USER(param)
    }
  }

}

const UserVuexModule = (store?: Store<RootState>) => getModule(UserModuleClass, store)
export default UserVuexModule

export function registerUserModule(store: Store<RootState>) {
  if (!store.state.UserStore) {
    store.registerModule('Store', UserModuleClass)
  }
}