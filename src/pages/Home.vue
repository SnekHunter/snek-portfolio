<script setup>
  import logo from '@/assets/portfolio-logo.png';
  import AboutList from '../components/AboutList.vue';
</script>
<template>
  <div class="home">
    <div class="info-container">
      <div class="home-box">
        <h1>Welcome to my Portfolio!</h1>
        <div class="img-container">
          <img src="../assets/images/thumbs-up.png" alt="" />
        </div>
        <div class="content">
          <p>
            Use the navigation above to explore different sections of my site.
            Each link loads new content instantly without requiring a full page
            reload.
          </p>
          <div class="highlight-box">
            <p>
              Hi there! This site was created using Vue.js, a modern JavaScript
              framework for building interactive web interfaces.
            </p>
          </div>
          <p>
            Unlike traditional websites, which reload the entire page for each
            navigation, this site updates content dynamically within the
            browser. This typically provides a smoother and more responsive user
            experience, especially for navigating between sections.
          </p>
          <div class="highlight-box">
            <p>
              <strong>Note:</strong> The initial loading time may vary depending
              on your network speed, since all required resources are loaded up
              front. Afterward, navigating between sections is handled locally,
              minimizing server requests.
            </p>
          </div>
          <p>
            For example, when you click on “Projects” or “Contact,” only the
            relevant content changes—there’s no need to wait for the entire site
            to reload. This approach, called client-side routing, is common in
            single-page applications.
          </p>
          <p>
            If you encounter any display issues or have suggestions for
            improving site navigation, feel free to send feedback via the
            contact page.
          </p>
        </div>
      </div>
    </div>

    <div class="info-container">
      <div class="about-box">
        <div class="content">
          <h1>About Me</h1>
          <p>
            I'm am a Comp Sci & Cyber Security graduate currently fousing on
            learn web development using React, Vue and many more to come. I'm
            excited to explore more about coding with the current programming
            landscape and so I'll be using this portfolio to showcase my
            developments!
          </p>
          <AboutList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>
