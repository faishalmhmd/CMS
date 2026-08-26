<template>
  <nav class="border-b border-default bg-default/75 backdrop-blur sticky top-0 z-50">
    <UContainer class="flex items-center justify-between gap-4 py-3">
      <NuxtLink to="/" class="text-lg font-bold text-highlighted">
        {{ siteName }}
      </NuxtLink>

      <UNavigationMenu :items="menuItems" class="hidden sm:flex" />

      <div class="flex items-center gap-2">
        <UButton
          class="sm:hidden"
          icon="i-lucide-menu"
          color="neutral"
          variant="ghost"
          aria-label="Open menu"
          @click="open = true"
        />
      </div>
    </UContainer>

    <USlideover v-model:open="open" title="Menu">
      <template #body>
        <UNavigationMenu :items="menuItems" orientation="vertical" />
      </template>
    </USlideover>
  </nav>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

interface NavItem {
  text: string
  url: string
  active?: boolean
}

const props = withDefaults(defineProps<{
  siteName?: string
  items?: NavItem[]
}>(), {
  siteName: 'My Website',
  items: () => [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Admin', url: '/admin' }
  ]
})

const open = ref(false)
const route = useRoute()

const menuItems = computed<NavigationMenuItem[]>(() =>
  props.items.map(item => ({
    label: item.text,
    to: item.url,
    active: item.active ?? route.path === item.url,
    onSelect: () => {
      open.value = false
    }
  }))
)
</script>
