<template>
  <div class="sub-nav">
    <div class="navBottom" v-if="mold==='navBottom'">
      <div class="nav-item">
        <router-link :to="">注册账号</router-link>
        <template>
          <a href="##" @click.prevent="logout">退出登录</a>
        </template>
        <template>
          <router-link :to="{}" replace>登录豆瓣</router-link>
        </template>
      </div>
      <div class="nav-item">
        <a href="https://movie.douban.com/">使用桌面版</a>
        <a href="#">使用豆瓣App</a>
      </div>
    </div>
    <div class="quickNav" v-if="mold==='quickNav'">
      <ul>
        <li>
          <router-link :to="{name:'movie'}">影院热映</router-link>
        </li>
        <li>
          <router-link :to="{name:'broadcast'}">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link :to="">注册账号</router-link>
        </li>
        <li>
          <template>
            <a href="#" @click.prevent="logout()">退出登录</a>
          </template>
          <template>
            <router-link :to="{}">登录豆瓣</router-link>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
    export default{
        props:{
          mold:{
            type:String,
            default:'quickNav'
          }
        },
        data(){
            return {}
        },
        methods:{
          logout(){

          },
          create(){

          }
        }
    }
</script>
