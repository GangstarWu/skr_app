<template>
  <div>
    <div id="song">
      <my-header></my-header>
      <div class="bgImg">
        <img src="img/bg_singer.jpg" alt="">
      </div>
      <div class="leftImg">
        <div>
          <div class="mask">
            <a href="javascript:;">
              <i class="el-icon-caret-right"></i>
            </a>
          </div>
          <div class="artist-img">
            <img :src="song.pic" alt="">
          </div>
          <div class="artist-name">
            <a href="javascript:;">
              <p>{{song.name}}</p>
              <p>{{song.singer}}</p>
            </a>
          </div>
        </div>

        <div class="lrc">
          <h3>歌词</h3>
          <pre>{{lrc}}</pre>
        </div>
      </div>
<!--      <div class="rightText"></div>-->
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from '../components/header'
  import myFooter from '../components/footer'
  export default {
    data(){
      return {
        song:{},
        lrc:{},
      }
    },
    methods:{
      toparent(data){
        this.$emit("song",data)
      },
      getSong(){
        var id=this.$route.query.id;
        this.axios.get(
          "https://api.itooi.cn/music/tencent/song?key=579621905&id="+id
        ).then(res=>{
          this.song=res.data.data;
          this.toparent(this.song)
        })
      },
      getLrc(){
        var id=this.$route.query.id;
        $.ajax({
          url:"https://api.itooi.cn/music/tencent/lrc?key=579621905&id="+id,
          type:"get",
          dataType:"text"
        }).then(data=>{
          this.lrc=data;
          this.lrc=this.lrc.replace(/\[(.+?)\]/g,"");
          this.lrc=this.lrc.replace(/&(.+?);/g,"'")
        })
      }
    },
    components:{
      myHeader,myFooter
    },
    created(){
      this.getSong();
      this.getLrc();

    },
  }
</script>

<style scoped>
  #song{
    width:1200px;
    margin:0 auto;
  }
  .bgImg{
    margin-bottom:50px;
  }
  .leftImg{
    position:relative;
    width:1200px;
    margin-bottom:50px;
    display:flex;
    justify-content:space-between;
  }
  .leftImg>div:first-child{
    height:500px;
  }
  .mask{
    width:300px;
    height:300px;
    position:absolute;
    background:#000;
    opacity:0;
    transition:all .5s;
    z-index:100;
    cursor:pointer;
    border-radius:16px;
  }
  .mask:hover{
    opacity:0.6;
  }
  .mask:hover+div img{
    transform:scale(1.1);
  }
  .artist-img{
    width:300px;
    height:300px;
    z-index:1;
    transition:all .5s linear;
    overflow:hidden;
    border-radius:16px;
  }
  .artist-img img{
    transition:all .5s;
    width:100%;
  }
  .el-icon-caret-right{
    position:absolute;
    top:38%;
    left:38%;
    font-size:80px;
    color:#6f83ed;
  }
  .artist-name{
    text-align:center;
    margin-top:20px;
  }
  .artist-name a{
    font-size:30px;
    font-weight:bold;
    color:#555;
  }
  .artist-name p:first-child{
    width:300px;
    margin-bottom:10px;
  }
  .artist-name p:nth-child(2){
    width:300px;
    font-size:20px;
    margin-top:0;
  }
  .leftImg>div:first-child:hover div:last-child a{
    color:#6f83ed;
  }
  .lrc{
    width:800px
  }
  .lrc pre{
    font-size:20px;
    color:#555;
    margin:0;
    position:relative;
    top:-80px;
    overflow:hidden;
  }
  .lrc h3{
    margin:0;
  }
</style>