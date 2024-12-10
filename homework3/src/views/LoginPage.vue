<template>
  <div class="signup-page"> <!-- Same class for consistent styling -->
    <form class="signup-form" @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
      </div>
      <button type="submit" class="signup-button">Login</button>
      <div v-if="message" class="error-messages">
        <p>{{ message }}</p>
      </div>
      <div class="signup-redirect">
        <p>Don’t have an account?</p>
        <button @click="goToSignup" class="signup-button">Signup</button>
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
    async login() {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });

        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem('jwt', token); // Save JWT token
          this.$router.push('/home'); // Redirect to the home page
        } else {
          const error = await response.json();
          this.message = error.message || 'Login failed. User does not exist. Please sign up.';
        }
      } catch (err) {
        this.message = 'An error occurred. Please try again later.';
      }
    },
    goToSignup() {
      this.$router.push('/signup'); // Redirect to signup page
    },
  },
};
</script>
