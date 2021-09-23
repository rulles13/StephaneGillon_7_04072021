<template>
  <form class="formLog">
    <label for="email">email:</label><br>
    <input type="email" id="email" name="email" v-model="email"><br>
    <label for="password">password:</label><br>
    <input type="text" id="password" name="password" v-model="password"><br>
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
      axios.post('user/login',{
        email: this.email,
        password: this.password
      }).then((response) => {
        console.log(response.data);
        this.$router.push('/');
        localStorage.setItem('token', response.data.token);
        });  

    }
  }
}
</script>

<style>

</style>