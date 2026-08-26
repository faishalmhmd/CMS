<script setup lang="ts">
const { data: about } = await useAsyncData(() => queryCollection('content').path('/about').first())

useSeoMeta({
  title: about.value?.title,
  description: about.value?.description
})
</script>

<template>
  <UContainer class="py-12 max-w-3xl">
    <template v-if="about">
      <SectionHeading :title="about.title" :description="about.description ?? undefined" />

      <UCard>
        <p class="text-muted">
          {{ about.body }}
        </p>
      </UCard>
    </template>

    <UAlert
      v-else
      title="About not found"
      description="Konten untuk halaman ini belum tersedia."
      color="error"
      variant="subtle"
      icon="i-lucide-triangle-alert"
    />
  </UContainer>
</template>
