<script setup>
  const emit = defineEmits(['sort']);
</script>
<template>
  <select class="sort-dropdown" @change="emit('sort', $event.target.value)">
    <option value="default">Sort By</option>
    <option value="title">Title (A–Z)</option>
    <option value="id-asc">ID (Low to High)</option>
    <option value="id-desc">ID (High to Low)</option>
  </select>
</template>
