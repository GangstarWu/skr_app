<template>
  <div>
    <div id="songListDetails">
      <my-header></my-header>
      <!--      背景图-->
      <div class="bgImg"></div>
      <div class="details">
<!--        左-->
        <div class="leftImg">
          <div>
            <div class="mask">
              <a href="javascript:;">
                <i class="el-icon-caret-right"></i>
              </a>
            </div>
            <div class="artist-img">
              <img :src="list.logo" alt="">
            </div>
            <div class="artist-name">
              <a href="javascript:;">
                <p>{{list.title}}</p>
                <p>{{list.author}}</p>
                <p v-html="list.desc"></p>
              </a>
            </div>
          </div>
        </div>
<!--        右-->
        <div class="rightList">
          <el-table :data="songs.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
            <el-table-column prop="name" label="歌名" width="300">
            </el-table-column>
            <el-table-column prop="singer" label="歌手" width="300">
            </el-table-column>
            <el-table-column prop="time" label="时长" width="100">
            </el-table-column>
            <el-table-column prop="play" label="播放" width="100">
              <template slot-scope="scope">
                <a href="javascript:;" @click="play(scope.$index)">播放</a>
              </template>
            </el-table-column>
          </el-table>
          <!--      分页查询-->
          <div class="pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[5, 10, 20, 40]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="songs.length">
            </el-pagination>
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
        list:[],
        songs:[],
        currentPage:1,
        pagesize:20
      }
    },
    components:{
      myHeader,
      myFooter
    },
    methods:{
      play(index){
        var n=parseInt(this.currentPage);
        var index=parseInt(index);
        if(n>=2){
          if(index==0){
            index=(n-1)*this.pagesize;
          }else{
            index=(n-1)*this.pagesize+index;
          }
        }
        var song=this.songs[index]
        this.toparent2(song)
      },
      toparent1(data){
        this.$emit("songList",data)
      },
      toparent2(data){
        this.$emit("song",data)
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      },
    },
    created(){
      var id=this.$route.query.id;
      this.axios.get(
        "https://api.itooi.cn/music/tencent/songList?key=579621905&id="+id
      ).then(res=>{
        this.list=res.data.data;
        this.songs=this.list.songs;
        for(var item of this.songs){
          item.url="https://v1.itooi.cn/tencent/url?id="+item.id+"&quality=320"
        }
        this.toparent1(this.songs)
      })
    }
  }
</script>

<style scoped>
  #songListDetails{
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
  .leftImg>div:first-child:hover div:last-child a{
    color:#6f83ed;
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
  .artist-name p:last-child{
    width:300px;
    font-size:18px;
  }
  .details{
    width:1200px;
    display:flex;
    justify-content:space-between;
    margin-bottom:80px;
  }
  .leftImg{
    width:300px;
  }
  .rightList{
    width:800px;
  }
  table a{
    color:#555;
  }
  table tr:hover a{
    color:#6f83ed;
  }
</style>