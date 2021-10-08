<template>
  <form class="formLog">
    <div class="form-group">
      <label for="email">email:</label><br>
      <input type="email" id="email" name="email" v-model="email"><br>
    </div>
    <div class="form-group">
      <label for="password">password:</label><br>
      <input type="password" id="password" name="password" v-model="password"><br>
    </div>
    <button v-on:click.prevent="login()">login</button>

  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.post('/user/login', {
        email: this.email,
        password: this.password
      }).then((response) => {
        console.log(response.data);
        this.$router.push('/');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('idUser', response.data.userId);
        localStorage.setItem('role', response.data.userRole);
        }, (error) => {
          console.log(error + " error Axios.post");
      });  
    }
  }
}
</script>

<style>

</style>