<template>
  <div :class="classes.boxContainer">
    <div>
      <img
        src="https://i.ytimg.com/vi/pY7Kzkpbll0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDY82qlOeWWWGSxFzrSZAnR4HxNKg"
        alt="Playlist Thumbnail">
      <!-- <img :src="imageUrl" alt="Playlist Thumbnail"> -->
    </div>
    <div :class="classes.boxContent">
      <h2>{{ title }}</h2>
      <span>Privado * Playlist</span>
      <RouterLink to="/playlist">Ver playlist completa</RouterLink>
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
    imageUrl: {
      type: String as PropType<string>,
      required: false,
    },
    title: {
      type: String as PropType<string>,
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
