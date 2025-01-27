<template>
  <div :class="classes.boxContainer">
    <div :class="classes.imageContainer">
      <img :src="imageUrl" alt="Playlist Thumbnail">
      <span v-if="songs > 1">{{ songs }} vídeos</span>
      <span v-else-if="songs <= 1">{{ songs }} vídeo</span>
    </div>
    <div :class="classes.boxContent">
      <h2>{{ title }}</h2>
      <span>Privado * Playlist</span>
      <RouterLink :to="{ name: 'Playlist', params: { id: id } }">Ver playlist completa</RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterLink } from 'vue-router';

export default defineComponent({

  name: 'PlaylistCard',
  props: {
    id: {
      type: Number as PropType<number>,
      required: true,
    },
    imageUrl: {
      type: String as PropType<string>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
    songs: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup() {

  }
})
</script>

<style module="classes">
.boxContainer {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.imageContainer {
  position: relative;
  display: flex;
}

.imageContainer span {
  position: absolute;
  bottom: 0;
  right: 0;
  color: wheat;
  font-size: 20px;
  background-color: #090B16;
  border-radius: 10px;
  padding: 0.4rem;
  margin-bottom: 0.4rem;
  margin-right: 0.4rem;
}

.imageContainer img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
}

.boxContent {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 0.6rem;
  margin-top: 0.4rem;
}

span,
a {
  color: #878787;
}

a {
  text-decoration: none;
}

a:hover {
  color: white;
}
</style>
