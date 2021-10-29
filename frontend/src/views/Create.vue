<template>
  <form class="formLog">
    <h1>Write a new message</h1>
    <label for="text">text:</label><br>
    <input type="text" id="text" name="text" v-model="newPost.text"><br>
    <label for="image">image:</label><br>
    <input type="file" @change="setFile">
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
      newPost:{
        text: '',
        image_link: '',
        writer: ''
      },
      selectedFile: null,
    }
  },

  methods: {
    setFile(event) {
     this.selectedFile = event.target.files[0]
     console.log(event.target.files[0]);
    },
    
    create() {
      const formData = new FormData();
       formData.append("image", this.selectedFile);
       formData.append("image_link", this.selectedFile.name);
       formData.append("text", this.newPost.text);
       formData.append("writer", localStorage.getItem('idUser'));

      const config = {
        headers: {
        "content-type": "multipart/form-data"
        }
      };
      console.log(formData);
      console.log(this.selectedFile);
      axios.post('/article/create',formData,config)
      .then((response) => {
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