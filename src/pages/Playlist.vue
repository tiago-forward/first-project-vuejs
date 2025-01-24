<script lang="ts">
import { defineComponent } from 'vue';
import CinematicContainer from '@/components/pages/playlist/CinematicContainer.vue';
import PlaylistCard from '@/components/pages/playlist/PlaylistCard.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Playlist',
  components: {
    CinematicContainer,
    PlaylistCard,
  },
  props: {},
  setup() {

  }
})
</script>

<template>
  <div :class="classes.playlistContainer">
    <aside :class="classes.aside">
      <CinematicContainer image-url="" title="IVE" />
    </aside>

    <section :class="classes.section">
      <PlaylistCard image-url="" title="IVE(아이브) 'REBEL HEART' (4K) | STUDIO CHOOM ORIGINAL" />
      <PlaylistCard image-url="" title="IVE(아이브) 'REBEL HEART' (4K) | STUDIO CHOOM ORIGINAL" />
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
}
</style>
