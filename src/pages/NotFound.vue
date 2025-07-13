<template>
  <div class="not-found">
    <div class="info-container">
      <h1 class="error-title">Oops! Page Not Found 😅</h1>
      <div class="highlight-box">
        <p class="highlight-message">
          The page you're looking for doesn't exist.
        </p>
        <p class="highlight-message">
          Maybe you want to visit one of these pages instead:
        </p>
        <nav class="link-grid">
          <router-link to="/">🏠 Home</router-link>
          <router-link to="/projects">💻 Projects</router-link>
          <router-link to="/contact">📧 Contact</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotFound',
  };
</script>
