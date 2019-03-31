<template>
   <div>
      <v-sheet class="sheet" color="green lighten-5">
         <h2>{{ listName }}</h2>
         <Draggable :list="list" group="all" ghost-class="ghost" class="area">
            <TodoCard v-for="(el, index) in list" :item="el" :key="index" class="card"/>
         </Draggable>
         <v-btn fab dark small color="indigo">
            <v-icon dark>add</v-icon>
         </v-btn>
      </v-sheet>
   </div>
</template>

<script>
import Draggable from 'vuedraggable';
import TodoCard from '~/components/TodoCard'

export default {
   components: {
      Draggable,
      TodoCard
   },
   props: {
      list: {
         type: Array,
         default: () => []
      },
      listName: {
         type: String,
         default: '未定'
      },
      groupName: {
         type: String,
         default: 'default'
      }
   },
   data() {
      return {
      };
   },
   computed: {
   },
   methods: {
   }
}
</script>

<style scoped>
.sheet {
   padding: 5px;
   margin: 0 5px;
   width: 270px;
}

.card {
   margin: 5px;
   min-height: 50px;
   width: 250px;
   background-color: whitesmoke;
}

.ghost {
   visibility : hidden;
}

.area {
   display: flex;
   flex-direction: column;
   min-height: 20px;
}
</style>