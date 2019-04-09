<template>
   <div class="app">
      <h1 class="top-label">{{ auth.userName }}のToDoリスト</h1>
      <div class="main">
         <TodoColumn @update="updateTodoList" :list="rsvTodoList.todo" list-name="ToDo" group-name="all"/>
         <TodoColumn @update="updateTodoList" :list="rsvTodoList.wip" list-name="進行中" group-name="all"/>
         <TodoColumn @update="updateTodoList" :list="rsvTodoList.done" list-name="完了" group-name="all"/>
      </div>
   </div>
</template>

<script>
import firebase from '~/utils/firebase';
import cloneDeep from'lodash.clonedeep'
import { mapState } from 'vuex';

import Draggable from 'vuedraggable';
import TodoColumn from '~/components/TodoColumn'

export default {
   components: {
      Draggable,
      TodoColumn
   },
   data() {
      return {
         rsvTodoList: {}
      };
   },
   computed: {
      ...mapState(['auth','todoList'])
   },
   methods: {
      updateTodoList(){
         this.$store.dispatch('setTodoList', cloneDeep(this.rsvTodoList));
      }
   },
   beforeMount() {
      this.rsvTodoList = cloneDeep(this.todoList);
   },
   async fetch({ store }) {
      // const api = await firebase.app().functions('asia-northeast1').httpsCallable('getData');
      // api().then(val => {
      //    if(val){
      //       store.dispatch('setTodoList', val.data);
      //    }
      // });

      const val = await firebase.app().functions('asia-northeast1').httpsCallable('getData')();
      if(val.data){
         store.dispatch('setTodoList', val.data);
      }else{
         val.data = {
            done: [],
            wip: [],
            todo: []
         }
         store.dispatch('setTodoList', val.data);
      }
   }
}
</script>

<style scoped>
.app {
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: cornflowerblue;
   width: 100%;
   height: 100%;
}

.top-label {
   margin-bottom: 30px;
}

.main {
   display: flex;
}

.list {
   margin: 10px;
}
</style>