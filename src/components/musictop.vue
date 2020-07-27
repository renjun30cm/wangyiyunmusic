<template>
    <div id="all">
        <div id="left">
            <img src="../../public//img/2.png" alt="" @click="showPopup()">
            <van-popup v-model="show" position="left" :style="{ left: '30%' }" />
        </div> 
        <div id="content">
            <router-link to="">我的</router-link>
            <router-link to="">发现</router-link>
            <router-link to="">云村</router-link>
            <router-link to="/video">视频</router-link>
        </div>
        <div id="right">
            <img src="../../public/img/ic_actionbar_search_icon.png" alt="">
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #all{
        width: 100%;
        height: 3rem;
        /* background-color: aqua; */
    }
    #left{
        float: left;
        width: 20%;
    }
    #left>img{
        width: 40px;
        margin-top: 2px;
    }
    #content{
        display: flex;
        width: 60%;
    }
    #content>a{ 
        flex: 1;
        line-height: 0.5rem;
        text-decoration: none; 
        color: black;
        text-align: center;
    }
    #right{
        width: 20%;
        float: right;
    }
    #right>img{
        width: 30px;
       position: absolute;
       top: 5px;
        right: 10px;
    }
    
</style>