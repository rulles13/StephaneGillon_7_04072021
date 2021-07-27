<template>
  <form class="formLog">
    <label for="email">email:</label><br>
    <input type="email" id="email" name="email" v-model="email"><br>
    <label for="password">password:</label><br>
    <input type="text" id="password" name="password" v-model="password"><br>
    <button v-on:click="signUp()">inscription</button>

  </form>
</template>

<script>
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
      console.log(this.email + this.password);
    
      // fetch
      return (this.email + this.password); 
    }
    
  } 
}

</script>

<style>

</style>