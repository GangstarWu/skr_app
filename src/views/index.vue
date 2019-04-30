<template>
<div>
  <div id="index">
  <!--    头部-->
    <my-header></my-header>
  <!--    轮播图-->
    <el-carousel :interval="3000" type="card" height="280px">
      <el-carousel-item v-for="item in banners" :key="item">
<!--        <h3>{{ item }}</h3>-->
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  <!--    歌手推荐-->
    <div id="artist">
<!--      top-->
      <div class="top">
        <div></div>
        <div>
          <router-link to="/artistList">查 看 更 多&nbsp;&nbsp;<span>&gt;</span></router-link>
        </div>
      </div>
<!--      bottom-->
      <div class="bottom">
        <ul>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=周杰伦">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
                <img src="img/artist/hot/zjl.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=周杰伦">周杰伦</router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=陈奕迅">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/artist/hot/cyx.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=陈奕迅">陈奕迅</router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=林俊杰">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/artist/hot/ljj.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=林俊杰">林俊杰</router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=邓紫棋">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/artist/hot/dzq.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=邓紫棋">邓紫棋</router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=Alan Walker">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/artist/hot/aw.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=Alan Walker">Alan Walker</router-link>
            </div>
          </li>
        </ul>
        <ul>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=薛之谦">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/artist/hot/xzq.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=薛之谦">薛之谦</router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=张学友">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/artist/hot/zxy.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=张学友">张学友</router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=王力宏">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/artist/hot/wlh.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=王力宏">王力宏</router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=李荣浩">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/artist/hot/lrh.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=李荣浩">李荣浩</router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/search?kword=Taylor Swift">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/artist/hot/ts.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/search?kword=Taylor Swift">Taylor Swift</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  <!--    歌单推荐-->
    <div id="songList">
      <!--      top-->
      <div class="top">
        <div></div>
        <div>
          <router-link to="/songList">查 看 更 多&nbsp;&nbsp;<span>&gt;</span></router-link>
        </div>
      </div>
      <!--      bottom-->
      <div class="bottom">
        <div class="leftList" @click="jumpList1">
  <!--        左图-->
          <div>
            <div class="mask">
              <i class="el-icon-caret-right"></i>
            </div>
            <div class="artist-img">
              <img src="img/songList/fl.jpg" alt="">
            </div>
          </div>
  <!--        右文字-->
          <div class="listInfo">
            <h1>复仇者联盟</h1>
            <h3>The Avengers</h3>
            <p>电影系列十年代表音乐全集终极收录！</p>
            <p>攸关整个宇宙命运的史诗战役</p>
            <p>随着惊奇队长的加入将全面展开</p>
            <p>超级英雄们为了平凡而自由的生命奋不顾身</p>
          </div>
          <img src="img/sdesc.png" alt="" class="sdesc">
          <img src="img/edesc.png" alt="" class="edesc">
        </div>
        <div class="rightList" @click="jumpList2">
          <!--        左图-->
          <div>
            <div class="mask">
              <i class="el-icon-caret-right"></i>
            </div>
            <div class="artist-img">
              <img src="img/songList/gj.jpg" alt="">
            </div>
          </div>
          <!--        右文字-->
          <div class="listInfo">
            <h1>逛街新模式</h1>
            <h3>随着Flow变换步伐</h3>
            <p>让这些华语嘻哈成为你的逛街BGM</p>
            <p>漫无目的地在街上游走</p>
            <p>是你就是最靓的仔</p>
          </div>
          <img src="img/sdesc.png" alt="" class="sdesc">
          <img src="img/edesc.png" alt="" class="edesc">
        </div>
      </div>
    </div>
    <!--    单曲推荐-->
    <div id="song">
      <!--      top-->
      <div class="top">
        <div></div>
        <div>
          <router-link to="/index">查 看 更 多&nbsp;&nbsp;<span>&gt;</span></router-link>
        </div>
      </div>
      <!--      bottom-->
      <div class="bottom">
        <ul>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=001J5QJL1pRQYB">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/gbqq.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=001J5QJL1pRQYB">
                <p>等你下课</p>
                <p>周杰伦</p>
              </router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=0004eiC91HM3G5">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/atw.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=0004eiC91HM3G5">
                <p>All To Well</p>
                <p>Taylor Swift</p>
              </router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=003CQnFy0Lecaw">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/sf.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=003CQnFy0Lecaw">
                <p>Sunflower</p>
                <p>Post Malone</p>
              </router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=002E3MtF0IAMMY">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/gnzw.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=002E3MtF0IAMMY">
                <p>光年之外</p>
                <p>邓紫棋</p>
              </router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=0014ahiq40MFQ5">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/afd.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=0014ahiq40MFQ5">
                <p>All Falls Down</p>
                <p>Alan Walker</p>
              </router-link>
            </div>
          </li>
        </ul>
        <ul>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=0045YdtG4FSRLN">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/frg.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=0045YdtG4FSRLN">
                <p>凡人歌</p>
                <p>张震岳 / MC HotDog / 黄旭 / GAI</p>
              </router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=003hFxQh276Cv5">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/zjsy.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=003hFxQh276Cv5">
                <p>最佳损友</p>
                <p>陈奕迅</p>
              </router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=000B2dCe3JJpi6">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/vlv.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=000B2dCe3JJpi6">
                <p>Viva La Vida</p>
                <p>Coldplay</p>
              </router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=000QF2IN0jOpD3">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/cs.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=000QF2IN0jOpD3">
                <p>Counting Stars</p>
                <p>OneRepublic</p>
              </router-link>
            </div>
          </li>
          <li class="artist">
            <div class="mask">
              <router-link to="/song?id=004EI0O91t90WH">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/song/btd.jpg" alt="">
            </div>
            <div class="artist-name">
              <router-link to="/song?id=004EI0O91t90WH">
                <p>Back to December</p>
                <p>Taylor Swift</p>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  <!--    乐文专栏-->
    <div id="column">
<!--      top-->
      <div class="top">
        <div></div>
        <div>
          <router-link to="/albumList">查 看 更 多&nbsp;&nbsp;<span>&gt;</span></router-link>
        </div>
      </div>
<!--      bottom-->
      <div class="bottom">
        <div class="leftColumn">
          <!--        左图-->
          <div>
            <div class="mask">
              <router-link to="/albumDetails?id=001HzsRo36tmlW">
                <i class="el-icon-view"></i>
              </router-link>
            </div>
            <div class="artist-img">
              <img src="img/me.jpg" alt="">
            </div>
          </div>
          <!--        右文字-->
          <div class="columnInfo">
            <h1>ME!</h1>
            <h3>Taylor Swift</h3>
            <p>
              从上一张专辑《reputation》的黑白到这次《ME!》的彩色，Taylor Swift的艺术调色板发生剧烈的变化，如今即将开出耀眼的花。新单涂抹着明亮色彩的节奏，鼓励人人拥抱自己的个性色彩！从黑白到彩色的破茧成蝶，正式开启粉彩斑斓新时代，跟着泰勒一起进入全新的艺术视野吧！
            </p>
          </div>
          <img src="img/sdesc.png" alt="" class="sdesc">
          <img src="img/edesc.png" alt="" class="edesc">
        </div>
      </div>
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
        tabPosition: 'right',
        activeName: 'first',
        banners:[
          "img/banner1.jpg",
          "img/banner2.jpg",
          "img/banner3.jpg",
          "img/banner4.jpg"
        ],
        song:[]
      }
    },
    methods:{
      jumpList1(){
        this.$router.push("/songListDetails?id=6796775368")
      },
      jumpList2(){
        this.$router.push("/songListDetails?id=6939851714")
      }
    },
    components:{
      myHeader,myFooter
    },
  }
</script>

<style scoped>
  #index{
    width:1200px;
    margin:0 auto;
  }
  #artist,#song,#column,#songList{
    margin-bottom:80px;
  }
  .el-carousel{
    margin-bottom:50px;
  }
  .el-carousel img{
    width:100%;
    border-radius:16px;
  }
  .top{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 36px;
    height: 52px;
    overflow: hidden;
  }
  .top div:first-child{
    height: 52px;
    width: 123px;
    background-image: url(../../public/img/titlebg.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .top div:last-child a{
    font-size:16px;
    color:#555;
  }
  .top div:last-child span{
    font-size:16px;
    font-weight:bold;
    color:#6f83ed;
  }
  .bottom ul{
    padding:0;
    display:flex;
    justify-content:space-between;
    margin-bottom:40px;
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
  .artist-name p:first-child{
    margin-bottom:10px;
  }
  .artist-name p:nth-child(2){
    font-size:14px;
    margin-top:0;
  }
  #song .top div:first-child{
    background-position:0 -104px;
  }
  #songList .top div:first-child{
    background-position:0 -312px;
  }
  #songList .artist-img{
    width:300px;
    height:300px;
  }
  #songList .mask{
    width:300px;
    height:300px;
  }
  #songList .el-icon-caret-right{
    top:35%;
    left:35%;
  }
  .leftList,.rightList{
    width:600px;
    display:flex;
    justify-content:space-between;
    position:relative;
  }
  .listInfo{
    width:300px;
    height:300px;
    padding:0 50px;
    cursor:pointer;
  }
  #songList h1{
    margin-top:0;
    margin-bottom:0;
  }
  #songList h3{
    margin-top:16px;
    margin-bottom:16px;
  }
  .sdesc{
    position:absolute;
    left:310px;
  }
  .edesc{
    position:absolute;
    top:270px;
    left:560px;
  }
  #songList .bottom{
    display:flex;
    justify-content:space-between;
  }
  .leftList:hover h1{
    color:#6f83ed;
  }
  .rightList:hover h1{
    color:#6f83ed;
  }
  #column .top div:first-child{
    background-position:0 -50px;
  }
  #column .artist-img{
    width:800px;
    height:300px;
  }
  #column .mask{
    width:800px;
    height:300px;
  }
  #column .el-icon-view{
    top:40%;
    left:45%;
  }
  .leftColumn{
    display:flex;
    justify-content:space-between;
    position:relative;
  }
  .columnInfo{
    width:200px;
    margin-right:50px;
    cursor:pointer;
  }
  .leftColumn:hover h1{
    color:#6f83ed;
  }
  #column .sdesc{
    left:910px;
  }
  #column .edesc{
    left:1160px;
    top:300px;
  }
  #column h1{
    margin-top:0;
    margin-bottom:0;
  }
  #column h3{
    margin-top:10px;
    margin-bottom:10px;
  }
  #column p{
    margin:0;
  }
</style>