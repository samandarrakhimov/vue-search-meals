<template>
   <input :type="type"  class="rounded border-2 border-gray-200 w-full"
     :placeholder="label"
     :value="modalValue"
     @input="inputHandler"
     >
</template>
<script>
export default {
  name:'Input',
   props:{
    type:String,
    label:String,
    modalValue:[String,Number]
   },
  methods:{
    inputHandler(e){
     this.$emit('update:modalValue',e.target.value)
    }
  }
  
}
</script>
<style>
    
</style>