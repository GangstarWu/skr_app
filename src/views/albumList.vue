<template>
  <div>
    <div id="albumList">
      <my-header></my-header>
      <div class="bgImg"></div>
      <div class="top"></div>
      <div class="bottom">
<!--        动态获取专辑-->
<!--        <ul>-->
<!--          <li class="album" v-for="item of list.slice(0,5)" :key="item.i">-->
<!--            <div class="mask">-->
<!--              <a href="javascript:;" @click="jump(item.album_mid)">-->
<!--                <i class="el-icon-caret-right"></i>-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="album-img">-->
<!--              <img :src="`http://y.gtimg.cn/music/photo_new/T002R150x150M000${item.album_mid}.jpg?max_age=2592000`" alt="">-->
<!--            </div>-->
<!--            <div class="album-name" @click="jump(item.album_mid)">-->
<!--              <a href="javascript:;">{{item.album_name}}</a>-->
<!--              <a href="javascript:;">{{item.singer_name}}</a>-->
<!--            </div>-->
<!--          </li>-->
<!--        </ul>-->
<!--        <ul>-->
<!--          <li class="album" v-for="item of list.slice(5,10)" :key="item.i">-->
<!--            <div class="mask">-->
<!--              <a href="javascript:;" @click="jump(item.album_mid)">-->
<!--                <i class="el-icon-caret-right"></i>-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="album-img">-->
<!--              <img :src="`http://y.gtimg.cn/music/photo_new/T002R150x150M000${item.album_mid}.jpg?max_age=2592000`" alt="">-->
<!--            </div>-->
<!--            <div class="album-name" @click="jump(item.album_mid)">-->
<!--              <a href="javascript:;">{{item.album_name}}</a>-->
<!--              <a href="javascript:;">{{item.singer_name}}</a>-->
<!--            </div>-->
<!--          </li>-->
<!--        </ul>-->
<!--        <ul>-->
<!--          <li class="album" v-for="item of list.slice(10,15)" :key="item.i">-->
<!--            <div class="mask">-->
<!--              <a href="javascript:;" @click="jump(item.album_mid)">-->
<!--                <i class="el-icon-caret-right"></i>-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="album-img">-->
<!--              <img :src="`http://y.gtimg.cn/music/photo_new/T002R150x150M000${item.album_mid}.jpg?max_age=2592000`" alt="">-->
<!--            </div>-->
<!--            <div class="album-name" @click="jump(item.album_mid)">-->
<!--              <a href="javascript:;">{{item.album_name}}</a>-->
<!--              <a href="javascript:;">{{item.singer_name}}</a>-->
<!--            </div>-->
<!--          </li>-->
<!--        </ul>-->
<!--        <ul>-->
<!--          <li class="album" v-for="item of list.slice(15,20)" :key="item.i">-->
<!--            <div class="mask">-->
<!--              <a href="javascript:;" @click="jump(item.album_mid)">-->
<!--                <i class="el-icon-caret-right"></i>-->
<!--              </a>-->
<!--            </div>-->
<!--            <div class="album-img">-->
<!--              <img :src="`http://y.gtimg.cn/music/photo_new/T002R150x150M000${item.album_mid}.jpg?max_age=2592000`" alt="">-->
<!--            </div>-->
<!--            <div class="album-name" @click="jump(item.album_mid)">-->
<!--              <a href="javascript:;">{{item.album_name}}</a>-->
<!--              <a href="javascript:;">{{item.singer_name}}</a>-->
<!--            </div>-->
<!--          </li>-->
<!--        </ul>-->
        <ul>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=001HzsRo36tmlW">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/me.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=001HzsRo36tmlW">
                <p>ME!</p>
                <p>Taylor Swift</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=003OK4yP2MBOip">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/reputation.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=003OK4yP2MBOip">
                <p>reputation</p>
                <p>Taylor Swift</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=002Kz5Jo1uzHjz">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/1989.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=002Kz5Jo1uzHjz">
                <p>1989</p>
                <p>Taylor Swift</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=000XafSm26FA1L">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/red.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=000XafSm26FA1L">
                <p>Red</p>
                <p>Taylor Swift</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=000yLEum3mQbJ4">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/ai.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=000yLEum3mQbJ4">
                <p>A.I. 爱</p>
                <p>王力宏</p>
              </router-link>
            </div>
          </li>
        </ul>
        <ul>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=000NQNPC09SpPS">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/ahfod.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=000NQNPC09SpPS">
                <p>A Head Full of Dreams</p>
                <p>Coldplay</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=000Jhxf24CFL06">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/ba.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=000Jhxf24CFL06">
                <p>Begin Again</p>
                <p>Various Artists</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=002qyIry4Y11h1">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/thriller.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=002qyIry4Y11h1">
                <p>Thriller</p>
                <p>Michael Jackson</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=004PS00g2zSmPk">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/dg.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=004PS00g2zSmPk">
                <p>Dangerous</p>
                <p>Michael Jackson</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=0034Gnut4OoYpJ">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/bad.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=0034Gnut4OoYpJ">
                <p>Bad</p>
                <p>Michael Jackson</p>
              </router-link>
            </div>
          </li>
        </ul>
        <ul>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=002eFUFm2XYZ7z">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/whm.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=002eFUFm2XYZ7z">
                <p>我很忙</p>
                <p>周杰伦</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=002Neh8l0uciQZ">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/mjz.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=002Neh8l0uciQZ">
                <p>魔杰座</p>
                <p>周杰伦</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=002FT46H18G1jW">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/lc.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=002FT46H18G1jW">
                <p>Life Continues...</p>
                <p>陈奕迅</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=003nMzes28P7wv">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/wgo.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=003nMzes28P7wv">
                <p>What's Going On...?</p>
                <p>陈奕迅</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=001J363q1UXyed">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/dw.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=001J363q1UXyed">
                <p>Doo-Wops & Hooligans</p>
                <p>Bruno Mars</p>
              </router-link>
            </div>
          </li>
        </ul>
        <ul>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=003ImrLV3s3H11">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/faith.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=003ImrLV3s3H11">
                <p>Faith</p>
                <p>Stevie Wonder/Ariana Grande</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=0030hdQf1XQyCK">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/gotg.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=0030hdQf1XQyCK">
                <p>Guardians of the Galaxy</p>
                <p>Various Artists</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=001MSwNx1pfiAF">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/ktl.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=001MSwNx1pfiAF">
                <p>KILL THIS LOVE</p>
                <p>BLACKPINK</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=001ZQRBO2251uY">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/lll.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=001ZQRBO2251uY">
                <p>La La Land</p>
                <p>Various Artists</p>
              </router-link>
            </div>
          </li>
          <li class="album">
            <div class="mask">
              <router-link to="/albumDetails?id=0034wEJM23hPz3">
                <i class="el-icon-caret-right"></i>
              </router-link>
            </div>
            <div class="album-img">
              <img src="img/column/ud.jpg" alt="">
            </div>
            <div class="album-name">
              <router-link to="/albumDetails?id=0034wEJM23hPz3">
                <p>UglyDolls</p>
                <p>Various Artists</p>
              </router-link>
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
        // type:-1,
        // page:0,
        // list:[]
      }
    },
    components:{
      myHeader,myFooter
    },
    methods:{
      // getList(type,page){
      //   if(page){
      //     this.page=page;
      //   }else{
      //     this.page=0
      //   }
      //   this.type=type;
      //   var url =
      //     "https://c.y.qq.com/v8/fcg-bin/album_library?g_tk=1278911659&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cmd=firstpage&page="+this.page+"&pagesize=20&sort=1&language=-1&genre=0&year=1&pay=0&type="+this.type+"&company=-1";
      //   $.ajax({
      //     url,
      //     type: "get",
      //     dataType: "jsonp",
      //     jsonp: "jsonpCallback",
      //     scriptCharset: "GBK"
      //   }).then(result => {
      //     this.list=result.data.albumlist;
      //     console.log(this.list)
      //   });
      // },
      // jump(id){
      //   this.$router.push(`/albumDetails?id=${id}`)
      // }
    },
    mounted(){
      // this.getList(-1)
    }
  }
</script>

<style scoped>
  #albumList{
    width:1200px;
    margin:0 auto;
  }
  .bgImg{
    width:1200px;
    height:235px;
    background-image:url("../../public/img/bg_singer.jpg");
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
    background-position:0 -35px;
  }
  .bottom{
    margin-bottom:80px;
  }
  .bottom ul{
    padding:0;
    display:flex;
    justify-content:space-between;
    margin-bottom:50px;
  }
  .album{
    position:relative;
    width:150px;
  }
  .album:hover div:last-child a{
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
  .album-img{
    width:150px;
    height:150px;
    z-index:1;
    transition:all .5s linear;
    overflow:hidden;
    border-radius:16px;
  }
  .album-img img{
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
  .album-name{
    text-align:center;
    margin-top:20px;
  }
  .album-name a{
    font-size:20px;
    font-weight:bold;
    color:#555;
    display:block;
  }
  .album a p:first-child{
    margin:10px 0;
  }
  .album a p:last-child{
    margin:0;
    font-size:16px;
  }
</style>