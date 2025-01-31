<template>
  <div :class="classes.boxContainer">
    <div :class="classes.contentContainer">
      <div>
        <img :src="imageUrl" alt="Playlist Thumbnail">
      </div>

      <div :class="classes.boxContent">
        <h2 :class="classes.title">{{ title }}</h2>

        <div :class="classes.content">
          <span>Playlist • Não listado</span>
          <span v-if="songs <= 1">• {{ songs }} vídeo</span>
          <span v-else>• {{ songs }} vídeos</span>
          <span>• Criado dia {{ createDate }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({

  name: 'PlaylistCard',
  props: {
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
    createDate: {
      type: String as PropType<string>,
      required: true,
    }
  },
  setup() {

  }
})
</script>

<style module="classes">
.boxContainer {
  display: flex;
  align-items: center;
  width: 400px;
}

.contentContainer {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.contentContainer img {
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
}

.boxContent {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.boxContent .title {
  font-size: 1.6rem;
}

.boxContent .content {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
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

@media (max-width: 1080px) {
  .boxContainer {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .contentContainer {
    flex-direction: row;
  }

  .contentContainer img {
    width: 300px;
  }

  .boxContent .title {
    font-size: 1.8rem;
  }

  .boxContent .content {
    font-size: 0.84rem;
  }
}

@media (max-width: 840px) {
  .contentContainer {
    flex-direction: column;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .contentContainer img {
    width: 100%;
  }
}

@media (max-width: 690px) {
  .contentContainer {
    padding-left: 0rem;
    padding-right: 0rem;
  }

  .boxContent .title {
    font-size: 1.4rem;
  }

  .boxContent .content {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {}
</style>
