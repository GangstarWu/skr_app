<template>
  <div>
    <div id="songList">
      <my-header></my-header>
<!--      背景图-->
      <div class="bgImg"></div>
<!--      歌单推荐-->
      <div class="top"></div>
      <div class="bottom">
        <ul>
          <li class="artist" v-for="item of songList.slice(0,5)" :key="item.i">
            <div class="mask">
              <a href="javascript:;" @click="jump(item.id)">
                <i class="el-icon-caret-right"></i>
              </a>
            </div>
            <div class="artist-img">
              <img :src="item.pic" alt="">
            </div>
            <div class="artist-name">
              <a href="javascript:;" @click="jump(item.id)">{{item.name}}</a>
            </div>
          </li>
        </ul>
        <ul>
          <li class="artist" v-for="item of songList.slice(5,10)" :key="item.i">
            <div class="mask">
              <a href="javascript:;" @click="jump(item.id)">
                <i class="el-icon-caret-right"></i>
              </a>
            </div>
            <div class="artist-img">
              <img :src="item.pic" alt="">
            </div>
            <div class="artist-name">
              <a href="javascript:;" @click="jump(item.id)">{{item.name}}</a>
            </div>
          </li>
        </ul>
        <ul>
          <li class="artist" v-for="item of songList.slice(10,15)" :key="item.i">
            <div class="mask">
              <a href="javascript:;" @click="jump(item.id)">
                <i class="el-icon-caret-right"></i>
              </a>
            </div>
            <div class="artist-img">
              <img :src="item.pic" alt="">
            </div>
            <div class="artist-name">
              <a href="javascript:;" @click="jump(item.id)">{{item.name}}</a>
            </div>
          </li>
        </ul>
        <ul>
          <li class="artist" v-for="item of songList.slice(15,20)" :key="item.i">
            <div class="mask">
              <a href="javascript:;" @click="jump(item.id)">
                <i class="el-icon-caret-right"></i>
              </a>
            </div>
            <div class="artist-img">
              <img :src="item.pic" alt="">
            </div>
            <div class="artist-name">
              <a href="javascript:;" @click="jump(item.id)">{{item.name}}</a>
            </div>
          </li>
        </ul>
      </div>
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
        songList:[]
      }
    },
    created(){
      this.axios.get(
        "https://api.itooi.cn/music/tencent/hotSongList?key=579621905&categoryId=10000000&sortId=3&limit=19"
      ).then(res=>{
        this.songList=res.data.data;
      })
    },
    components:{
      myHeader,
      myFooter
    },
    methods:{
      jump(id){
        this.$router.push(`/songListDetails?id=${id}`)
      }
    }
  }
</script>

<style scoped>
  #songList{
    width:1200px;
    margin:0 auto;
  }
  .bgImg{
    width:1200px;
    height:154px;
    background-image:url("../../public/img/bg_search.jpg");
    margin-bottom:50px;
    overflow:hidden;
  }
  .top{
    margin-bottom: 36px;
    height: 52px;
    overflow: hidden;
    width: 123px;
    background-image: url(../../public/img/titlebg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position:0 -312px;
  }
  .bottom ul{
    padding:0;
    display:flex;
    justify-content:space-between;
    margin-bottom:80px;
  }
  .artist{
    position:relative;
    width:150px;
  }
  .artist:hover div:last-child a{
    color:#6f83ed;
  }
  .mask{
    width:150px;
    height:150px;
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
    width:150px;
    height:150px;
    z-index:1;
    transition:all .5s linear;
    overflow:hidden;
    border-radius:16px;
  }
  .artist-img img{
    transition:all .5s;
    width:100%;
  }
  .el-icon-view,.el-icon-caret-right{
    position:absolute;
    top:25%;
    left:25%;
    font-size:80px;
    color:#6f83ed;
  }
  .artist-name{
    text-align:center;
    margin-top:20px;
  }
  .artist-name a{
    font-size:20px;
    font-weight:bold;
    color:#555;
  }
</style>