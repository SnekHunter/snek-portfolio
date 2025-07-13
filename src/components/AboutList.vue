<script setup>
  const items = [
    {
      id: 1,
      name: 'HTML & CSS',
      description: 'HTML & CSS for structure and styling',
    },
    {
      id: 2,
      name: 'JavaScript',
      description: 'JavaScript for making websites interactive',
    },
    {
      id: 3,
      name: 'Vue.js',
      description: 'Vue.js for building dynamic applications',
    },
    {
      id: 4,
      name: 'Vue Router',
      description: 'Vue Router for navigation (like this website!)',
    },
    {
      id: 5,
      name: 'React',
      description: 'React for building user interfaces',
    },
    {
      id: 6,
      name: 'To be updated',
      description: 'Not Available',
    },
    {
      id: 7,
      name: 'To be updated',
      description: 'Not Available',
    },
    {
      id: 8,
      name: 'To be updated',
      description: 'Not Available',
    },
  ];
</script>

<template>
  <div>
    <h2>Everything I've Learnt:</h2>
    <div class="about-grid">
      <div v-for="item in items" :key="item.id" class="template-card">
        <strong>{{ item.name }}</strong
        ><br />
        <span>{{ item.description }}</span>
      </div>
    </div>
  </div>
</template>
