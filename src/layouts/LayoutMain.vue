<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutMain',
  setup() { }
})
</script>

<template>
  <header>
    <slot name="searchBar"></slot>
  </header>

  <main>
    <slot></slot>
  </main>

  <footer :class="classes.footer">
    <slot name="footer"></slot>
  </footer>
</template>

<style module="classes">
.footer {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
</style>
