<script lang="ts" se>
import Playlist from '@/components/home/Playlist.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Playlist,
  },
  setup() {
    const nome = ref(<string>('Tiago'))
    console.log(nome.value)
  },
})
</script>

<template>
  <div :class="home.container">
    <header>
      <h1>Minha playlist de músicas Kpop</h1>
    </header>
    <div :class="home.playlistContainer">
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
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
  grid-template-columns: repeat(auto-fill, minmax(400px, auto));
  gap: 1rem;
}

footer {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
</style>
