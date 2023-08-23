<template>
      <a :href="href" class="px-3 py-2 border-2
            border-red-600
            bg-red-500
            hover:bg-red-600
             text-white 
               rounded transition-colors">
            <slot></slot>
        </a>
</template>
<script setup>
const props = defineProps({
    href:String
})
</script>
<style>
    
</style>