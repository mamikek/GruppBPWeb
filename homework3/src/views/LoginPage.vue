<template>
    <div class="signup-page"> <!--it seems fine to just use the old signup page styling-->
        <!--figure out a way to verify if user exists in database, and logic for dealing with JWT-s -->
      <form class="login-form" >
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" placeholder="Password" />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </template>
  
  <script>

  </script>
  