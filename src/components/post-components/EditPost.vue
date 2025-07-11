<template>
  <div class="edit-post-bar">
    <button v-if="hidden" @click="startEdit">Edit Post</button>
    <div v-else>
      <h2>Edit Post #{{ id }}</h2>
      <input v-model="details.title" placeholder="Post Title" />
      <textarea v-model="details.body" placeholder="Post Details" />
      <div class="edit-post-actions">
        <button @click="handleEdit" :disabled="editLoading">
          {{ editLoading ? "Updating..." : "Update Post" }}
        </button>
        <button @click="cancelEdit" :disabled="editLoading">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "EditPost",
  props: ["modelValue"],
  emits: ["update"],

  setup(props, { emit }) {
    const route = useRoute();
    const id = route.params.id;
    const hidden = ref(true);
    const details = ref({ title: "", body: "" });
    const editLoading = ref(false);

    const startEdit = () => {
      hidden.value = false;
    };
    const cancelEdit = () => {
      hidden.value = true;
    };

    onMounted(async () => {
      // initialize from prop or fetch
      if (props.modelValue) {
        details.value = {
          title: props.modelValue.title,
          body: props.modelValue.body,
        };
      } else {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        const data = await res.json();
        details.value = { title: data.title, body: data.body };
      }
    });

    const handleEdit = async () => {
      editLoading.value = true;

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, ...details.value, userId: 1 }),
        }
      );

      const data = await res.json();
      emit("update", data);
      alert(`Post ${id} updated!`);

      hidden.value = true;
      editLoading.value = false;
    };

    return {
      id,
      hidden,
      details,
      editLoading,
      startEdit,
      cancelEdit,
      handleEdit,
    };
  },
};
</script>
