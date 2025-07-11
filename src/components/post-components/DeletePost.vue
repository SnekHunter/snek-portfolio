<template>
  <button @click="handleDelete" :disabled="loading">
    {{ loading ? "Deleting..." : `Delete Post #${id}` }}
  </button>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "DeletePost",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const loading = ref(false);

    const handleDelete = async () => {
      if (!confirm("Are you sure you want to delete this post?")) return;
      loading.value = true;
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      setTimeout(() => router.push("/posts"), 600);
    };

    return { id, loading, handleDelete };
  },
};
</script>
