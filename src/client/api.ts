import axios from 'axios'
import { API_BASE_URL } from '../../config/config'

export interface SendCredential {
  user_id: string
  password: string
}

export interface SendPhotoData {
  title: string
  image: any[]
  content: string
}

export interface LoginResponseSuccess {
  status: boolean
  data: {
    id: number
    user_id: string
    name: string
    access_token: string
  }
}

export interface LoginResponseError {
  status: boolean
  msg: string
}

export interface LogoutResponse {
  status: boolean
}

export interface BearerAuthenticationResponseSuccess {
  status: boolean
  data: {
    id: number
    user_id: string
    name: string
  }
  refresh_token?: string
}

export interface BearerAuthenticationResponseError {
  status: boolean
  msg: string
}

export interface FetchPhotoListResponse {
  status: boolean
  data: {
    current_page: number
    data: {
      id: number
      title: string
      content: string
      image_url: string
      user_id: number
      del_flg: number
      created_at: string
      updated_at: string
      user: {
        id: number
        user_id: string
        name: string
        created_at: string
        updated_at: string
      }
    }[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    next_page_url: string
    path: string
    per_page: number
    prev_page_url?: string
    to: number
    total: number
  }
}

export interface PostPhotoDataResponse {
  status: boolean
  msg: string
}

export default class ApiRequest {
  static async postLoginRequest(credential: SendCredential): Promise<LoginResponseSuccess | LoginResponseError> {
    const result = await axios({
      method: 'POST',
      url: `${API_BASE_URL}/api/users/login`,
      data: credential,
    })
    return result.data
  }

  static async postLogoutAction(accessToken: string): Promise<LogoutResponse> {
    const result = await axios({
      method: 'GET',
      url: `${API_BASE_URL}/api/users/logout`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return result.data.status
  }

  static async bearerAuthentication(
    accessToken: string
  ): Promise<BearerAuthenticationResponseSuccess | BearerAuthenticationResponseError> {
    const result = await axios({
      method: 'GET',
      url: `${API_BASE_URL}/api/users/`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return result.data
  }

  static async fetchPhotoLists({ page }: { page: number }): Promise<FetchPhotoListResponse> {
    const result = await axios({
      method: 'GET',
      url: `${API_BASE_URL}/api/photos`,
      params: {
        page,
      },
    })
    return result.data
  }

  static async fetchPhoto(id: number) {
    const results = await axios({
      method: 'GET',
      url: `${API_BASE_URL}/api/photos/${id}`,
    })
    return results.data
  }

  static async postPhoto(postData: SendPhotoData, accessToken: string): Promise<PostPhotoDataResponse> {
    const result = await axios({
      method: 'POST',
      url: `${API_BASE_URL}/api/photos/create`,
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
      data: postData,
    })
    return result.data
  }
}
