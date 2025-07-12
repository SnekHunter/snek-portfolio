<script setup>
  import { ref } from 'vue';
  const query = ref('');
  const emit = defineEmits(['search']);
</script>
<template>
  <input
    class="search-bar"
    v-model="query"
    @input="emit('search', query)"
    placeholder="Search posts…"
  />
</template>
