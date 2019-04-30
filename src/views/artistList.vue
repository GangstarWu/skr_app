<template>
  <div>
  <div id="artistList">
    <my-header></my-header>
    <div class="bgImg"></div>
    <div class="top"></div>
<!--    歌手分类-->
    <el-tabs :tab-position="tabPosition" style="height: 1250px;">
<!--      内地歌手-->
      <el-tab-pane label="内地推荐">
        <div class="bottom">
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=薛之谦">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/xzq.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=薛之谦">薛之谦</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=李荣浩">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/lrh.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=李荣浩">李荣浩</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=张艺兴">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/zyx.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=张艺兴">张艺兴</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=李健">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/lj.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=李健">李健</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=陈雪凝">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/cxn.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=陈雪凝">陈雪凝</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=华晨宇">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/hcy.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=华晨宇">华晨宇</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=胡夏">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/hx.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=胡夏">胡夏</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=鹿晗">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/lh.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=鹿晗">鹿晗</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=李宇春">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/lyc.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=李宇春">李宇春</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=毛不易">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/mby.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=毛不易">毛不易</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=tfboys">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/tfboys.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=tfboys">TFBOYS</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=王菲">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/wf.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=王菲">王菲</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=吴亦凡">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/wyf.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=吴亦凡">吴亦凡</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=许嵩">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/xs.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=许嵩">许嵩</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=于文文">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/yww.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=于文文">于文文</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=周笔畅">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/zbc.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=周笔畅">周笔畅</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=张碧晨">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/zbic.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=张碧晨">张碧晨</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=张杰">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/zj.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=张杰">张杰</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=张靓颖">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/zly.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=张靓颖">张靓颖</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=庄心妍">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china1/zxy.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=庄心妍">庄心妍</router-link>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
<!--      港台歌手-->
      <el-tab-pane label="港台推荐">
        <div class="bottom">
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=周杰伦">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/zjl.jpg" alt="">
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
                <img src="img/artist/china2/cyx.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=陈奕迅">陈奕迅</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=张学友">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/zxy.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=张学友">张学友</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=林俊杰">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/ljj.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=林俊杰">林俊杰</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=王力宏">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/wlh.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=王力宏">王力宏</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=beyond">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/beyond.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=beyond">BEYOND</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=邓紫棋">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/dzq.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=邓紫棋">邓紫棋</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=刘德华">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/ldh.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=刘德华">刘德华</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=梁静茹">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/ljr.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=梁静茹">梁静茹</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=孙燕姿">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/syz.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=孙燕姿">孙燕姿</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=张信哲">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/zxz.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=张信哲">张信哲</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=杨千嬅">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/yqh.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=杨千嬅">杨千嬅</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=张国荣">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/zgr.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=张国荣">张国荣</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=蔡依林">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/cyl.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=蔡依林">蔡依林</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=潘玮柏">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/pwb.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=潘玮柏">潘玮柏</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=张敬轩">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/zjx.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=张敬轩">张敬轩</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=萧敬腾">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/xjt.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=萧敬腾">萧敬腾</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=林宥嘉">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/lyj.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=林宥嘉">林宥嘉</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=杨宗纬">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/yzw.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=杨宗纬">杨宗纬</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=A-Lin">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/china2/alin.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=A-Lin">A-Lin</router-link>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
<!--      欧美歌手-->
      <el-tab-pane label="欧美推荐">
        <div class="bottom">
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Taylor Swift">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/ts.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Taylor Swift">Taylor Swift</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Alan Walker">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/aw.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Alan Walker">Alan Walker</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=The Chainsmokers">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/tc.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=The Chainsmokers">The Chainsmokers</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Charlie Puth">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/cp.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Charlie Puth">Charlie Puth</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Justin Bieber">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/jb.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Justin Bieber">Justin Bieber</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Selena Gomez">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/sg.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Selena Gomez">Selena Gomez</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Ed Sheeran">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/ed.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Ed Sheeran">Ed Sheeran</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Maroon 5">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/m5.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Maroon 5">Maroon 5</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Westlife">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/wl.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Westlife">Westlife</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Adele">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/ad.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Adele">Adele</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Lady Gaga">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/lg.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Lady Gaga">Lady Gaga</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Bruno Mars">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/bm.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Bruno Mars">Bruno Mars</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Eminem">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/em.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Eminem">Eminem</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Rihanna
">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/rh.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Rihanna
">Rihanna
                </router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=OneRepublic">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/or.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=OneRepublic">OneRepublic</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Michael Jackson">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/mj.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Michael Jackson">Michael Jackson</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Avril Lavigne">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/al.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Avril Lavigne">Avril Lavigne</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Flo Rida">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/fr.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Flo Rida">Flo Rida</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Justin Timberlake">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/jt.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Justin Timberlake">Justin Timberlake</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Coldplay">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/america/cplay.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Coldplay">Coldplay</router-link>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
<!--      日本歌手-->
      <el-tab-pane label="日本推荐">
        <div class="bottom">
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=DAISHI DANCE">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/dd.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=DAISHI DANCE">DAISHI DANCE</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=花澤香菜">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/hz.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=花澤香菜">花澤香菜</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=majiko">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/ma.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=majiko">majiko</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=久石譲">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/jsr.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=久石譲">久石譲</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=RADWIMPS">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/ra.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=RADWIMPS">RADWIMPS</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=澤野弘之">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/zy.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=澤野弘之">澤野弘之</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=Aimer">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/ai.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=Aimer">Aimer</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=DJ OKAWARI ">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/dj.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=DJ OKAWARI">DJ OKAWARI </router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=GARNiDELiA">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/ga.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=GARNiDELiA">GARNiDELiA</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=高梨康治">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/gl.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=高梨康治">高梨康治</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=いきものがかり">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/sw.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=いきものがかり">いきものがかり</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=WANDS">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/wa.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=WANDS">WANDS</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=浜崎あゆみ">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/bqb.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=浜崎あゆみ">浜崎あゆみ</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=中島美嘉">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/zd.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=中島美嘉">中島美嘉
                </router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=初音ミク">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/cy.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=初音ミク">初音ミク</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=宗次郎">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/zcl.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=宗次郎">宗次郎</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=倉木麻衣">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/cm.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=倉木麻衣">倉木麻衣</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=鹿乃">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/ln.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=鹿乃">鹿乃</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=BAAD">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/ba.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=BAAD">BAAD</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=moumoon">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/japan/mo.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=moumoon">moumoon</router-link>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
<!--      韩国歌手-->
      <el-tab-pane label="韩国推荐">
        <div class="bottom">
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=BIGBANG">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/bb.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=BIGBANG">BIGBANG</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=BLACKPINK">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/bp.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=BLACKPINK">BLACKPINK</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=G-DRAGON">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/gd.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=G-DRAGON">G-DRAGON</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=MAMAMOO">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/ma.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=CharlieMAMAMOO">MAMAMOO</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=iKON">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/ik.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=iKON">iKON</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=TWICE">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/tw.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=TWICE">TWICE</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=휘성">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/hx.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=휘성">휘성</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=灿烈">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/cl.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=灿烈">灿烈 </router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=EXO">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/exo.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=EXO">EXO</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=WINNER">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/wi.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=WINNER">WINNER</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=태연">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/ty.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=태연">태연</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=에일리">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/al.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=에일리">에일리</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=BTS">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/bts.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=BTS">BTS</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=SUPER JUNIOR-D&E">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/sj.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=SUPER JUNIOR-D&E">SUPER JUNIOR-D&E
                </router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=PSY">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/psy.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=PSY">PSY</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=刘宪华">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/lxh.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=刘宪华">刘宪华</router-link>
              </div>
            </li>
          </ul>
          <ul>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=소녀시대">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/sn.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=소녀시대">소녀시대</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=소유">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/zy.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=소유">소유</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=CHEN">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/ch.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=CHEN">CHEN</router-link>
              </div>
            </li>
            <li class="artist">
              <div class="mask">
                <router-link to="/search?kword=태양">
                  <i class="el-icon-view"></i>
                </router-link>
              </div>
              <div class="artist-img">
                <img src="img/artist/korea/taiy.jpg" alt="">
              </div>
              <div class="artist-name">
                <router-link to="/search?kword=태양">태양</router-link>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
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
        tabPosition: 'left',
        kword:''
      }
    },
    components:{
      myHeader,
      myFooter
    },
    methods:{
      // search(e){
      //   if(this.kword.trim()!=""){
      //     this.$router.push(`/search?kword=${this.kword}`)
      //   }
      // },
    }
  }
</script>

<style scoped>
  #artistList{
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
  .bottom ul{
    margin-left:80px;
  }
</style>