<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import CinematicContainer from '@/components/pages/playlist/CinematicContainer.vue';
import PlaylistCard from '@/components/pages/playlist/PlaylistCard.vue';
import { useRoute } from 'vue-router';
import { usePlaylist } from '@/lib/usePlaylist';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Playlist',
  components: {
    CinematicContainer,
    PlaylistCard,
  },
  props: {},
  setup() {

    const route = useRoute()
    const id = route.params.id as string
    const isLoading = ref(true)

    const { playlistVideos, fetchPlaylistVideos, cinematicVideo, fetchCinematicVideo } = usePlaylist(Number(id))

    onMounted(async () => {
      try {
        await fetchPlaylistVideos()
        await fetchCinematicVideo()
      } catch (error) {
        console.error('Erro ao carregador dados da playlist', error)
      } finally {
        isLoading.value = false
      }
    })

    return { playlistVideos, isLoading, cinematicVideo }
  }
})
</script>

<template>
  <div :class="classes.playlistContainer">
    <aside :class="classes.aside">
      <CinematicContainer :key="cinematicVideo.id" :image-url="cinematicVideo.image_url" :title="cinematicVideo.name"
        :songs="cinematicVideo.songs" :create-date="cinematicVideo.create_date" />
    </aside>

    <section v-if="isLoading" :class="classes.section">
      <p style="text-align: center; font-size: large;">Carregando dados...</p>
    </section>

    <section v-else :class="classes.section">
      <div v-for="(video, index) in playlistVideos" :key="video.id">
        <PlaylistCard :index="index" :key="video.id" :image-url="video.image_url" :title="video.title"
          :channel-name="video.channel_name" :publish-date="video.publish_date" />
      </div>
      <p v-if="playlistVideos.length === 0" :class="classes.textNoVideo">Nenhum vídeo foi inserido na playlist.
      </p>
    </section>
  </div>
</template>

<style module="classes">
.playlistContainer {
  display: flex;
  margin-top: 4rem;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.textNoVideo {
  text-align: center;
  font-size: large;
}

@media (max-width: 1080px) {
  .playlistContainer {
    flex-direction: column;
    align-items: center;
  }

  .section {
    align-items: center;
  }
}

@media (max-width: 840px) {
  .aside {
    width: 100%;
  }

  .textNoVideo {
    font-size: medium;
  }
}
</style>
