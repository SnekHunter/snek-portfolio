<template>
  <div class="info-container">
    <h1>My Projects</h1>
    <p>Here are some things I'm working on:</p>

    <router-link to="/posts" class="btn">
      <div class="highlight-box">
        <h3>Post List [Vite-Vue]</h3>
        <p>
          A Project created using React, forked into Vue to explore the
          differences between the two frameworks.
        </p>
      </div>
    </router-link>
    <router-link>
      <div class="highlight-box">
        <h3>Todo List App</h3>
        <p>A simple app to keep track of tasks (coming soon!).</p>
      </div>
    </router-link>
    <router-link>
      <div class="highlight-box">
        <h3>User List App</h3>
        <p>A simple app to keep track of tasks (coming soon!).</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>
