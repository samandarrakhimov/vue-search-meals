import { createRouter, createWebHistory  } from "vue-router";
import {HomeView,MealByDetails,MealByIngredient,MealLetter,MealsByName,Indgredients} from '../views'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
const routes = [
 {
   path:'/',
   component: DefaultLayout,
   children:[
    {
    path:'/',
    name:"home",
    component:HomeView
    },
    {
    path:'/by-name/:name?',
    name:'byName',
    component:MealsByName
    },
    {
      path:'/by-letter/:letter?',
      name:'byLetter',
      component:MealLetter
      },
      {
        path:'/ingredients',
        name:'ingredients',
        component:Indgredients
        },
        {
          path:'/by-ingredient/:ingredient',
          name:'byIngredient',
          component:MealByIngredient
        },
        {
          path:'/meal/:id?',
          name:'mealDetails',
          component:MealByDetails
        },
   ]
 },
 {
  path:'/guest',
  component:GuestLayout 
  
},
]




const router = createRouter({
    history:createWebHistory(),
    routes,
})
export default router