<template>
    <div class="p-8">
        <div class="font-bold text-2xl text-center" v-if="isLoading">
            Loading...
        </div>
        <h1 class="font-bold text-4xl mb-4" v-else>
            Ingredients
        </h1>
      <router-link :to="{
        name:'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }" v-for="ingredient of ingredients" :key="ingredient.idIngredient"
       class=" block p-3 mb-3 shadow bg-white rounded ">
        <h3 class="font-bold text-2xl mb-2">{{ ingredient?.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
    </router-link>
    </div>
</template>
<script>
import { computed, onMounted, watch,ref } from 'vue';
import  store  from '../store';
import { useRoute } from 'vue-router';
import { mapState } from 'vuex';
import axiosClient from '../axiosClient';
export default {
    setup(){
     const ingredients = ref([])
     onMounted(() => {
      axiosClient.get('list.php?i=list') 
      .then(res => {
        ingredients.value = res.data.meals
      }) 
     })
    return {ingredients}
    },
    computed:{
        ...mapState({
            isLoading : state => state.meals.isLoading
        })
    }
}
</script>
<style>
    
</style>