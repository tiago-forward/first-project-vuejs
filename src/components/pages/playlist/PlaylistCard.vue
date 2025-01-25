<template>
  <div :class="classes.boxContainer">
    <div v-if="screenWidth > 690">
      <span :class="classes.index">1</span>
    </div>

    <div :class="classes.contentContainer">
      <div>
        <img
          src="https://i.ytimg.com/vi/pY7Kzkpbll0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDY82qlOeWWWGSxFzrSZAnR4HxNKg"
          alt="Playlist Thumbnail">
      </div>

      <div :class="classes.boxContent">
        <h2 :class="classes.title">{{ title }}</h2>
        <div :class="classes.content">
          <span>STUDIO CHOOM [스튜디오 춤]</span>
          <span v-if="screenWidth > 690">* 3,4 mi de visualizações</span>
          <span v-if="screenWidth > 690">* há 8 dias</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref, type PropType } from 'vue';

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
    const screenWidth = ref(window.innerWidth)

    const updateScreenWidt = () => {
      screenWidth.value = window.innerWidth
    }

    onMounted(() => {
      window.addEventListener('resize', updateScreenWidt)
    })

    onBeforeMount(() => {
      window.removeEventListener('resize', updateScreenWidt)
    })

    return {
      screenWidth,
    }
  }
})
</script>

<style module="classes">
.index {
  margin: 1rem;
}

.boxContainer {
  display: flex;
  align-items: center;
}

.contentContainer {
  display: flex;
  gap: 0.6rem;
  height: 8rem;
  width: 100%;
}

.contentContainer img {
  width: 14rem;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
}

.boxContent {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.boxContainer .title {
  font-size: 1.06rem;
}

.boxContainer .content {
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

@media (max-width: 1080px) {}

@media (max-width: 840px) {
  .boxContainer {
    padding-right: 2rem;
  }
}

@media (max-width: 690px) {
  .boxContainer {
    padding-right: 0rem;
  }

  .contentContainer {
    height: 6.8rem;
  }

  .contentContainer img {
    width: 12rem;
    border-radius: 0.4rem;
  }

  .boxContainer .title {
  font-size: 1rem;
}

.boxContainer .content {
  font-size: 0.8rem;
}

}

@media (max-width: 480px) {
  .contentContainer {
    height: 6rem;
  }

  .contentContainer img {
    width: 10rem;
  }

  .boxContainer .title {
    font-size: 0.8rem;
  }

  .boxContainer .content {
    font-size: 0.6rem;
  }
}
</style>
