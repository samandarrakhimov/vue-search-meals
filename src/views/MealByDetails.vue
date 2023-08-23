<template>
    <div class="max-w-[800px] mx-auto">
    <div>
        <h1 class="text-5xl mb-5 font-bold">{{ meals.strMeal }}</h1>
        <img :src="meals.strMealThumb" :alt="meals.strMeal" class="max-w-[100%]">
    </div>
    <div class=" grid grid-cols-1 sm:grid-cols-3">
        <div class="text-lg py-2">
            <strong class="font-bold">Category:</strong>
            {{ meals.strCategory }}
        </div>
        <div class="text-lg py-2">
            <strong class="font-bold">Area:</strong>
            {{ meals.strArea }}
        </div>
        <div class="text-lg py-2">
            <strong class="font-bold">Tags:</strong>
            {{ meals.strTags }}
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
    <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
            <template v-for="(el,idx) of new Array(20)">
                <li v-if="meals[`strIngredient${idx + 1}`]">
                {{ idx + 1 }}.    {{ meals[`strIngredient${idx + 1}`] }}
                </li>
            </template>
        </ul>
    </div>
    <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
            <template v-for="(el,idx) of new Array(20)">
                <li v-if="meals[`strMeasure${idx + 1}`]">
              {{ idx + 1 }}.{{ meals[`strMeasure${idx + 1}`] }}
                </li>
            </template>
        </ul> 
    </div>
    <div class=" mt-5">
    <YoutubeButton :href="meals.strYoutube">
        Youtube
    </YoutubeButton>
    <a :href="meals.strSource" target="_blank" class="px-3 ms-3 py-2 border-2
            border-indigo-600
            bg-indigo-500
            hover:bg-indigo-600
             text-white 
               rounded transition-colors">
            View Orginal Source
            </a>
  </div>
    </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';
const meals = ref({})
 const route = useRoute()
 onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(res => {
        meals.value = res.data.meals[0]
    })
 })
</script>
<style>
    
</style>