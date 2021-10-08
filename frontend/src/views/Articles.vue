<template>
  <div class="messages">
    <h1>Articles</h1>
    <div class="article">
      
      <router-link 
        v-for="message in messages"
        :key="message.id"
        class="articleBox"
        :to="{ name: 'ReadMessage', params: {id: message.id, titre: message.titre, text: message.text }}" 
      >
        <h2>{{ message.titre }}</h2>
        <div v-html="message.text"></div>

      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          id: 1,
          titre: "Hello world",
          text: "fdsbv ml ;sdfl gm! sdf gfdml; dfmls g fds"
        },
        {
          
          id: 2,
          titre: "Message numéros 2",
          text: "kgsndfkl kfd gdfk fdks gdf fdsbv ml ;sdfl gm! sdf gfdml; dfmls g fds"
        },
        {
          id: 3,
          titre: "Message numéros 3",
          text: "kgsndfkl kfd gdfk fdks gdf fdsbv ml ;sdfl gm! sdf gfdml; dfmls g fds"
        },
      ],
    }
  }
};  
</script>

<style scoped lang="css">
  .article{
    display: flex;
    width: 80%;
    border: 1px solid blue;

  }
  .articleBox{
    border: 2px solid black;
    width: 250px;
    height: 400px;
    padding: 10px;
    margin: 20px;
    text-align: left;
  }

</style>