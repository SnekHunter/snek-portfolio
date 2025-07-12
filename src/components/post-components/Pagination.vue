<script setup>
  const props = defineProps({
    current: Number,
    total: Number,
    perPage: Number,
  });
  const emit = defineEmits(['change']);
  const totalPages = Math.ceil(props.total / props.perPage);
</script>
<template>
  <div class="pagination">
    <button
      class="secondary"
      @click="emit('change', current - 1)"
      :disabled="current === 1"
    >
      Prev
    </button>
    <span>Page {{ current }} of {{ totalPages }}</span>
    <button
      class="secondary"
      @click="emit('change', current + 1)"
      :disabled="current === totalPages"
    >
      Next
    </button>
  </div>
</template>
