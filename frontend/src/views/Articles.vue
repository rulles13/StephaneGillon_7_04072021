<template>
  <div class="messages">
    <h1>Articles</h1>
    
    <div class="article">
      
      <router-link 
        v-for="article in articles"
        :key="article.id"
        class="articleBox"
        :to="{ name: 'ReadMessage', params: {id: article.id, text: article.text, writer: article.writer }}" 
      >
        <h2>{{ article.text }}</h2>
        <img :src="article.image_link">
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
  .article{
    display: flex;
    flex-direction: column;
    width: 80%;
    border: 1px solid blue;
    margin: auto;

  }
  .articleBox{
    display: flex;
    border: 2px solid black;
    width: 20%;
    height: 400px;
    padding: 10px;
    margin: 20px;
    text-align: left;
  }
  .imageBox{
    display: flex;
    height: 50%;

  }

</style>