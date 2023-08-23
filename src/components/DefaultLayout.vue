<template>
    <Navbar/>
    <main class="max-w-[1200px] mx-auto">
     <router-view/>
    </main>
</template>
<script>
import Navbar from './Navbar.vue';

export default {
    components: { Navbar }
}
</script>
<style>
    
</style>