<template>
   <div>
      <v-btn v-if="showDeleteFlag" class="button" depressed small color="red">
         <v-icon>clear</v-icon>
      </v-btn>
      <v-textarea @change="update" class="textarea" v-model="item.content" @focus="setShowDeleteState(true)" @blur="setShowDeleteState(false)" hide-details solo auto-grow/>
   </div>
</template>

<script>

export default {
   components: {

   },
   props: {
      item: {
         type: Object,
         default: () => {}
      }
   },
   data() {
      return {
         showDeleteFlag: false
      };
   },
   computed: {
      
   },
   methods: {
      setShowDeleteState(state){
         if(state){
            this.showDeleteFlag = true;
         }else{
            setTimeout(() => {
               this.showDeleteFlag = false;
            }, 500);
         }
      },
      update(){
         this.$emit('update');
      }
   }
}
</script>

<style scoped>
.button {
   position: relative;
   height: 25px;
   width: 25px;
   z-index: 1;
   left: 150px;
}
.textarea{
   overflow: visible;
}
</style>