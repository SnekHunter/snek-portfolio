<template>
  <div class="info-container project">
    <h1>My Projects</h1>
    <p style="text-align: justify">
      The projects listed here are adapted from assessment and training
      materials, intended primarily for skill development and practice. If you
      notice issues or have specific suggestions for improvement, please reach
      out via email or GitHub; contact details are provided
      <router-link to="/contact">here</router-link>. I review all substantive
      feedback.
    </p>
    <p>Here are some projects I've been working on:</p>

    <div class="project-list">
      <router-link to="/posts" class="btn">
        <div class="highlight-box project">
          <h3>Post List [Vite-Vue]</h3>
          <p>
            A Project created using React, forked into Vue. Used for exploring
            the differences between the two frameworks and understanding how
            either work.
          </p>
        </div>
      </router-link>
      <router-link to="#" class="btn">
        <div class="highlight-box project">
          <h3>Todo List App</h3>
          <p>A simple app to keep track of tasks (coming soon!).</p>
        </div>
      </router-link>
      <router-link to="#" class="btn">
        <div class="highlight-box project">
          <h3>User List App</h3>
          <p>A simple app to keep track of users (coming soon!).</p>
        </div>
      </router-link>
      <router-link to="#" class="btn">
        <div class="highlight-box project">
          <h3>Future Plans</h3>
          <p>
            Planned projects for the future will appear and replace this
            template.
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Projects',
  };
</script>
