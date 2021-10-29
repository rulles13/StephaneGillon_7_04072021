<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <div @click="logout()">Logout</div> |
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/articles">Articles</router-link> 
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
    logout() {
      localStorage.removeItem('token');
      window.location.reload();
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
  body {
    background: #1c8ef9;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: 'fira Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, label, span {
    font-weight: 500;
    font-family: 'Indie Flower', cursive;
  }
  body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
  }
  #app{
    text-align: center;
  }
  .navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
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
