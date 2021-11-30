<template>
  <div v-if="isLog()" class="articleBox">
    <div class="container">
      <h1> {{article.titre}} </h1>
      <img class="imgSolo" :src="article.image_link">
      <div class="articleText"> {{article.text}} </div>  
    </div>
    <form class="comentForm">
      <input type="text" v-model="textComent" placeholder="commentary"/>
      <button v-on:click.prevent="createComent()">create</button>
    </form>
    <div class="commentar">
      <div  v-for="commentar in commentary" :key="commentar.id">
        <div class="comText">
          <div> {{ commentar.textComent }} </div>
          <span v-if="isWriter(commentar.userId)">
            <img class="iconPNG" src="../icons/delete.png" alt="delete coment" v-on:click.prevent="deleteComent(commentar.id)">
          </span>
        </div>
      </div>
    </div> 
  </div>
  <div v-else>
    <span><h1>réservé aux membres !</h1></span>
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
          'userId': localStorage.getItem('userId'),
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

      deleteComent(id) {
        axios.delete("/coment/" + id)
        .then((response) => {
          console.log(response)
          this.readComents()
          }, (error) => {
            console.log(error + " *coment not deleted*")
        });
      },

      readComents() {
        axios.get(`/coment/${this.$route.params.id}`)
        .then((response) => {
          this.commentary = response.data
          }, (error) => {
            console.log(error + " *no commentary found*")
        });
      },

      isWriter(writer) {
        if (localStorage.getItem("userId") == writer || localStorage.getItem("role") == "admin")
          {return true;}
      },

      isLog() {
      return localStorage.getItem('token');
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
  margin: auto;
  align-self: center;
  width: 300px;
}

.iconPNG{
  width: 30px;
  height: 30px;
  margin-left: 10px;
}
.imgSolo{
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.commentar{
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  text-align: right;
  
}
.articleText{
  margin: 10px 0;
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