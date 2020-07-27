<template>
    <div>
        <videolist></videolist>
        <router-view></router-view>
    </div>
</template>

<script>
import videolist from '@/components/videolist.vue'
export default {
    components:{
        videolist
    }
}
</script>

<style scoped>

</style>