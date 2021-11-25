<template>
  <form class="formLog">
    
    <br><br><button v-on:click.prevent="logout()">log off</button> <br><br>
    <button v-on:click.prevent="unsuscribe()">Se désinscrire</button> <br><br>
    <div>Attention toute désinscription est définitive et supprimera vos identifiants, articles et commentaires !</div>

  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Logout',
  data() {
    return {
      email: '',
      password: '',
      user_id: this.$userId,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('idUser');
      localStorage.removeItem('role');
      this.$router.push('/');
    },

    unsuscribe() {
      console.log("l'utilisateur est " + localStorage.idUser);
      axios.delete("/user/" + localStorage.idUser)
      .then((response) => {
        window.alert("Vous avez disparu !")
        this.logout()
        console.log(response)
        }, (error) => {
          console.log(error + " *user not deleted*")
      });
    }
   
  }
}
</script>

<style>

</style>