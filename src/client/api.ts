import axios from 'axios'

export interface SendCredential {
  user_id: string;
  password: string;
}

export interface LoginResponse {
  data: {
    id: number;
    user_id: string;
    name: string;
    access_token: string;
  }
}

export interface BearerAuthenticationResponse {
  data: {
    id: number;
    user_id: string;
    name: string;
  }
}

export interface SendAccessToken {
  accessToken: string;
}

export default class ApiRequest {

  static async postLoginRequest(credential: SendCredential): Promise<LoginResponse> {
    const result = await axios({
      method: 'POST',
      url: 'http://sapi.localhost/api/users/login',
      data: credential
    })
    return result.data
  }

  static async bearerAuthentication(accessToken: SendAccessToken): Promise<BearerAuthenticationResponse> {
    const result = await axios({
      method: 'GET',
      url: 'http://sapi.localhost/api/users',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      }
    })
    return result.data
  }

}