<script setup>
import { ref } from "vue";
import logo from "@/assets/portfolio-logo.png";

const open = ref(false);
</script>
<template>
  <div class="main-container">
    <nav>
      <router-link to="/" class="logo-link">
        <img :src="logo" alt="My Logo" class="logo" />
      </router-link>

      <!-- Burger menu for responsive design -->
      <button class="menu-toggle" @click="open = !open" aria-label="Toggle menu">
        <img src="@/assets/burger-menu.png" alt="dropdown-menu" />
      </button>

      <div :class="['nav-links', { open }]">
        <router-link @click="open = false" to="/">Home Page</router-link>
        <router-link @click="open = false" to="/projects">Projects</router-link>
        <router-link @click="open = false" to="/about">About</router-link>
        <router-link @click="open = false" to="/contact">Contact</router-link>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
