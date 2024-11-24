<template>
    <div class="signup-page">
      <form class="signup-form" @submit.prevent="validatePassword">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" placeholder="Password" />
        </div>
        <button type="submit" class="signup-button">Signup</button>
        <div v-if="errorMessages.length" class="error-messages">
          <p>The password is not valid for the following reasons:</p>
          <ul>
            <li v-for="(error, index) in errorMessages" :key="index">{{ error }}</li>
          </ul>
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
        errorMessages: [],
      };
    },
    methods: {
      validatePassword() {
        this.errorMessages = [];
        const pwd = this.password;
  
        if (pwd.length < 8 || pwd.length > 14) {
          this.errorMessages.push('Password must be 8–14 characters long.');
        }
        if (!/^[A-Z]/.test(pwd)) {
          this.errorMessages.push('Password must start with an uppercase letter.');
        }
        if (!/[A-Z]/.test(pwd)) {
          this.errorMessages.push('Password must include at least one uppercase letter.');
        }
        if (!/[a-z]{2,}/.test(pwd)) {
          this.errorMessages.push('Password must include at least two lowercase letters.');
        }
        if (!/\d/.test(pwd)) {
          this.errorMessages.push('Password must include at least one numeric value.');
        }
        if (!/_/.test(pwd)) {
          this.errorMessages.push('Password must include the "_" character.');
        }
  
        if (!this.errorMessages.length) {
          alert('Signup successful!');
          this.$router.push('/');
        }
      },
    },
  };
  </script>
  