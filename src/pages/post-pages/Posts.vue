<template>
  <div class="post-list-container">
    <h1>Post List</h1>
    <div v-if="loading">Loading Posts@.</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ul v-else class="post-list">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/posts/${post.id}`">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </router-link>
      </li>
    </ul>
    <CreatePost @create="addPost" />
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import CreatePost from '@/components/post-components/CreatePost.vue';

  export default {
    name: 'Posts',
    components: { CreatePost },
    setup() {
      const posts = ref([]);
      const loading = ref(true);
      const error = ref(null);

      onMounted(async () => {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!res.ok) throw new Error('Failed to fetch posts');
          posts.value = await res.json();
        } catch (err) {
          error.value = err.message;
        } finally {
          loading.value = false;
        }
      });

      const addPost = (newPost) => {
        posts.value.push(newPost);
      };
      return { posts, loading, error, addPost };
    },
  };
</script>
