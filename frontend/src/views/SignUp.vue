<template>
  <form class="formLog">
    <label for="email">email:</label><br>
    <input type="email" id="email" name="email" v-model="email"><br>
    <label for="password">password:</label><br>
    <input type="text" id="password" name="password" v-model="password"><br>
    <button v-on:click.prevent="signUp()">inscription</button>

  </form>
</template>

<script>
import axios from 'axios' 

export default {
  name: 'SignUp',
  data() {
    return {
      email: "",
      password:""
      
    } 
  },
  //computed : //bouton grisé si champs vide --- secondaire !!
  methods: {
    
    signUp() {
      axios.post('user/signup', {
        email: this.email,
        password: this.password
      }).then((response) => {
        console.log(response.data);
        this.$router.push('/');
      });
    }
    
  } 
}

</script>

<style>

</style>