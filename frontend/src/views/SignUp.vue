<template>
  <form class="formLog">
    <h3>Sign up</h3>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="first_name" placeholder="First Name"/>
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="last_name" placeholder="Last Name"/>
    </div>
    <div class="form-group">
      <label>Pseudo</label>
      <input type="text" class="form-control" v-model="pseudo" placeholder="Pseudo"/>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email"/>
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password"/>
    </div>
    <button class="btn btn-success" v-on:click.prevent="signUp()">Signup</button>
  </form>

</template>

<script>
import axios from 'axios' 

export default {
  name: 'SignUp',
  data() {
    return {
      first_name: '',
      last_name: '',
      pseudo:'',
      email: '',
      password:''
      
    } 
  },
  //computed : //bouton grisé si champs vide --- secondaire !!
  methods: {  
    signUp() {
      axios.post('user/signup', {
        first_name: this.first_name,
        last_name: this.last_name,
        pseudo: this.pseudo,
        email: this.email,
        password: this.password 
      }).then((response) => {
        console.log(response.data);
        this.$router.push('/Login');
      });
    }  
  } 
}

</script>

<style>

</style>