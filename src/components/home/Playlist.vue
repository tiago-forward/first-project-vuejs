<template>
  <div :class="playlist.boxContainer">
    <div>
      <img
        src="https://i.ytimg.com/vi/pY7Kzkpbll0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDY82qlOeWWWGSxFzrSZAnR4HxNKg"
        alt="Playlist Thumbnail">
      <!-- <img :src="imageUrl" alt="Playlist Thumbnail"> -->
    </div>
    <div :class="playlist.boxContent">
      <h2>IVE</h2>
      <!-- <h2>{{  title }}</h2> -->
      <span>Privado * Playlist</span>
      <a href="#">Ver playlist completa</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Playlist',
  props: {
    imageUrl: {
      type: String as PropType<string>,
      required: false,
    },
    title: {
      type: String as PropType<string>,
      required: false,
    },
  },
  setup() {

  }
})
</script>

<style module="playlist">
.boxContainer {
  display: flex;
  flex-direction: column;
}

.boxContainer img {
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
}

.boxContent {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 0.6rem;
}

span, a {
  color: #878787;
}

a {
  text-decoration: none;
}

a:hover {
  color: white;
}
</style>
