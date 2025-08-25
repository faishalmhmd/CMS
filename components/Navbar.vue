<template>
  <nav :class="['p-4', `bg-${bgColor} text-${textColor}`]">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-xl font-bold">{{ siteName }}</div>
      <div class="space-x-6">
        <a 
          v-for="(item, index) in navItems" 
          :key="index"
          :href="item.url" 
          class="hover:opacity-80 transition-opacity"
          :class="{ 'font-bold': item.active }"
        >
          {{ item.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface NavItem {
  text: string
  url: string
  active?: boolean
}

const props = defineProps({
  siteName: {
    type: String,
    default: 'My Website'
  },
  bgColor: {
    type: String,
    default: 'blue-600'
  },
  textColor: {
    type: String,
    default: 'white'
  },
  items: {
    type: Array as () => NavItem[],
    default: () => [
      { text: 'Home', url: '#', active: true },
      { text: 'About', url: '#' },
      { text: 'Services', url: '#' },
      { text: 'Contact', url: '#' }
    ]
  }
})

const navItems = ref<NavItem[]>(props.items)
</script>
