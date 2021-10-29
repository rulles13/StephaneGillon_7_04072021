<template>
  <div class="articleBox">
    <h2>{{ article.text }}</h2>
    <img :src="article.image_link">
    <div v-html="article.writer"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Article',
  data() {
      return{
      article: null
    }
  },
  
    methods: {
      importOne() {
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

</style>