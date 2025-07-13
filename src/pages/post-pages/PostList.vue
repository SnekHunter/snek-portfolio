<script setup>
  import { ref, onMounted } from 'vue';
  import PostCard from './PostCard.vue';
  import Pagination from '../../components/post-components/Pagination.vue';
  import SearchBar from '../../components/post-components/Search.vue';
  import SortDropdown from '../../components/post-components/SortDropdown.vue';
  import CreatePost from '../../components/post-components/CreatePost.vue';
  import '../../assets/post.css';

  const posts = ref([]);
  const filtered = ref([]);
  const searchQuery = ref('');
  const sortBy = ref('default');
  const currentPage = ref(1);
  const perPage = 10;
  const totalPosts = 100;
  const isLoading = ref(true);
  const error = ref(null);
  const showCreate = ref(false);

  const fetchPosts = async () => {
    isLoading.value = true;
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage.value}&_limit=${perPage}`
      );
      if (!res.ok) throw new Error('Failed to fetch posts');
      posts.value = await res.json();
      applyFilters();
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  const applyFilters = () => {
    let base = [...posts.value];
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase();
      base = base.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.body.toLowerCase().includes(q)
      );
    }
    if (sortBy.value === 'title')
      base.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy.value === 'id-desc') base.sort((a, b) => b.id - a.id);
    else if (sortBy.value === 'id-asc') base.sort((a, b) => a.id - b.id);
    filtered.value = base;
  };

  const handleSearch = (q) => {
    searchQuery.value = q;
    applyFilters();
  };
  const handleSort = (s) => {
    sortBy.value = s;
    applyFilters();
  };
  const handlePageChange = (p) => {
    currentPage.value = p;
    fetchPosts();
  };

  const handleDelete = (id) => {
    posts.value = posts.value.filter((p) => p.id !== id);
    applyFilters();
  };

  const handleUpdate = (updated) => {
    const index = posts.value.findIndex((p) => p.id === updated.id);
    if (index !== -1) {
      posts.value[index] = { ...updated };
      applyFilters();
    }
  };

  const handleCreate = (newPost) => {
    posts.value.unshift(newPost);
    applyFilters();
  };

  onMounted(fetchPosts);
</script>

<template>
  <div class="app-container">
    <SearchBar @search="handleSearch" />
    <SortDropdown @sort="handleSort" />
    <div class="actions-bar">
      <RouterLink class="back-btn" to="/projects">Back to Projects</RouterLink>
      <button class="create-btn" @click="showCreate = !showCreate">
        {{ showCreate ? 'Cancel' : 'Create Post' }}
      </button>
    </div>
    <CreatePost
      v-if="showCreate"
      @created="handleCreate"
      @cancel="showCreate = false"
    />
    <div v-if="isLoading" class="muted">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <PostCard
        v-for="post in filtered"
        :key="post.id"
        :post="post"
        @delete="handleDelete"
        @update="handleUpdate"
      />
      <Pagination
        :current="currentPage"
        :total="totalPosts"
        :per-page="perPage"
        @change="handlePageChange"
      />
    </div>
  </div>
</template>
