<template>
   <div id="main">
      <h1 id="top-label">ログインページ</h1>
      <span>下記ボタンよりログインしてください</span>
      <v-btn @click="eventHandle">Googleでログイン</v-btn>
   </div>
</template>

<script>
import firebase from '~/utils/firebase'
import axios from 'axios';

export default {
   data() {
      return {
      };
   },
   methods: {
      eventHandle(){
         let provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithPopup(provider).then((result) => {
            //this.$store.dispatch('setAuth', { uid: result.user.uid, userName: result.user.displayName});
            sessionStorage.auth = JSON.stringify({ uid: result.user.uid, userName: result.user.displayName });
            this.$router.push('/mypage');
            this.$toasted.success('🎉🎉ログインしました！！🎉🎉');
         });
      }
   },
   asyncData(){
      axios.get('https://asia-northeast1-test-dgl-firebase.cloudfunctions.net', {
         params: {
            cost: 100
         }
      }).then(res => {
         console.log(res);
      });
   }
}
</script>

<style scoped>
#main {
   display: flex;
   flex-direction: column;
   align-items: center;
}

#top-label {
   margin-bottom: 30px;
}
</style>