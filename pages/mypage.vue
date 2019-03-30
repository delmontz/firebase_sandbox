<template>
   <div id="app">
      <h1 id="top-label">{{ auth.userName }}のToDoリスト</h1>
      <div id="main">
         <div class="list">
            <h2>リスト1</h2>
            <Draggable :list="list1" group="all">
               <div v-for="(el, index) in list1" :key="el.id">{{ index }} {{ el.name }}</div>
            </Draggable>
         </div>
         <div class="list">
            <h2>リスト2</h2>
            <Draggable :list="list2" group="all">
               <div v-for="(el, index) in list2" :key="el.id">{{ index }} {{ el.name }}</div>
            </Draggable>
         </div>
         <TodoColumn :list="list1" />
      </div>
   </div>
</template>

<script>
import firebase from '~/utils/firebase'
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
         list1: [
            { name: "John", id: 1 },
            { name: "Joao", id: 2 },
            { name: "Jean", id: 3 },
            { name: "Gerard", id: 4 }
         ],
         list2: [
            { name: "Juan", id: 5 },
            { name: "Edgard", id: 6 },
            { name: "Johnson", id: 7 }
         ]
      };
   },
   computed: {
      ...mapState(['auth'])
   },
   methods: {
   }
}
</script>

<style scoped>
#app {
   display: flex;
   flex-direction: column;
   align-items: center;
}

#top-label {
   margin-bottom: 30px;
}

#main {
   display: flex;
}

.list {
   margin: 10px;
}
</style>