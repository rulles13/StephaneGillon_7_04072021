<template>
  <div class="articleBox">
    <div>
      <h1> {{article.text}} </h1>
      <img class="imgSolo" :src="article.image_link">
      <div v-html="article.writer"></div>  
    </div>
    <form class="comentForm">
      <input type="text" v-model="text" placeholder="commentary"/>
      <button v-on:click.prevent="createComent()">create</button>

      <div v-for="commentar in commentary" :key="commentar.id"> 
        {{ commentar.text }}
      </div>
      

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
      articleId: "",
      commentary: {text: "", writer: ""}
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
        console.log(response.data)
        this.readComents()
        }, (error) => {
          console.log(error + " coment not created");
        });  
      },

      readComents() {
        axios.get(`/coment/${this.$route.params.id}`)
        .then((response) => {
          this.commentary = response.data
          }, (error) => {
            console.log(error + " *no commentary found*")
        });
      }
    },
    
    mounted(){
      this.importOne(),
      this.readComents()
    },
  }
</script>

<style>
.imgSolo{
  object-fit: cover;
  height: 200px;
  width: 200px;
}
</style>