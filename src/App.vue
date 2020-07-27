<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from './views/myHeader'
import myFooter from './views/myFooter'
export default {
  components:{
    myHeader,
    myFooter
  }
}
</script>
<style>
  *{
    margin: 0px;
    padding: 0px;
  }
</style>
