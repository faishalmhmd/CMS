<template>
  <section class="py-12">
    <UContainer class="max-w-3xl">
      <SectionHeading :title="title" :description="description" />

      <UCard>
        <div class="grid gap-4 sm:grid-cols-3">
          <UButton
            :label="contact.telepon"
            :to="`tel:${contact.telepon.replace(/\s/g, '')}`"
            icon="i-lucide-phone"
            color="neutral"
            variant="ghost"
          />
          <UButton
            :label="contact.email"
            :to="`mailto:${contact.email}`"
            icon="i-lucide-mail"
            color="neutral"
            variant="ghost"
          />
          <div class="flex items-center gap-2 text-muted">
            <UIcon name="i-lucide-map-pin" class="size-5 shrink-0" />
            <span>{{ contact.alamat }}</span>
          </div>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { IKontak } from '~/types/data.interface'

withDefaults(defineProps<{
  contact: IKontak
  title?: string
  description?: string
}>(), {
  title: 'Kontak',
  description: undefined
})
</script>
