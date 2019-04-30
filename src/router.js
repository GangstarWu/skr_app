import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import header from './components/header'
import artistList from './views/artistList'
import footer from './components/footer'
import songList from './views/songList'
import song from './views/song'
import search from './views/search'
import test from './components/test'
import songListDetails from './views/songListDetails'
import albumList from './views/albumList'
import albumDetails from './views/albumDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:index},
    {path:'/index',component:index},
    {path:'/header',component:header},
    {path:'/artistList',name:'artistList',component:artistList},
    {path:'/footer',component:footer},
    {path:'/songList',component:songList},
    {path:'/song',component:song},
    {path:'/search',component:search},
    {path:'/test',component:test},
    {path:'/songListDetails',component:songListDetails},
    {path:'/albumList',component:albumList},
    {path:'/albumDetails',component:albumDetails},
  ]
})