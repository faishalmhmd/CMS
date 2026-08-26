<script setup lang="ts">
import type { IQA, IProduk, ILayanan, IKontak } from '~/types/data.interface'

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})

const content = computed(() => home.value?.meta?.data as {
  qa?: IQA[]
  produk?: IProduk[]
  layanan?: ILayanan[]
  kontak?: IKontak
} | undefined)
</script>

<template>
  <div v-if="home">
    <Hero :title="home.title" :subtitle="home.body" badge="UMKM" />

    <ProductList
      v-if="content?.produk?.length"
      :items="content.produk"
      title="Produk Unggulan"
      description="Pilihan produk dari pelaku UMKM."
    />

    <ServiceList
      v-if="content?.layanan?.length"
      :items="content.layanan"
      title="Layanan Kami"
      description="Dukungan untuk mengembangkan usaha Anda."
    />

    <FaqSection
      v-if="content?.qa?.length"
      :items="content.qa"
      title="Pertanyaan Umum"
    />

    <ContactCard
      v-if="content?.kontak"
      :contact="content.kontak"
      title="Hubungi Kami"
    />
  </div>

  <UContainer v-else class="py-12">
    <UAlert
      title="Home not found"
      description="Konten untuk halaman ini belum tersedia."
      color="error"
      variant="subtle"
      icon="i-lucide-triangle-alert"
    />
  </UContainer>
</template>
