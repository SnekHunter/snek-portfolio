<template>
  <div class="post-detail">
    <div v-if="loading">Loading Post...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <h1>{{ details.title }}</h1>
      <p>{{ details.body }}</p>
      <router-link to="/posts">Back to Posts</router-link>
      <EditPost :model-value="details" @update="updateDetails" />
      <DeletePost />
    </div>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import EditPost from '@/components/post-components/EditPost.vue';
  import DeletePost from '@/components/post-components/DeletePost.vue';

  export default {
    name: 'PostDetails',
    components: { EditPost, DeletePost },
    setup() {
      const route = useRoute();
      const id = route.params.id;
      const details = ref({});
      const loading = ref(true);
      const error = ref(null);

      onMounted(async () => {
        try {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
          if (!res.ok) throw new Error('Failed to fetch post');
          details.value = await res.json();
        } catch (err) {
          error.value = err.message;
        } finally {
          loading.value = false;
        }
      });

      const updateDetails = (updated) => {
        details.value = updated;
      };

      return { details, loading, error, updateDetails };
    },
  };
</script>
