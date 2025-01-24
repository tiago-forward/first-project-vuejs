<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutMain',
  setup() { }
})
</script>

<template>
  <header :class="classes.header">
    <slot name="searchBar"></slot>
  </header>

  <main :class="classes.main">
    <slot></slot>
  </main>

  <footer :class="classes.footer">
    <slot name="footer"></slot>
  </footer>
</template>

<style module="classes">
.main {
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.footer {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
</style>
