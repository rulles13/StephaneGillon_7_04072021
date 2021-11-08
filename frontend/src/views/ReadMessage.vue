<template>
  <div class="articleBox">
    <div>
      <h1> {{article.text}} </h1>
      <img :src="article.image_link">
      <div v-html="article.writer"></div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Article',
  data() {
      return {
      article: {text: "", image_link: "", writer: ""}
    }
  },
  
    methods: {
      importOne() {
        axios.get(`/article/${this.$route.params.id}`)
        .then((response) => {
          this.article = response.data
          }, (error) => {
            console.log(error + " *article not imported*")
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