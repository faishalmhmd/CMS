<template>
  <section class="py-12">
    <UContainer>
      <SectionHeading :title="title" :description="description" />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <UCard v-for="product in items" :key="product.nama">
          <template #header>
            <div class="flex items-start justify-between gap-2">
              <h3 class="font-semibold text-highlighted">
                {{ product.nama }}
              </h3>
              <UBadge :label="product.kategori" color="primary" variant="subtle" />
            </div>
          </template>

          <p class="text-xl font-bold text-primary">
            {{ formatPrice(product.harga) }}
          </p>

          <template #footer>
            <UButton label="Pesan sekarang" icon="i-lucide-shopping-cart" block />
          </template>
        </UCard>
      </div>

      <p v-if="!items.length" class="text-center text-muted">
        Belum ada produk.
      </p>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import type { IProduk } from '~/types/data.interface'

withDefaults(defineProps<{
  items: IProduk[]
  title?: string
  description?: string
}>(), {
  title: 'Produk',
  description: undefined
})

const formatPrice = (value: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value)
</script>
