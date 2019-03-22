<template>
   <div>
      <h1>ストアカウントアップテスト</h1>
      <p>カウント数: {{ counter }}</p>
      <div>
         <v-btn @click="eventHandle">カウントアップ</v-btn>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
   computed: {
      ...mapState(['counter'])
   },
   methods: {
      eventHandle(){
         this.$store.dispatch('actIncrement', { amount: 1 });
      }
   }
}
</script>
