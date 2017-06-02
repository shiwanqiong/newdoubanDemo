<template>
  <div class="group">
      <group title="租房找室友">
        <a href="##" class="list-link" slot="more">更多相关小组</a>
      </group>
      <group title="来聊五块钱">
        <a href="##" class="list-link" slot="more">来聊五块钱</a>
      </group>
      <group title="买买买">
        <a href="##" class="list-link" slot="more">更多相关小组</a>
      </group>
      <download></download>
  </div>
</template>
<style lang="scss" scoped>
  .list-link {
    display: block;
    margin-bottom: 3rem;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
  }
  .user-bar {
    margin-bottom: 1.5rem;
  }
</style>
<script>
    import Group from '../components/Group.vue'
    import Download from '../components/Download.vue'
    export default{
        components:[Group,Download],
        data(){
            return {}
        }
    }
</script>
