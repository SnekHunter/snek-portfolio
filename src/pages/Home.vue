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

    <h1>About Me</h1>
    <p>
      I'm just another person trying to learn web development using React and
      Vue. I'm excited about building websites and improve my current skills!
    </p>

    <h2>What I'm Learning:</h2>
    <ul>
      <li>HTML & CSS for structure and styling</li>
      <li>JavaScript for making websites interactive</li>
      <li>Vue.js for building dynamic applications</li>
      <li>Vue Router for navigation (like this website!)</li>
      <li>React for building user interfaces</li>
    </ul>

    <div class="highlight-box">
      <p>
        <strong>Fun fact:</strong> This entire website is actually just one HTML
        file that shows different content using Vue Router!
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>
