<script lang="ts">
import Playlist from '@/components/home/PlaylistCard.vue';
import { defineComponent, onMounted, ref } from 'vue';
import { getPlaylists, type PlaylistType } from '@/lib/axios.ts';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Playlist,
  },
  setup() {
    const playlists = ref<PlaylistType[]>([])

    onMounted(async () => {
      try {
        playlists.value = await getPlaylists()
        console.log(playlists.value)
      } catch (err) {
        console.log("Erro ao carregar dados das playlists", err)
      }
    })

    return { playlists }
  },
})
</script>

<template>
  <div :class="home.container">
    <header>
      <h1>Minha playlist de músicas Kpop</h1>
    </header>
    <div :class="home.playlistContainer">
      <div v-for="playlist in playlists" :key="playlist.id">
        <Playlist image-url="" :title="playlist.name" />
      </div>
    </div>
    <footer>By Tiago Forward - 2025 ®</footer>
  </div>
</template>

<style module="home">
header {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.playlistContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
}

footer {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
</style>
