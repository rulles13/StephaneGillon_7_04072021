<template>
  <div class="articleBox">
    <div>
      <h1> {{article.text}} </h1>
      <img :src="article.image_link">
      <div v-html="article.writer"></div>  
    </div>
    <form class="comentForm">
      <input type="text" v-model="text" placeholder="commentary"/>
      <button v-on:click.prevent="createComent()">create</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Article',
  data() {
      return {
      article: {text: "", image_link: "", writer: "", id: ""},
      text: "",
      writer: "",
      articleId: ""
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
      },

      createComent() {
        axios.post('/coment/create', {
          text: this.text, 
          writer: localStorage.getItem('idUser'),
          articleId: this.$route.params.id
        }).then((response) => {
        console.log(response.data);
        //this.importOne();
        }, (error) => {
          console.log(error + " coment not created");
        });  
      }
/*
      readComents() {

      } */
    },
    
    mounted(){
      this.importOne()
    },
  }
</script>

<style>
</style>