<template>
  <div>
    <Music></Music>
    <Musicfoot></Musicfoot>
    <router-view/>
  </div>
</template>
<script>
import Music from '@/components/musictop.vue'
import Musicfoot from '@/components/musicfoot.vue'
export default {
  components:{
    Music,Musicfoot
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  
/*页面初始化*/
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select,figure{margin:0;padding:0}
html{
  font-size:26.67vw;
}

body{font:12px "宋体","Arial Narrow",HELVETICA;background:#fff;}
a{color:#172c45;text-decoration:none}
a:hover{color:#cd0200;text-decoration:underline}
em{font-style:normal}
li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}
.ind{text-indent:2em}
.ind10{text-indent:10px;}
.noborder{border:0;}
.clear{zoom:1}
.clear:after{content:"."; display:block; clear:both; height:0; visibility:hidden;}
</style>
