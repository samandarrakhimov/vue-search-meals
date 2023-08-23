<template>
  <div>
    <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for</h1>
  </div>
  <div class="px-8 grid grid-cols-1 md:grid-cols-3 gap-5 ">
    <div v-for="meal of meals" :key="meal.idMeal" 
    class="bg-white shadow-md rounded-md w-65  mt-5"> 
        <router-link :to="{name:'mealDetails',params:{id: meal.idMeal}}" >
        <div class="h-60">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-h-full w-full rounded-t-xl" >
        </div>
       </router-link>
        <div class="p-3">
          <h3 class=" font-bold">
         {{ meal.strMeal }}
            </h3>
            <p class="mb-4">Lorem, ipsum dolor sianimi voluptatibus aperiam consequatur repudiandae aspernatur!</p>
        <div class="flex items-center justify-between">
           <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
           <router-link to="/" class="px-3 py-2 border-2
            border-purple-600
            hover:bg-purple-600
            hover:text-white 
               rounded transition-colors">
            view
           </router-link>
        </div>
        </div>
        </div>
  </div>
  </div>
</template>
<script>
import { computed, onMounted,} from 'vue';
import  store  from '../store';
import { useRoute } from 'vue-router';
import YoutubeButton from '../components/YoutubeButton.vue';
export default {
    setup() {
        const route = useRoute();
        const meals = computed(() => store.state.meals.mealsIngredient);
        onMounted(() => {
            store.dispatch('mealsIngredients', route.params.ingredient);
        });
        return { meals };
    },
    components: { YoutubeButton }
}
</script>
<style>
    
</style>