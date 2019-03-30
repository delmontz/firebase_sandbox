<template>
   <div>
      <v-sheet class="sheet" color="green lighten-5">
         <h2>{{ listName }}</h2>
         <Draggable :list="list" group="all" ghost-class="ghost" class="area">
            <v-card class="card" v-for="(el, index) in list" :key="index">{{ el.title }} {{ el.contents}}</v-card>
         </Draggable>
      </v-sheet>
   </div>
</template>

<script>
import Draggable from 'vuedraggable';

export default {
   components: {
      Draggable
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