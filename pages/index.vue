<template>
   <div id="main">
      <h1 id="top-label">ログインページ</h1>
      <span>下記ボタンよりログインしてください</span>
      <v-btn @click="eventHandle" color="orange">Googleでログイン</v-btn>
      <v-progress-circular
         v-if="isLoad"
         size="200"
         color="primary"
         indeterminate
         class="load"
      >
      読み込み中〜
      </v-progress-circular>
   </div>
</template>

<script>
import firebase from '~/utils/firebase'

export default {
   data() {
      return {
         isLoad: false
      };
   },
   methods: {
      eventHandle(){
         let provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithPopup(provider).then((result) => {
            //this.$store.dispatch('setAuth', { uid: result.user.uid, userName: result.user.displayName});
            sessionStorage.auth = JSON.stringify({ uid: result.user.uid, userName: result.user.displayName });
            this.isLoad = true;
            this.$router.push('/mypage');
            this.$toasted.success('🎉🎉ログインしました！！🎉🎉');
         });
      }
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

.load {
   position: absolute;
   top: 0px;
   right: 0px;
   bottom: 0px;
   left: 0px;
   margin: auto;
   font-size: 2rem;
}
</style>