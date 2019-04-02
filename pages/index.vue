<template>
   <div id="main">
      <h1 id="top-label">ログインページ</h1>
      <span>下記ボタンよりログインしてください</span>
      <v-btn @click="eventHandle">Googleでログイン</v-btn>
   </div>
</template>

<script>
import firebase from '~/utils/firebase'

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
   mounted(){
      const callTest = firebase.app().functions('asia-northeast1').httpsCallable('callTest');
      callTest().then(function(result) {
         //var sanitizedMessage = result.data.text;
         console.log(result);
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