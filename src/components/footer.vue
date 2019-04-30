<template>
  <footer class="footer">
    <ul class="foot_nav">
      <li><router-link to="/index">关于skr</router-link></li>
      <li><router-link to="/index">加入我们</router-link></li>
      <li><router-link to="/index">联系我们</router-link></li>
      <li><router-link to="/index">隐私政策</router-link></li>
    </ul>
    <div class="code">
      <el-button type="text" @click="centerDialogVisible = true"><img src="img/ios.png" alt=""></el-button>
      <el-dialog
        title=""
        :visible.sync="centerDialogVisible"
        width="34%"
        center show-close>
        <img src="img/code.png" alt="">
      </el-dialog>
      <el-button type="text" @click="centerDialogVisible = true"><img src="img/android.png" alt=""></el-button>
      <el-dialog
        title=""
        :visible.sync="centerDialogVisible"
        width="34%"
        center>
        <img src="img/code.png" alt="">
      </el-dialog>
    </div>
    <p class="copyRight">
      ©product by Gangstar
    </p>
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        centerDialogVisible: false
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .footer{
    height:250px;
    background:#6f83ed;
    color:#fff;
    overflow:hidden;
  }
  .footer a{
    color:#fff;
  }
  .foot_nav{
    width:600px;
    padding:0 50px;
    margin:30px auto;
    display:flex;
    justify-content:space-between;
  }
  .code{
    box-sizing:border-box;
    margin:0 auto 30px;
    display:flex;
    justify-content:space-between;
    width:1200px;
    padding:0 400px;
  }
  .code .el-button{
    width:150px;
    height:54px;
    border:none;
    padding:0;
    margin:0;
  }
  .code .el-button img{
    width:100%;
  }
  .copyRight{
    text-align:center;
    margin:0;
  }
</style>