<template>
  <div class="create-post-bar">
    <button v-if="hidden" class="create-button" @click="hidden = false">
      Create New Post
    </button>
    <div v-else>
      <h2>Create a New Post</h2>
      <input v-model="title" placeholder="Post Title" />
      <textarea v-model="body" placeholder="Post Details" />
      <div class="create-post-actions">
        <button @click="handleCreate" :disabled="loading">
          {{ loading ? "Creating..." : "Create" }}
        </button>
        <button @click="hidden = true">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CreatePost",
  emits: ["create"],

  setup(_, { emit }) {
    const hidden = ref(true);
    const title = ref("");
    const body = ref("");
    const loading = ref(false);

    const handleCreate = async () => {
      loading.value = true;

      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          title: title.value,
          body: body.value,
          userId: 1,
        }),
      });

      const data = await res.json();
      emit("create", { ...data, title: title.value, body: body.value });
      alert("Post created! ID: " + data.id);

      title.value = "";
      body.value = "";
      hidden.value = true;
      loading.value = false;
    };

    return { hidden, title, body, loading, handleCreate };
  },
};
</script>
