<template>
  <div class="info-container">
    <h1>My Projects</h1>
    <p style="text-align: justify">
      The Projects as of now consists of repurposed assessment and training
      materials. These were mainly just to hone/sharpen my current skills. If
      anything is lacking, feel free to provide suggestions through my email me
      or GitHub that you can find
      <router-link to="/contact">here</router-link>. Any suggestion is welcomed
      and will be taken into consideration!
    </p>
    <p>Here are some things I'm currently working on:</p>

    <router-link to="/posts" class="btn">
      <div class="highlight-box project">
        <h3>Post List [Vite-Vue]</h3>
        <p>
          A Project created using React, forked into Vue. Used for exploring the
          differences between the two frameworks and understanding how either
          work.
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
  </div>
</template>

<script>
  export default {
    name: 'Projects',
  };
</script>
