import axiosClient from "../axiosClient"

const state = {
   isLoading:false,
   meals:null,
   error:null,
   mealsLetter:null,
   mealsIngredient:null  
}
const mutations = {
mealsStart(state){
    state.meals = null,
    state.isLoading = true,
    state.error = null,
    state.mealsLetter = null,
    state.mealsIngredient = null
},
mealsSuccess(state,payload){
    state.isLoading = false,
    state.meals = payload
},
mealsFaulire(state,payload){
    state.isLoading = false,
    state.error = payload
},
mealsLetterSuccess(state,payload){
    state.isLoading = false,
    state.mealsLetter = payload
},
mealsIngredientsSuccess(state,payload){
    state.isLoading = false,
    state.mealsIngredient = payload
},
}

const actions = {
  async meals(context,keywords) {
    context.commit('mealsStart')
   axiosClient.get(`search.php?s=${keywords}`)
   .then(res => {
    context.commit('mealsSuccess',res.data.meals)
    console.log(res.data.meals);
   })
   .catch(() => context.commit('mealsFaulire'))
   },
   async mealsLetter(context,Letter){
    context.commit("mealsStart")
    axiosClient.get(`search.php?f=${Letter}`)
    .then(res => {
        context.commit('mealsLetterSuccess',res.data.meals)
        console.log(res.data);
    })
    .catch(() => context.commit('mealsFaulire'))
   },
   async mealsIngredients(context,ing){
    context.commit("mealsStart")
    axiosClient.get(`filter.php?i=${ing}`)
    .then(res => {
        context.commit('mealsIngredientsSuccess',res.data.meals)
        console.log(res.data);
    })
    .catch(() => context.commit('mealsFaulire'))
   }
}

export default {
    state,
    mutations,
    actions,
}