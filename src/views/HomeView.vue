<template >
    <div>
    <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-5 ">
      <MealItem v-for="meal of meals" :key="meal.idIngredient" :meal="meal"/>
    </div>
   </div>
</template>
<script>
import axiosClient from '../axiosClient';
import { onMounted,ref } from 'vue';
import MealItem from '../components/MealItem.vue';
export default {
    setup() {
        const meals = ref([]);
        onMounted(async () => {
      for (let i = 0; i < 10; i++) {
        axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
        return { meals };
    },
    components: { MealItem }
}
</script>
<style>
    
</style>