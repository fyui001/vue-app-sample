export default interface PhotoStateType {
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
}

export interface PhotoListStateType {
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
