<template>
    <div class="flex p-8 justify-center">
     <!-- <Input v-model="keywords" @change="searchHandler" :type="'text'" :label="'Search for Meals'"/> -->
     <input type="text" v-model="keywords" placeholder="Search for Meals" @change="searchHandler" class="rounded border-2 border-gray-200 w-full">
    </div>
     <div v-if="!meals" class="font-bold text-4xl justify-center px-8">
      Please! Search meals 
     </div>
      <div class="px-8 grid grid-cols-1 md:grid-cols-3 gap-5 " v-else>
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
      </div>
</template>
<script setup>
import { ref,computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import YoutubeButton from '../components/YoutubeButton.vue';
import MealItem from '../components/MealItem.vue';


const keywords = ref("")
const route = useRoute()
const meals = computed(() => store.state.meals.meals)

function searchHandler() {
  if (keywords.value) {
    store.dispatch('meals',keywords.value)
  }
  else{
    store.commit('mealsStart',[])
  }
}
 onMounted(() => {
  keywords.value = route.params.name
  if (keywords.value) {
    searchHandler()
  }
 })

//export default {
  // setup(){
  //   const keywords = ""
  //   const route = useRoute();
  //   const meals = computed(() => store.state)
  //   const searchHandler = () =>  {
  //    if (keywords.value) {
  //     console.log(keywords);
  //    this.$store.dispatch('meals',keywords.value)
  //    }else {
  //     this.$store.commit("mealsStart", []);
  //    }
  //   }
  //   return {keywords,searchHandler,meals}
    
  // }
  // data() {
  //   return {
  //     keywords:""
  //   }
  // },
  //   methods:{
  //    searchHandler(e){
  //       let keywords = e.target.value
  //       console.log(keywords);
  //         if (keywords) {
  //        this.$store.dispatch('meals',keywords)
  //    } else {
  //       this.$store.commit("mealsStart", []);
  //   }
  //    },
  //    },
  //  computed:{
  //   ...mapState({
  //       meals: state => state.meals.meals
  //   })
  //  },

   
</script>

    
