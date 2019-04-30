<template>
  
</template>

<script>
  export default {
    data(){
      return {}
    },
    created(){
      $.ajax({
        url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=001IskfD3Vncxo&g_tk=1278911659&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
        type: "get",
        dataType: "jsonp",
        jsonp: "jsonpCallback",
        scriptCharset: "GBK"
      }).then(result => {
        console.log(result.data);
      });
    }
  }
</script>

<style scoped>

</style>