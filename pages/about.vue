<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/about').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <div>
    <h1>Raw Content Data</h1>
    <pre>{{ home }}</pre> <!-- tampilkan semua object -->
  </div>

  <div v-if="home">
    <h2>Title:</h2>
    <p>{{ home.title }}</p>

    <h2>Body:</h2>
    <div v-html="home.body"></div> <!-- kalau Markdown sudah di-render jadi HTML -->
  </div>

  <div v-else class="bg-red-500 p-4">
    Home not found
  </div>
</template>