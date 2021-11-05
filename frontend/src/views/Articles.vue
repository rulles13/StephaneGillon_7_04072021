<template>
  <div class="messages">
    <h1>Articles</h1>
    
    <div class="article">
      
      <router-link 
        v-for="article in articles"
        :key="article.id"
        class="articleBox"
        :to="{ name: 'ReadMessage', params: {id: article.id}}" 
      >
        <h2>{{ article.text }}</h2>
        <img :src="article.image_link" class="imageBox">
        <div v-html="article.writer"></div>

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
          
          console.log(response.data);
          }, (error) => {
            console.log(error + " *articles not imported*");
        });  
      }
    },
    mounted(){
      this.importAll()
    }
  }
  
</script>

<style scoped lang="css">
  h1{
    height: 1em;
    size: 16px;
  }
  h2{
    size: 14px;
  }
  .article{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    border: 1px solid blue;
    margin: auto;
    align-content: center;

  }
  .articleBox{
    display: block;
    background-color: white;
    border-radius: 10px;
    width: 20%;
    height: 400px;
    text-align: center;
  }
  .imageBox{
    display: flex;
    width: 100%;
    height:200px;

  }

</style>