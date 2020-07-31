<template>
  <div class="box">
        <div class="header">
            <span class="back iconfont icon-fanhuipt"></span>
            <span class="title ">测试文字</span>
            <span class="share iconfont icon-fenxiangpt"></span>
        </div>
        <div class="cd">
            <div class="img">
                <img src="img/CD.png" alt="" class="imgcd">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1404963455,2358097916&fm=26&gp=0.jpg" alt="" class="imgcenter">
                <img src="img/play.png" alt="" class="imgplay">
            </div>
            <div class="option">
                <span class="iconfont icon-xihuan-kongpt"></span>
                <span class="iconfont icon-xiazaipt"></span>
                <span class="iconfont icon-huatong"></span>
                <span class="iconfont icon-pinglunpt"></span>
                <span class="iconfont icon-xinxipt"></span>
            </div>
        </div>
        <div class="footer">
            <audio src="" ></audio>
            <div class="progress">
                <span class="start">0:00</span>
                <div class="progress-out">
                    <div class="progress-inner"></div>
                    <span class="dot"></span>
                </div>
                <span class="end">0:00</span>
            </div>
            <div class="controlls">
                <span class="iconfont icon--lbxh"></span>
                <span class="iconfont icon-xiangyiqu"></span>
                <span class="iconfont icon-bofanganniu"></span>
                <span class="iconfont icon-shangyiqu"></span>
                <span class="iconfont icon-caidan1"></span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isPlay:''
        }
    }
}
</script>

<style scoped>
    .box{
        width: 375px;
        /* box-sizing:border-box; */
        /* padding:10px 14px ; */
        color: black;
        background-color: rgba(0, 0, 0, .5);
    }
    .header{
        box-sizing:border-box;
        padding:10px 14px ;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 58px;
        color: #afb0a8;
        background-color: rgba(0, 0, 0, .5);
    }
    .back{
        width: 28px;
        line-height: 38px;
        margin-right:16px ;
        font-size: 24px;
    }
    .title{
        width: 264px;
        text-align: left;
        font-size: 18px;
    }
    .share{
        width:22px;
        line-height: 38px;
        margin-left: 18px;
        font-size: 24px;
    }
    .cd{
        width: 100%;
        height: 482px;
        position: relative;
        background-color: rgba(0, 0, 0, .5);
    }
    .img{
        height: 404px;
    }
    .imgcd{
        position: absolute;
        top: 70px;
        left: 48px;
    }
    .imgcenter{
        position: absolute;
        top: 112px;
        left: 90px;
        width: 188px;
        height: 188px;
        border-radius: 50%;
        z-index: 999;
    }
    .imgplay{
        position: absolute;
        right: 62px;
        background-color: transparent;
    }
    .option,.controlls{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .option>.iconfont{
        height: 76px;
        font-size: 26px;
        color: #afb0a8;
    }
    .controlls{
        height: 114px;
        background-color: rgba(0, 0, 0, .5);
    }
    .controlls>.iconfont{
        line-height: 112px;
        font-size: 26px;
        color: #afb0a8;
    }
    .icon-bofanganniu{
        font-size: 40px !important;
    }
    /* audio{
        height: 24px;
        width: 100%;
        background-color: rgba(0, 0, 0, .5);
    } */
    .progress{
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: rgba(0, 0, 0, .5);
    }
    .progress>span{
        color: #afb0a8;
        font-size: 14px;
        line-height: 10px;
    }
    .progress-out{
        width: 266px;
        height: 4px;
        margin: 4px 10px;
        background-color: #908983;
        border-radius: 2px;
        position: relative;
    }
    .progress-inner{
        width: 10%;
        height: 4px;
        background-color: red;
        border-radius: 2px;
    }
    .dot{
        /* display: inline-block; */
        position: absolute;
        top: -50%;
        left: 10%;
        width: 8px;
        height: 8px;
        background: #908983;
        border-radius: 50%;
    }


    /* 增删改查 路由跳转 参数传递  后端请求 数据监听 */
</style>
