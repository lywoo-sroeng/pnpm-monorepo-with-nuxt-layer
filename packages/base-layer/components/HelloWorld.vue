<script setup lang="ts">
const { myLayer } = useAppConfig()

const countLabel = ref('')

const count = ref(0)
</script>

<template>
  <div class="flex-col items-center flex justify-center gap-4">
    <TestComponent />
    <h1 class="font-semibold text-xl">
      {{ myLayer.name }}
    </h1>
    <div>{{ countLabel || 'Count Label' }}: {{ count }}</div>
    <Input
      v-model="countLabel"
      class="w-52"
      placeholder="Name of Count Label"
    />
    <Button @click="count++"> Click me </Button>
    <TestComponent />
  </div>
</template>
