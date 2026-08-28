<template>
  <footer class="border-t border-default py-8">
    <UContainer class="flex flex-col items-center gap-2 text-sm text-muted sm:flex-row sm:justify-between">
      <span>&copy; {{ new Date().getFullYear() }} {{ siteName }}</span>
      <span>Dibuat dengan Nuxt UI</span>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ siteName?: string }>(), {
  siteName: 'My Website'
})
</script>
