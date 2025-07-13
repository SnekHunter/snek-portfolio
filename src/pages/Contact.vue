<template>
  <div class="contact">
    <div class="info-container">
      <h1>Contact Me</h1>
      <p>
        Want to contact me or check out my GitHub to look at my personal
        prjects? You can do so using these:
      </p>

      <div class="highlight-box">
        <p><strong>Email:</strong> qawiem.work.email@gmail.com</p>
        <p>
          <strong>GitHub:</strong>
          <a href="https://github.com/SnekHunter">
            https://github.com/SnekHunter</a
          >
        </p>
      </div>

      <h2>Send me a message:</h2>
      <form @submit.prevent="sendMessage">
        <p>
          <label>Your Name:</label><br />
          <input
            type="text"
            v-model="name"
            style="width: 100%; padding: 8px; margin-top: 5px"
          />
        </p>
        <p>
          <label>Your Message:</label><br />
          <textarea
            v-model="message"
            style="width: 100%; height: 100px; padding: 8px; margin-top: 5px"
          ></textarea>
        </p>
        <button
          class="contact-btn"
          type="submit"
          style="
            background: #4caf50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
          "
        >
          Send Message
        </button>
      </form>

      <div v-if="sent" class="highlight-box" style="margin-top: 20px">
        <p>
          ✅ Thanks for your message! (This is just a demo, so it wasn't
          actually sent.)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
  };
</script>
