<template>
    <div>
    <div class="flex gap-3 justify-center mt-2 mb-3">
      <router-link :to="{name:'byLetter', params: {letter}}" 
      v-for="letter of letters" :key="letter"
      class="font-bold text-2xl">
     {{ letter }}
    </router-link>
     </div> 
      <div class="px-8 grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div v-if="isLoading" class="font-semibold text-2xl text-green-300 ml-10 w-full h-full">
          Loading...
        </div>
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
import { computed, onMounted, watch } from 'vue';
import  store  from '../store';
import { useRoute } from 'vue-router';
import { mapState } from 'vuex';

export default {
  setup(){
    const letters = "ABCDEFGYIJKLMN".split("")
    const route = useRoute()
    watch(route, () => {
      store.dispatch('mealsLetter',route.params.letter) 
    })
    onMounted( () => {
      store.dispatch('mealsLetter',route.params.letter)
    })
    return {letters}
  },
  computed:{
    ...mapState({
      meals: state => state.meals.mealsLetter ,
      isLoading : state => state.meals.isLoading
    })
  }
}
</script>
<style>
    
</style>