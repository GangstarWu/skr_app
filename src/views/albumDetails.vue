<template>
  <div>
    <div id="albumDetails">
      <my-header></my-header>
      <div class="bgImg"></div>
      <div class="info">
        <div class="img">
          <img src="img/column/album_cover.png" alt="" class="mask">
          <img v-if="album.mid" :src="`http://y.gtimg.cn/music/photo_new/T002R300x300M000${album.mid}.jpg?max_age=2592000`">
        </div>
        <div class="text">
          <p>{{album.name}}</p>
          <p>{{album.singername}}</p>
          <p>
            <span>流派：{{album.genre}}</span>
            <span>语种：{{album.lan}}</span>
          </p>
          <p>
            <span>发行时间：{{album.aDate}}</span>
            <span>唱片公司：{{album.company}}</span>
          </p>
          <el-popover
            placement="right"
            width="500"
            trigger="click">
            <p>{{album.desc}}</p>
            <el-button slot="reference">专辑简介</el-button>
          </el-popover>

        </div>
      </div>
      <div class="song">
        <el-table :data="songs.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
          <el-table-column prop="songname" label="歌名" width="400">
          </el-table-column>
          <el-table-column prop="singer[0].name" label="歌手" width="400">
          </el-table-column>
          <el-table-column prop="interval" label="时长" width="200">
          </el-table-column>
          <el-table-column prop="play" label="播放" width="200">
            <template slot-scope="scope">
              <a href="javascript:;"  @click="play(scope.$index)">播放</a>
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
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from '../components/header'
  import myFooter from '../components/footer'
  export default {
    data(){
      return {
        album:[],
        songs:[],
        list:[],
        currentPage:1,
        pagesize:20
      }
    },
    methods:{
      //获取专辑详情
      getAlbum(){
        var id=this.$route.query.id;
        var url="https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid="+id+"&g_tk=1278911659&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0";
        $.ajax({
          url,
          type:"get",
          dataType:"jsonp",
          jsonp:"jsonpCallback",
          scriptCharset:"GBK"
        }).then(result=>{
          this.album=result.data;
          this.songs=result.data.list;
          for(var item of this.songs){
            var id=item.songmid;
            this.axios.get(
              "https://api.itooi.cn/music/tencent/song?key=579621905&id="+id
            ).then(res=>{
              this.list.push(res.data.data)
              this.toparent1(this.list)
            })
          }
        })
      },
      toparent1(data){
        this.$emit("songList",data)
      },
      toparent2(data){
        this.$emit("song",data)
      },
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
        var id=this.songs[index].songmid;
        this.axios.get(
          "https://api.itooi.cn/music/tencent/song?key=579621905&id="+id
        ).then(res=>{
          this.toparent2(res.data.data)
        })
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      },
    },
    components:{
      myHeader,myFooter
    },
    created(){
      this.getAlbum();
    },
  }
</script>

<style scoped>
  #albumDetails{
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
  .info{
    display:flex;
    justify-content:space-between;
    margin-bottom:50px;
  }
  .img{
    position:relative;
  }
  .img img:last-child{
    width:250px;
    height:250px;
    position:absolute;
    left:0;
  }
  .text{
    text-align:left;
    position:absolute;
    left:600px;
  }
  .text span{
    display:inline-block;
  }
  .text p:first-child{
    font-size:20px;
    font-weight:bold;
  }
  .text p:nth-child(3) span{
    width:250px;
  }
  .text p:nth-child(4) span{
    width:250px;
  }
  table a{
    color:#555;
  }
  table tr:hover a{
    color:#6f83ed;
  }
</style>