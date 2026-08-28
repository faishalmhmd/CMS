<template>
  <div class="flex min-h-screen flex-col">
    <Navbar :site-name="siteName" />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter :site-name="siteName" />
  </div>
</template>

<script setup lang="ts">
const siteName = 'UMKMnesia'
</script>
