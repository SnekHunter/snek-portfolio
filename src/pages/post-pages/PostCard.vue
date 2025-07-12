<script setup>
  import { ref } from 'vue';
  import EditPost from '../../components/post-components/EditPost.vue';
  import DeletePost from '../../components/post-components/DeletePost.vue';
  const props = defineProps({ post: Object });
  const emit = defineEmits(['delete', 'update']);
  const expanded = ref(false);
  const editing = ref(false);
  const onEdit = (updated) => {
    emit('update', updated);
    editing.value = false;
  };
</script>
<template>
  <div class="card post-card">
    <template v-if="editing">
      <EditPost :post="post" @saved="onEdit" @cancel="editing = false" />
    </template>
    <template v-else>
      <h3 class="post-title">{{ post.title }}</h3>
      <p class="post-body">
        {{ expanded ? post.body : post.body.slice(0, 100) + '...' }}
      </p>
      <button class="accent" @click="expanded = !expanded">
        {{ expanded ? 'Collapse' : 'Read More' }}
      </button>
      <button class="secondary" @click="editing = true">Edit</button>
      <DeletePost :id="post.id" @deleted="emit('delete', post.id)" />
    </template>
  </div>
</template>
