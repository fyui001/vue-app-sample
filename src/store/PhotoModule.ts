import { Mutation, Action, VuexModule, getModule, Module } from 'vuex-module-decorators'
import { Store } from 'vuex'
import { RootState } from './store'
import PhotoStateType, { PhotoListStateType } from '../modules/Photo'
import ApiRequest, { SendPhotoData } from '../client/api'

@Module({ name: 'PhotoModuleStore', namespaced: true, stateFactory: true })
export class PhotoModuleClass extends VuexModule {
  photoList: PhotoListStateType = {
    current_page: 0,
    data: [],
    first_page_url: '',
    from: 0,
    last_page: 0,
    last_page_url: '',
    next_page_url: '',
    path: '',
    per_page: 0,
    prev_page_url: '',
    to: 0,
    total: 0,
  }

  photo: PhotoStateType = {
    id: 0,
    title: '',
    content: '',
    image_url: '',
    user_id: 0,
    del_flg: 0,
    created_at: '',
    updated_at: '',
    user: {
      id: 0,
      user_id: '',
      name: '',
      created_at: '',
      updated_at: '',
    },
  }

  loaded = {
    photoListLoaded: false,
    photoLoaded: false,
  }

  @Mutation
  public SET_PHOTO_LIST(param: PhotoListStateType) {
    this.photoList = param
    this.loaded.photoListLoaded = true
  }

  @Mutation
  public SET_PHOTO(param: PhotoStateType) {
    this.photo = param
    this.loaded.photoLoaded = true
  }

  @Action
  public async fetchPhotoList(page = 1) {
    const result = await ApiRequest.fetchPhotoLists({ page })
    this.SET_PHOTO_LIST(result.data)
  }

  @Action
  public async fetchPhoto(id: number) {
    const result = await ApiRequest.fetchPhoto(id)
    this.SET_PHOTO(result.data)
  }

  @Action
  public async postPhotoAction(request: SendPhotoData) {
    let accessToken = ''
    const cookies: string = document.cookie
    const cookiesArray: string[] = cookies.split('; ')
    for (const c of cookiesArray) {
      const keyValue: string[] = c.split('=')
      if (keyValue[0] === 'access_token') {
        accessToken = keyValue[1]
      }
    }

    const result = await ApiRequest.postPhoto(request, accessToken)
    return result.status
  }
}

const PhotoVuexModule = (store?: Store<RootState>) => getModule(PhotoModuleClass, store)
export default PhotoVuexModule

export function registerPhotoModule(store: Store<RootState>) {
  if (!store.state.PhotoModuleStore) {
    store.registerModule('PhotoModuleStore', PhotoModuleClass)
  }
}
