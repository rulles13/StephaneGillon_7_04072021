<template>
  <div class="messages">
    <h1>Articles</h1>
    <router-link to="/create">Create</router-link>
    <div class="article">
      
      <router-link 
        v-for="article in articles"
        :key="article.id"
        class="articleBox"
        :to="{ name: 'ReadMessage', params: {id: article.id}}" 
      >
        <h2>{{ article.titre }}</h2>
        <img :src="article.image_link" class="imageBox">
        <div v-text="`By ${article.user.first_name} ${article.user.last_name}`"></div> 
        <div class="deleteBox">
          <img class="iconSVG" src="../icons/trash-alt-solid.svg" alt="recycle">
          <button v-on:click.prevent="sup(article.id)">delete</button>
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
          
          console.log(response.data);
          }, (error) => {
            console.log(error + " *articles not imported*");
        });  
      },

      sup(id) {
        
        axios.delete("/article/" + id)
        //to do : delete image
        .then((response) => {
          console.log(response)
          this.importAll()
          }, (error) => {
            console.log(error + " *article not deleted*")
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
    width: 100%;
    margin: auto;
    align-content: center;

  }
  .articleBox{
    display: block;
    background-color: white;
    border-radius: 10px;
    width: 100%;
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
    width: 150px;
    height: 30px;
  }
  .iconSVG{
    display: flex;
    width: 25px;
    height: 25px;
    background-color: cyan;
    margin: 10px;
  }

@media all and (min-width: 600px) {
  .article{
    
    width: 90%;
    margin: auto;
    align-content: center;

  }
  
  .articleBox{
    width: 300px;
    margin: auto;
    align-content: center;
    margin: 20px;
  }
  
}

</style>