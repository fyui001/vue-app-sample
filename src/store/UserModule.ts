import { Mutation, Action, VuexModule, getModule, Module } from 'vuex-module-decorators'
import { Store } from 'vuex'
import { RootState } from './store'
import UserStateType from '../modules/User'
import ApiRequest, { SendCredential } from '../client/api'

@Module({ name: 'UserModuleStore', namespaced: true, stateFactory: true })
export class UserModuleClass extends VuexModule {
  user: UserStateType = {
    userId: '',
    name: '',
  }

  public isLogin = false

  @Mutation
  public SET_USER(param: UserStateType) {
    this.user = param
  }

  @Mutation
  public SET_IS_LOGIN(param: boolean) {
    this.isLogin = param
  }

  @Action
  public async loginAction(credential: SendCredential) {
    const result = await ApiRequest.postLoginRequest(credential)
    if (result.status) {
      document.cookie = 'access_token=' + result.data.access_token + ';'
      this.SET_USER({
        userId: result.data.user_id,
        name: result.data.name,
      })
      this.SET_IS_LOGIN(true)
    }
  }

  @Action
  public async logoutAction() {
    let accessToken = ''
    const cookies = document.cookie
    const cookiesArray = cookies.split('; ')
    for (const c of cookiesArray) {
      const keyValue = c.split('=')
      if (keyValue[0] === 'access_token') {
        accessToken = keyValue[1]
      }
    }
    await ApiRequest.postLogoutAction(accessToken)
  }

  @Action
  public async isLoginCheckAction() {
    let accessToken = ''
    const cookies = document.cookie
    const cookiesArray = cookies.split('; ')
    for (const c of cookiesArray) {
      const keyValue = c.split('=')
      if (keyValue[0] === 'access_token') {
        accessToken = keyValue[1]
      }
    }

    const result = await ApiRequest.bearerAuthentication(accessToken)

    if (result.status) {
      this.SET_USER({
        userId: result.data.user_id,
        name: result.data.name,
      })
      this.SET_IS_LOGIN(true)
    }
  }
}

const UserVuexModule = (store?: Store<RootState>) => getModule(UserModuleClass, store)
export default UserVuexModule

export function registerUserModule(store: Store<RootState>) {
  if (!store.state.UserModuleStore) {
    store.registerModule('UserModuleStore', UserModuleClass)
  }
}
