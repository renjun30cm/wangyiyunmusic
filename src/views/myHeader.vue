<template>
  <header id="myHeader">
    <div class="banxin">
      <div class="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="nav">
        <router-link to="/owner">我的</router-link>
        <router-link to="/discover">发现</router-link>
        <router-link to="/cloudcun">云村</router-link>
        <router-link to="video">视频</router-link>
      </div>
      <div class="search iconfont icon-sousuo"></div>
    </div>
  </header>
</template>
<script>
export default {
    name:'myHeader',
    data:function(){
        return {
            
        }
    }

};
</script>

<style scoped>
    #myHeader{
      background:#161719 ;
    }
    .banxin{
      margin: 0 5px;
    }
    a{
      text-decoration: none;
      color: #808183;
    }
    header > div {
    height: 46px;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    }
    header .menu,
    .search {
    flex-basis: 68px;
    /* width: 68px; */
    line-height: 46px;
    text-align: center;
    color: #808183;
    }
    header .nav {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    header .nav > a {
    /* font-weight: bold; */
    font-family: 宋体;
    }
    header .menu > div {
    width: 18px;
    height: 2px;
    background: #808183;
    }
    header .menu > div:first-of-type {
    margin-top: 18px;
    }
    header .menu > div:last-of-type {
    margin-bottom: 18px;
    }
    header .menu > div:nth-of-type(2) {
    margin: 5px 0px;
    }
</style>