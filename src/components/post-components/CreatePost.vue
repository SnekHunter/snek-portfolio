<script setup>
  import { ref } from 'vue';
  const emit = defineEmits(['created', 'cancel']);
  const newTitle = ref('');
  const newBody = ref('');
  const isPosting = ref(false);
  const createPost = async () => {
    const title = newTitle.value.trim();
    const body = newBody.value.trim();
    if (!title || !body) return;
    isPosting.value = true;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body, userId: 1 }),
    });
    if (res.ok) {
      const newPost = await res.json();
      emit('created', {
        ...newPost,
        id: newPost.id || Date.now(),
        title,
        body,
        userId: 1,
      });
      newTitle.value = '';
      newBody.value = '';
    } else {
      alert('Post failed');
    }
    isPosting.value = false;
  };
</script>

<template>
  <div class="create-form">
    <textarea
      class="create-title"
      v-model="newTitle"
      placeholder="Post title"
    ></textarea>
    <textarea
      class="create-body"
      v-model="newBody"
      placeholder="Post body"
    ></textarea>
    <button class="primary" :disabled="isPosting" @click="createPost">
      Post
    </button>
    <button class="secondary" :disabled="isPosting" @click="emit('cancel')">
      Cancel
    </button>
  </div>
</template>
