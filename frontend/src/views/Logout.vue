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
    <button v-on:click.prevent="logout()">logout</button>

  </form>
</template>

<script>
//import axios from 'axios'

export default {
  name: 'Logout',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('idUser');
      localStorage.removeItem('role');
      window.location.reload();
    },
    /*logout() {
      axios.post('/user/login', {
        email: this.email,
        password: this.password
      }).then((response) => {
        console.log(response.data);
        this.$router.push('/');
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('idUser', response.data.userId);
        localStorage.setItem('role', response.data.userRole);
        axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
        }, (error) => {
          console.log(error + " error Axios.post");
      });  
    }*/
  }
}
</script>

<style>

</style>