<template>
  <section class="py-20 text-center">
    <UContainer class="max-w-4xl">
      <UBadge v-if="badge" :label="badge" color="primary" variant="subtle" class="mb-4" />

      <h1 class="text-4xl sm:text-5xl font-bold text-highlighted mb-4">
        {{ title }}
      </h1>

      <p class="text-xl text-muted mb-8">
        {{ subtitle }}
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <UButton
          v-for="(btn, index) in buttons"
          :key="index"
          :label="btn.text"
          :to="btn.url"
          :color="btn.secondary ? 'neutral' : 'primary'"
          :variant="btn.secondary ? 'outline' : 'solid'"
          size="lg"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Button {
  text: string
  secondary?: boolean
  url?: string
}

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  badge?: string
  buttons?: Button[]
}>(), {
  title: 'Welcome to Our Website',
  subtitle: 'Create something amazing with our drag and drop builder',
  badge: undefined,
  buttons: () => [
    { text: 'Get Started' },
    { text: 'Learn More', secondary: true }
  ]
})
</script>
