<template>
  <header>
    <div class="head">
<!--      logo-->
      <div class="logo">
        <img src="img/logo.jpg" alt="">
      </div>
<!--      搜索框-->
      <div class="demo-input-suffix search">
        <el-input placeholder="请输入歌名/歌手" suffix-icon="el-icon-search"  v-model="kword" @keyup.13.native="search"></el-input>
      </div>
<!--      导航栏-->
      <ul @mouseleave="u1">
        <li id="l1" @mouseenter="t1" @click="active" data-url="/index">首 页</li>
        <li id="l2"  @mouseenter="t2" @click="active" data-url="/artistList">乐 人</li>
        <li id="l3" @mouseenter="t3" @click="active" data-url="/songList">猎 乐</li>
        <li id="l4" @mouseenter="t4" @click="active" data-url="/albumList">专 辑</li>
        <span id="s1"></span>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    data(){
      return {
        kword:'',
      }
    },
    methods:{
      search(e){
        if(this.kword.trim()!=""){
          this.$router.push(`/search?kword=${this.kword}`)
        }
      },
      active(e){
        this.$router.push(e.target.dataset.url);
      },
      t1(){
        l1.style.fontSize="24px";
        l2.style.fontSize="20px";
        l3.style.fontSize="20px";
        l4.style.fontSize="20px";
        s1.style.left="54px";
      },
      t2(){
        l1.style.fontSize="20px";
        l2.style.fontSize="24px";
        l3.style.fontSize="20px";
        l4.style.fontSize="20px";
        s1.style.left="132px";
      },
      t3(){
        l1.style.fontSize="20px";
        l2.style.fontSize="20px";
        l3.style.fontSize="24px";
        l4.style.fontSize="20px";
        s1.style.left="210px";
      },
      t4(){
        l1.style.fontSize="20px";
        l2.style.fontSize="20px";
        l3.style.fontSize="20px";
        l4.style.fontSize="24px";
        s1.style.left="287px";
      },
      u1(){
        if(this.$route.path=="/index"||this.$route.path=="/"){
          this.t1();
        }else if(this.$route.path=="/artistList"){
          this.t2();
        }else if(this.$route.path=="/song"||this.$route.path=="/songList"||this.$route.path=="/search"||this.$route.path=="/songListDetails"){
          this.t3();
        }else{
          this.t4();
        }
      }
    },
    mounted(){
      if(this.$route.path=="/index"||this.$route.path=="/"){
        this.t1();
      }else if(this.$route.path=="/artistList"){
        this.t2();
      }else if(this.$route.path=="/song"||this.$route.path=="/songList"||this.$route.path=="/search"||this.$route.path=="/songListDetails"){
        this.t3();
      }else{
        this.t4();
      }
    }
  }
</script>

<style scoped>
  div.head{
    width:1200px;
    height:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:0 auto 50px;
  }
  a{
    text-decoration:none;
    color:#6f83ed;
  }
  .logo{
    width:200px;
  }
  .logo img{
    width:100%;
  }
  .search{
    width:300px;
    margin-left:120px;
  }
 .search >>> input.el-input__inner{
   border:1px solid #6f83ed;
 }
  .head ul{
    list-style:none;
    position:relative;
  }
  li{
    float:left;
    font-size:20px;
    padding:0 16px;
    transition:all .3s linear;
    cursor:pointer;
  }
  span{
    position: absolute;
    top: 100%;
    left:54px;
    height: 4px;
    width: 60px;
    background-color: #6f83ed;
    display:inline-block;
    transition:all .3s linear;
  }
</style>