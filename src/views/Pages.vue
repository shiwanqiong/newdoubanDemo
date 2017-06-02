<template>
  <div class="pages">
    <header></header>
    <router-view></router-view>
    <talion v-show="talion" @closeTalion="close"></talion>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
    import Header from '../components/Header.vue'
    import Talion from '../views/Talion.vue'
    export default{
        components:[Header,Talion],
        data(){
            return {
              talion:''
            }
        },
        methods:{
          open:function(){
            this.talion='open'
          },
          close:function(){
            this.talion='';
          }
        }
    }
</script>
