<template>
  <div class="messages">
    <h1>Articles</h1>
    <span v-if="isLog()"><router-link to="/create">Create</router-link></span>
    <div class="article">
      
      <router-link 
        v-for="article in articles"
        :key="article.id"
        class="articleBox"
        :to="{ name: 'readArticle', params: {id: article.id}}" 
      >
        <h2>{{ article.titre }}</h2>
        <img :src="article.image_link" class="imageBox">
        <div>{{article.text}}</div>
        <div>Cliquez pour voir les commentaires</div>
        <div class="deleteBox" v-if="isWriter(article.userId)">
          <img class="iconPNG" src="../icons/delete.png" alt="recycle" v-on:click.prevent="sup(article.id)">
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Articles',
  data() {
        return{
      articles: null
    }
  },
  
    methods: {
      importAll() {
        axios.get('/article/findAll')
        .then((response) => {
          this.articles = response.data
          }, (error) => {
            console.log(error + " *articles not imported*");
        });  
      },

      sup(id) {
        axios.delete("/article/" + id)
        .then((response) => {
          console.log(response)
          this.importAll()
          }, (error) => {
            console.log(error + " *article not deleted*")
        });
      },

      isLog() {
      return localStorage.getItem('token');
      },

      isWriter(writer) {
        if (localStorage.getItem("userId") == writer || localStorage.getItem("role") == "admin")
          {return true;}
      },

    },
    mounted(){
      this.importAll()
    }
  }
  
</script>

<style scoped lang="css">
    .article{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    justify-content: center;

  }
  .articleBox{
    display: block;
    background-color: white;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    text-align: center;
    text-decoration: none;
    margin: 20px;
    
  }
  .imageBox{
    display: flex;
    width: 100%;
    height:200px;

  }

  .deleteBox{
    display: flex;
    align-items: center;
    width: 95%;
    height: 30px;
    justify-content: flex-end;
  }
  .iconSVG{
    display: flex;
    width: 25px;
    height: 25px;
    background-color: cyan;
    margin: 10px;
  }

@media all and (min-width: 500px) {
  
  
  .articleBox{
    width: 300px;
    margin: auto;
    align-content: center;
    margin: 20px;
  }
  .article{  
    width: 100%;
    margin: auto;
    align-content: center;
  }
}

</style>