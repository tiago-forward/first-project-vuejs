<script lang="ts">
import PlaylistCard from '@/components/pages/home/PlaylistCard.vue'
import { defineComponent, onMounted, ref } from 'vue';
import { getPlaylists, type PlaylistsType } from '@/lib/axios.ts';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    PlaylistCard,
  },
  setup() {
    const playlists = ref<PlaylistsType[]>([])

    onMounted(async () => {
      try {
        playlists.value = await getPlaylists()
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
    <header :class="home.header">
      <h1>Minha playlist de músicas Kpop</h1>
    </header>

    <section :class="home.playlistContainer">
      <div :class="home.cardContainer" v-for="playlist in playlists" :key="playlist.id">
        <PlaylistCard :id="playlist.id" :image-url="playlist.image_url" :title="playlist.name"
          :songs="playlist.songs" />
      </div>
    </section>
  </div>
</template>

<style module="home">
.header {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.playlistContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1rem;
}

.cardContainer {
  margin: 0 auto;
}

@media (max-width: 690px) {
  .playlistContainer {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
}
</style>
