<template>
    <div class="box">
              <audio  src='' ></audio>
                  <div class="img" >
                      <img src="" alt="">
                  </div>
                  <div class="text">
                      <p class="Titile">测试文字</p>
                      <p class="Words">左右滑动可以切歌哦</p>
                  </div>
                  <span class='iconfont icon-bofanganniuxhdpi play' ></span>
                  <span class="iconfont icon-caidan mune"></span>
              </div>
  </template>
  
  <script>
  export default {
      
  }
  </script>
  
  <style scoped>
  .box{
      z-index:1000;
      width:100%;
      height:52px;
      position:fixed;
      bottom:0px;
      font-size:14px;
      box-sizing:border-box;
      padding:6px;
      color:white;
      background:#161719;
  }
  .box>audio{
      display:none;
  }
  .box>.img{
      width:40px;
      height:40px;
      border-radius:50%;
      float:left;
      /* margin-right:5px; */
      padding:4px;
  }
  .box>.img>img{
      width:100%;
      height:100%;
      border-radius:50%;
  }
  .box>.text{
      width:240px;
      color:#a6a8a7;
      float:left;
      text-align: left;
  }
  .box>.text>.Titile{
      margin: 0px;
  }
  .box>.text>.Words{
      font-size:12px;
      color:#484a4a;
      margin: 0px;
  }
  .box>.play,.mune{
      font-size:26px;
      line-height:40px;
      color:#626365;
      float:left;
  }
  .box>.mune{
      margin-left:16px;
  }
      
  </style>