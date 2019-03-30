<template>
   <div class="app">
      <h1 class="top-label">{{ auth.userName }}のToDoリスト</h1>
      <div class="main">
         <TodoColumn :list="list1" list-name="ToDo" group-name="all"/>
         <TodoColumn :list="list2" list-name="進行中" group-name="all"/>
         <TodoColumn :list="list3" list-name="完了" group-name="all"/>
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
            { title: 'スズキ', content: 'ほげだだほげ' },
            { title: "佐藤", content: 'sあいうえだｓお' },
         ],
         list2: [
            { title: '田中', content: 'ほげほだｓｄげ' },
            { title: "アイオダイン", content: 'sあいだｓｄうえお' },
         ],
         list3: [
            { title: '樹種', content: 'ほげだｄほげ' },
            { title: "ｈしう", content: 'sあいだｄさうえお' },
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