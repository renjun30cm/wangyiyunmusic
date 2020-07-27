<template>
    <div id="list">
        <router-link to="">推荐</router-link>
        <router-link to="">Look直播</router-link>
        <router-link to="">榜单来了</router-link>
        <router-link to="">官方</router-link>
        <router-link to="">现场</router-link>
        <router-link to="">翻唱</router-link>
        <router-link to="">广场</router-link>
        <router-link to="">舞蹈</router-link>
        <router-link to="">听BGM</router-link>
    </div>
</template>

<script>
export default {
    data() {
    return {
      activeName: 'a',
      arr:[
          {title:"推荐"},
          {title:"推荐"},
          {title:"推荐"}
      ]
    };
  },
}
</script>

<style scoped>
    #list{
        width: 100%;
        height:0.3rem;
        background-color: aqua;
        position: absolute;
        top: 0.5rem;
        display: flex;
        overflow-x:auto ;
    }
    #list>a{
        /* flex: 1; */
        line-height: 0.3rem;
        text-align: center;
        width: 0.8rem;
       margin: 0px 5px;
       text-decoration: none;
    }

</style>