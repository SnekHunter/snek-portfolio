<script setup>
  import { ref } from 'vue';
  import logo from '@/assets/portfolio-logo.png';
  import home from '@/assets/icons/home-icon.svg';
  import project from '@/assets/icons/project-icon.svg';
  import contact from '@/assets/icons/contact-icon.svg';

  const open = ref(false);
</script>
<template>
  <div class="main-container">
    <nav>
      <router-link to="/" class="logo-link">
        <img :src="logo" alt="My Logo" class="logo" />
      </router-link>

      <!-- Burger menu for responsive design -->
      <button
        class="menu-toggle"
        @click="open = !open"
        aria-label="Toggle menu"
      >
        <img src="@/assets/icons/burger-menu.svg" alt="dropdown-menu" />
      </button>

      <div :class="['nav-links', { open }]">
        <router-link @click="open = false" to="/">
          <img :src="home" alt="Home" class="icons" />
          Home
        </router-link>
        <router-link @click="open = false" to="/projects">
          <img :src="project" alt="Project" class="icons" />
          Projects
        </router-link>
        <router-link @click="open = false" to="/contact">
          <img :src="contact" alt="Contact" class="icons" />
          Contact
        </router-link>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>
