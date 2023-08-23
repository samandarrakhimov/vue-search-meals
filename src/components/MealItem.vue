<template >
    <div class="bg-white shadow-md rounded-md"> 
        <router-link :to="{name:'mealDetails',params:{id: meal.idMeal}}" >
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="h-48 w-full rounded-t-xl" >
       </router-link>
        <div class="p-3">
          <h3 class=" font-bold">
         {{ meal.strMeal }}
            </h3>
            <h4 class="mb-4">
               {{$filters.truncateWords(meal.strInstructions, 20)}}
            </h4>
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
</template>
<script setup>
import YoutubeButton from './YoutubeButton.vue';
const { meal } = defineProps({
   meal:{
    type:Object,
    required:true
}
})
</script>
