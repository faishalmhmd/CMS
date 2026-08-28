<template>
  <div class="mb-8 text-center">
    <h2 class="text-3xl font-bold text-highlighted">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-2 text-muted">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>
