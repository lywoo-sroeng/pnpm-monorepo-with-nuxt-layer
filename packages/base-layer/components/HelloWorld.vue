<script setup lang="ts">
const { myLayer } = useAppConfig()

const countLabel = ref('')

const count = ref(0)

import { cn } from '~/lib/utils'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <TestComponent />

    <h1 :class="cn('text-xl font-semibold text-green-600')">
      {{ myLayer.name }}
    </h1>

    <div>{{ countLabel || 'Count Label' }}: {{ count }}</div>

    <Input
      v-model="countLabel"
      class="w-52"
      name="aosidjofi asdoif oasid ofaisd ofiajsodjofa isdoifasdoi "
      placeholder="Name of Count Label"
    />
    <Button @click="count++"> Click me </Button>
    <TestComponent />
  </div>
</template>
