<script setup lang="ts">
import LayoutMain from './layouts/LayoutMain.vue';
</script>

<template>
  <LayoutMain>
    <template v-slot:searchBar></template>
    <RouterView />
    <template v-slot:footer>
      By Tiago Forward - 2025 ®
    </template>
  </LayoutMain>
</template>

<style scoped>
</style>
