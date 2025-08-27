<script setup lang="ts">
import type { IData } from '~/types/data.interface'

const selectedPages = ref('')

const { data: pages } = await useAsyncData('pages', () =>
  queryCollection('content').all()
)

const { data: pageDetail } = await useAsyncData<IData | null>('pageDetail', async () => {
  const result = await queryCollection('content')
    .where('stem', '=', selectedPages.value)
    .first()
  return result as IData | null
}, { watch: [selectedPages] })

const savePage = async () => {
  if (!pageDetail.value) return
  await $fetch(`/api/content/${selectedPages.value}`, {
    method: 'POST',
    body: pageDetail.value
  })
}

</script>

<template>
  <div class="grid grid-cols-[15fr_20fr_65fr] bg-white h-screen text-black">
    <div class="flex flex-col bg-gray-50 border-r border-gray-100 p-4">
      <div class="text-xl font-semibold mb-4">
        Pages
      </div>

      <div 
        v-for="page in pages" 
        :key="page.id" 
        class="flex gap items-center mb-2 hover:bg-gray-100 p-1 rounded border border-gray-100 cursor-pointer" 
        @click="selectedPages = page.stem"
      >
        <Icon name="lets-icons:file-duotone"  class="h-6 w-6"/>
        <div>{{ page.stem }}</div>
      </div>

      <UModal>
        <UButton  
          icon="icon-park-solid:add" 
          size="md" 
          color="primary" 
          variant="solid" 
          label="Add" 
          class="w-fit cursor-pointer"
        />
        <template #content>
          <div class="bg-red-500 h-full w-full">
            adasd
          </div>
        </template>
      </UModal>
    </div>

    <div class="p-4">
        <div class="font-semibold text-xl">
          Main Content of {{ selectedPages }}
        </div>
        <div v-if="pageDetail">
          <div class="flex flex-col my-4">
            <label for="title" class="font-medium">Title</label>
            <UInput id="title" v-model="pageDetail.title" placeholder="Edit title..." />
          </div>
          <div class="flex flex-col my-4">
            <label for="title" class="font-medium">Body</label>
            <UInput id="title" v-model="pageDetail.body" placeholder="Edit title..." />
          </div>
          <div class="">
            <div v-for="items in pageDetail.meta.data.qa">
              {{ items }}
            </div>
          </div>
        </div>


        <div v-else>
          <p>No page selected or page not found.</p>
        </div>

        <UButton @click="savePage" class="mt-3">💾 Save</UButton>
    </div> 
    <div class="border-l border-gray-100">
      <div class="p-4">
        <div v-if="pageDetail">
          <div class="flex flex-col my-4">
            <div class="font-bold">
              {{ pageDetail.title }}
            </div>
            <div class="">
              {{ pageDetail.body }}
            </div>
            <div class="">
              <UAccordion :items="pageDetail.meta.data.qa.map(q => ({ label: q.q, content: q.a }))" />
            </div>
          </div>
        </div>
        <div v-else>
          <p>No page selected or page not found.</p>
        </div>
      </div>
    </div>
  </div>
</template>
