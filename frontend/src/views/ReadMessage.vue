<template>
  <div class="articleBox">
    <div>
      <h1>bonjour</h1>
      <h2>{{ article }}</h2>
      <!--<img :src="article.image_link">
      <div v-html="article.writer"></div>
      -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Article',
  data() {
      return {
      article: null
    }
  },
  
    methods: {
      importOne() {
        console.log("LOG" + this.$route.params.id)
        axios.get(`/article/${this.$route.params.id}`)
        
        
        .then((response) => {
          this.article = response.data
          
          console.log(response.data);
          }, (error) => {
            console.log(error + " *article not imported*");
        });  
      }
    },
    
    mounted(){
      this.importOne()
    }
  }

  

</script>

<style>
.articleBox{
    display: flex;
    width: 20%;
    height: 400px;
    padding: 10px;
    margin: 20px;
    text-align: left;
  }

</style>