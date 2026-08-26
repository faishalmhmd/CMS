<template>
  <section class="py-12">
    <UContainer>
      <SectionHeading :title="title" :description="description" />

      <div class="grid gap-6 sm:grid-cols-2">
        <UCard v-for="service in items" :key="service.nama">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-sparkles" class="size-6 shrink-0 text-primary" />
            <div>
              <h3 class="font-semibold text-highlighted">
                {{ service.nama }}
              </h3>
              <p class="mt-1 text-muted">
                {{ service.deskripsi }}
              </p>
            </div>
          </div>
        </UCard>
      </div>

      <p v-if="!items.length" class="text-center text-muted">
        Belum ada layanan.
      </p>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { ILayanan } from '~/types/data.interface'

withDefaults(defineProps<{
  items: ILayanan[]
  title?: string
  description?: string
}>(), {
  title: 'Layanan',
  description: undefined
})
</script>
