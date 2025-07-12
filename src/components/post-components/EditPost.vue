<script setup>
  import { ref } from 'vue';
  const props = defineProps({ post: Object });
  const emit = defineEmits(['saved', 'cancel']);
  const titleEdit = ref(props.post.title);
  const bodyEdit = ref(props.post.body);
  const isSaving = ref(false);
  const saveEdit = async () => {
    const title = titleEdit.value.trim();
    const body = bodyEdit.value.trim();
    if (!title || !body) return;
    isSaving.value = true;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.post.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...props.post, title, body }),
      }
    );
    if (res.ok) {
      emit('saved', { ...props.post, title, body });
    } else {
      alert('Update failed');
    }
    isSaving.value = false;
  };
</script>

<template>
  <div class="edit-form">
    <textarea class="edit-title" v-model="titleEdit" rows="2"></textarea>
    <textarea class="edit-body" v-model="bodyEdit" rows="4"></textarea>
    <button class="primary" :disabled="isSaving" @click="saveEdit">Save</button>
    <button class="secondary" :disabled="isSaving" @click="emit('cancel')">
      Cancel
    </button>
  </div>
</template>
