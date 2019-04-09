<template>
   <div>
      <v-btn v-if="showDeleteFlag" class="button" depressed small color="red" @click="remove">
         <v-icon>clear</v-icon>
      </v-btn>
      <v-textarea 
         @change="update"
         class="textarea"
         v-model="item.content"
         @focus="setShowDeleteState(true)"
         @blur="setShowDeleteState(false)"
         hide-details
         solo
         auto-grow
         row-height=10
      />
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
      },
      index: {
         type: Number
      }
   },
   data() {
      return {
         showDeleteFlag: false,
         text: this.item
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
      },
      remove(){
         this.$emit('remove', this.index);
         this.update();
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
   word-break: break-all;
}
</style>