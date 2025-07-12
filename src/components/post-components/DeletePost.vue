<script setup>
  import { ref } from 'vue';
  const props = defineProps({ id: Number });
  const emit = defineEmits(['deleted']);
  const isDeleting = ref(false);
  const deletePost = async () => {
    isDeleting.value = true;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.id}`,
      { method: 'DELETE' }
    );
    if (res.ok) emit('deleted');
    else alert('Delete failed');
    isDeleting.value = false;
  };
</script>

<template>
  <button class="delete" :disabled="isDeleting" @click="deletePost">
    Delete
  </button>
</template>
