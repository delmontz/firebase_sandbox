<template>
   <div class="list">
      <h2>{{ listName }}</h2>
      <Draggable :list="list" group="all">
         <div v-for="(el, index) in list" :key="el.id">{{ index }} {{ el.name }}</div>
      </Draggable>
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
      group: {
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
</style>