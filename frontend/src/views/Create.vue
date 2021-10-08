<template>
  <form class="formLog">
    <h1>Write a new message</h1>
    <label for="text">text:</label><br>
    <input type="text" id="text" name="text" v-model="text"><br>
    <label for="image_link">image_link:</label><br>
    <input type="text" id="image_link" name="image_link" v-model="image_link"><br>
    <br>
    <button v-on:click.prevent="create()">create</button>

  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Create',
  data() {
    return {
      text: '',
      image_link: '',
      writer: ''
    }
  },
  methods: {
    create() {
      axios.post('/article/create',{
        text: this.text,
        image_link: this.image_link,
        writer: localStorage.getItem('idUser')
        //header voir doc Axios
      }).then((response) => {
        console.log(response.data);
        this.$router.push('/articles');
        }, (error) => {
          console.log(error + " article not created");
      });  
    }
  }
}
</script>

<style>

</style>