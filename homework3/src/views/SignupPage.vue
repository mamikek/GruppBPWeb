<template>
  <div class="signup-page">
    <form class="signup-form" @submit.prevent="signup">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" placeholder="Password" required />
      </div>
      <button type="submit" class="signup-button">Signup</button>
      <div v-if="message" class="error-message">
        <p>{{ message }}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async signup() {
      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });

        if (response.ok) {
          this.message = 'Signup successful! Redirecting to login page...';
          setTimeout(() => {
            this.$router.push('/'); // Redirect to login page
          }, 1500);
        } else {
          const error = await response.json();
          this.message = error.message || 'Signup failed. Please try again.';
        }
      } catch (err) {
        this.message = 'An error occurred. Please try again later.';
      }
    },
  },
};
</script>
