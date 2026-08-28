<template>
  <section class="py-12">
    <UContainer class="max-w-3xl">
      <SectionHeading :title="title" :description="description" />

      <UAccordion :items="accordionItems" />

      <p v-if="!items.length" class="text-center text-muted">
        Belum ada pertanyaan.
      </p>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'
import type { IQA } from '~/types/data.interface'

const props = withDefaults(defineProps<{
  items: IQA[]
  title?: string
  description?: string
}>(), {
  title: 'Pertanyaan Umum',
  description: undefined
})

const accordionItems = computed<AccordionItem[]>(() =>
  props.items.map(item => ({
    label: item.q,
    content: item.a,
    icon: 'i-lucide-circle-help'
  }))
)
</script>
