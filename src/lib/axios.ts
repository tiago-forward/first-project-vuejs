import axios, { type AxiosInstance } from 'axios'

export interface PlaylistType {
  id: number
  name: string
  songs: number
}

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
})

export const getPlaylists = async (): Promise<PlaylistType[]> => {
  try {
    const response = await api.get('playlists')
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw new Error('Erro ao buscar playlists')
  }
}
