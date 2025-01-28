import axios, { type AxiosInstance } from 'axios'

export interface PlaylistsType {
  id: number
  name: string
  image_url: string
  songs: number
  videos: object
}

export interface PlaylistIdType {
  id: number
  title: string
  image_url: string
  video_url: string
  channel_name: string
  publish_date: string
}

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
})

export const getPlaylists = async (): Promise<PlaylistsType[]> => {
  try {
    const response = await api.get('playlists')
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw new Error('Erro ao buscar playlists')
  }
}
