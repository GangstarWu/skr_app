<template>
  <div id="app">
    <router-view  @song="addsong" @songList="addList"/>
    <footer>
      <aplayer :audio="audio" fixed autoplay ref="aplayer"/>
    </footer>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        play_list:[
          {uname:""}
        ],
        audio:[],
      }
    },
    methods: {
      addsong(data) {
        for(var i=0;i<this.audio.length;i++){
          if(data.id==this.audio[i].id){
            break;
          }
        }
        data.artist=data.singer;
        data.cover=data.pic;
        if(i==this.audio.length){
          this.audio.unshift(data);
          this.$refs.aplayer.switch(0)
        }else{
          this.$refs.aplayer.switch(i)
        }
      },
      addList(data) {
        this.play_list = data;
        for(var i of this.play_list){
          i.artist=i.singer;
          i.cover=i.pic;
        }
        this.audio=this.play_list
      },
    },
  }
</script>

<style>
  #app {
    font-family: "AvenirLTStd-Light","PingFangSC-Light","Microsoft YaHei",Helvetica,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:#555;
    text-align:center;
  }
  ul{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  div.aplayer.aplayer-fixed .aplayer-body{
    max-width: 100%;
  }
  div.aplayer.aplayer-fixed .aplayer-lrc{
    z-index: 100;
    bottom:24px;
  }
  .aplayer-list{
    text-align:left !important;
  }
</style>
