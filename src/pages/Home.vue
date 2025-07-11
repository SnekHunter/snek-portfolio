<script setup>
  import logo from '@/assets/portfolio-logo.png';
</script>
<template>
  <div class="info-container">
    <h1>Welcome to my Portfolio!</h1>
    <!-- FUTURE ICON DON'T REMOVE -->
    <!-- <img :src="logo" alt="My Website" class="title-image" /> -->
    <p>
      Use the navigation above to explore different sections of my site. Each
      link will show you different content instantly!
    </p>
    <div class="highlight-box">
      <p>
        Hi there! I'm learning to build websites with Vue.js and this is my
        first project using Vue Router.
      </p>
    </div>
    <p>
      This is much faster than traditional websites because we're not loading
      new pages from the server each time.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>
