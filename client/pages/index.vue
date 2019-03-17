<template>
   <div>
      <h1>ログインテスト</h1>
      <p>エラーコード: {{ errorCode }}</p>
      <p>エラーメッセージ: {{ errorMessage }}</p>
      <div>
         <v-btn @click="eventHandle">Googleでログイン</v-btn>
      </div>
   </div>
</template>

<script>
import firebase from '~/util/firebase'

export default {
   data() {
      return {
         errorCode: '',
         errorMessage: ''
      };
   },
   methods: {
      eventHandle(){
         var provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithPopup(provider);
         
      }
   }
}
</script>
