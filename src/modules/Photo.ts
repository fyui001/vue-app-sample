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