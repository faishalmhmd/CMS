<template>
  <div :class="['py-20 text-center', `bg-${bgColor} text-${textColor}`]">
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-4xl font-bold mb-4" :class="`text-${textColor}`">
        {{ title }}
      </h1>
      <p class="text-xl mb-8 opacity-90" :class="`text-${textColor}`">
        {{ subtitle }}
      </p>
      <div class="flex justify-center space-x-4">
        <button 
          v-for="(btn, index) in buttons" 
          :key="index"
          :class="[{
            'bg-white text-gray-800 hover:bg-gray-100': !btn.secondary,
            'bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10': btn.secondary
          }, 'px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105']"
        >
          {{ btn.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Button {
  text: string
  secondary?: boolean
  url?: string
}

const props = defineProps({
  title: {
    type: String,
    default: 'Welcome to Our Website'
  },
  subtitle: {
    type: String,
    default: 'Create something amazing with our drag and drop builder'
  },
  bgColor: {
    type: String,
    default: 'blue-600'
  },
  textColor: {
    type: String,
    default: 'white'
  },
  buttons: {
    type: Array as () => Button[],
    default: () => [
      { text: 'Get Started' },
      { text: 'Learn More', secondary: true }
    ]
  }
})
</script>
