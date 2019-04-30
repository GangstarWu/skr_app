<template>
  <div>
    <div id="search">
      <my-header></my-header>
<!--      搜索框-->
      <div class="bgImg">
<!--        <img src="img/bg_singer.jpg" alt="">-->
<!--        <div class="demo-input-suffix search">-->
<!--          <el-input placeholder="请输入歌名/歌手" suffix-icon="el-icon-search"  v-model="kword" @keyup.13.native="search"></el-input>-->
<!--        </div>-->
      </div>
<!--      搜索结果-->
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
        <el-table-column prop="name" label="歌名" width="400">
        </el-table-column>
        <el-table-column prop="singer" label="歌手" width="400">
        </el-table-column>
        <el-table-column prop="time" label="时长" width="200">
        </el-table-column>
        <el-table-column prop="play" label="播放" width="200">
          <template slot-scope="scope">
          <a href="javascript:;" @click="jump(scope.$index)">播放</a>
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
          :total="tableData.length">
        </el-pagination>
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
        // kword:'',
        kword:this.$route.query.kword,
        currentPage:1,
        pagesize:20,
        tableData:[],
      }
    },
    components:{
      myHeader,myFooter
    },
    methods:{
      jump(index){
        var n=parseInt(this.currentPage);
        var index=parseInt(index);
        if(n>=2){
          if(index==0){
            index=(n-1)*20;
          }else{
            index=(n-1)*20+index;
          }
        }
        var id=this.tableData[index].id;
        this.$router.push(`/song?id=${id}`)
      },
      getList(){
        this.axios.get(
          "https://api.itooi.cn/music/tencent/search?key=579621905&s="+this.kword+"&limit=100&offset=0&type=song"
        ).then(res=>{
          this.tableData=res.data.data;
        });
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      },
      // search(e){
      //   if(this.kword.trim()!=""){
      //     this.$router.push(`/search?kword=${this.kword}`)
      //   }
      // },
    },
    created(){
      this.getList();
    },
    watch:{
      $route(to,from){
        if(to.query.kword.trim()!=""){
          location.reload()
        }
      }
    }
  }
</script>

<style scoped>
  #search{
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
  /*.search{*/
  /*  width:600px;*/
  /*  margin:100px auto 0;*/
  /*}*/
  /*.search >>> input.el-input__inner{*/
  /*  border:1px solid #6f83ed;*/
  /*}*/
  table{
    width:1200px;
    margin:0 auto 80px;
    text-align:left;
  }
  table tr{
    border-bottom:1px solid #000;
  }
  table tr th{
    padding:10px 0;
  }
  table tr td{
    padding:10px 0;
  }
  .bgColor{
    background:#ddd;
  }
  table a{
    color:#555;
  }
  table tr:hover a{
    color:#6f83ed;
  }
</style>