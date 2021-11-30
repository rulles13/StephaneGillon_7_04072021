<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <span v-if="isLog()"><router-link to="/articles">Articles</router-link> | </span>
      <span v-if="isLog()"><router-link to="/logout">Logout</router-link></span>
      <span v-if="!isLog()"><router-link to="/login">Login</router-link> | </span>
      <span v-if="!isLog()"><router-link to="/signup">Sign Up</router-link></span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
            
    }
  },
  methods: {
    isLog() {
      return localStorage.getItem('token');
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
  *{
    box-sizing: border-box;
  }

  span {
    font-weight: 400;
    font-family: 'fira Sans', sans-serif;
    color: white;
  }
  
  body {
    background: #091f43;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: 'fira Sans', sans-serif;
    color: white;
  }
  h1, h2, h3, h4, h5, h6, label{
    font-weight: 500;
    font-family: 'Indie Flower', cursive;
    color: #d1515a;
  }
  h1{
    margin-top: 0.5em;
    size: 1em;
    height: 1.4em;
  }
  h2{
    margin-top: 0.4em;
    size: 0.9em;
    height: 1.2em;
  }
  body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }
  #app{
    text-align: center;
  }
  .auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }
  .auth-inner{
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 30px;
  }
  .formLog{
    width: 50%;
    margin: auto;
  }
</style>
