<template>
  <div class="articleBox">
    <div class="container">
      <h1> {{article.titre}} </h1>
      <img class="imgSolo" :src="article.image_link">
      <div class="articleText"> {{article.text}} </div>
      <div v-html="article.userId"></div>  
    </div>
    <form class="comentForm">
      <input type="text" v-model="textComent" placeholder="commentary"/>
      <button v-on:click.prevent="createComent()">create</button>
    </form>
    <div class="commentar">
      <div  v-for="commentar in commentary" :key="commentar.id">
        <div class="comText">
          <div> {{ commentar.textComent }} </div>
          <img class="iconPNG" src="../icons/delete.png" alt="delete coment">
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Article',
  data() {
    return {
    article: {titre:"", text: "", image_link: "", userId: "", id: ""},
    userId: "",
    textComent: "",
    articleId: "",
    commentary: {}
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
          'userId': localStorage.getItem('idUser'),
          'textComent': this.textComent,
          'articleId': this.$route.params.id
        }).then((body) => {
        console.log(body)
        this.readComents()
        this.textComent=""
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
.container{
  width: 300px;
}

.iconPNG{
  width: 25px;
  height: 25px;
  margin-left: 10px;
}
.imgSolo{
  object-fit: cover;
  height: 300px;
  width: 300px;
}
.commentar{
  display: inline-flex;
  flex-direction: column;
  text-align: right;
  padding: 10px;
  margin: 10px;
  
}
.comText{
  display: inline-flex;
  align-items: center;
  background-color: cadetblue;
  border-radius: 10px;
  margin: 10px 0 0 0;
  padding: 5px 10px;
  
  
}
</style>