import { ref } from 'vue'
import { getPlaylists, type PlaylistIdType, type PlaylistsType } from './axios'
import imageLoading from "@/assets/loading-circle-bars.png"

export const usePlaylist = (id: number) => {
  const playlistVideos = ref<PlaylistIdType[]>([])
  const cinematicVideo = ref<PlaylistsType>({
    id: 0,
    name: '...',
    image_url: imageLoading,
    songs: 0,
    videos: [],
    create_date: '...'
  })

  const fetchPlaylistVideos = async () => {
    try {
      const playlists = await getPlaylists()
      playlistVideos.value = playlists[id - 1]?.videos || []
    } catch (error) {
      console.error('Erro ao carregar dados da playlist', error)
    }
  }

  const fetchCinematicVideo = async () => {
    try {
      const playlists = await getPlaylists()
      cinematicVideo.value = playlists[id - 1] || []
    } catch (error) {
      console.error('Erro ao carregar dados da playlist', error)
    }
  }

  return { playlistVideos, fetchPlaylistVideos, cinematicVideo, fetchCinematicVideo }
}
