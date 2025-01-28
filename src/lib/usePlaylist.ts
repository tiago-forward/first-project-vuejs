import { ref } from 'vue'
import { getPlaylists, type PlaylistIdType } from './axios'

export const usePlaylist = (id: number) => {
  const playlistVideos = ref<PlaylistIdType[]>([])

  const fetchPlaylistVideos = async () => {
    try {
      const playlists = await getPlaylists()
      playlistVideos.value = playlists[id - 1]?.videos || []
    } catch (error) {
      console.error('Erro ao carregar dados da playlist', error)
    }
  }

  return { playlistVideos, fetchPlaylistVideos }
}
