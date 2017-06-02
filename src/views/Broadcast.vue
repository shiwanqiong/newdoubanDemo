<template>
  <div class="status has-header">
    <div class="content-list">
      <card mold="quote" v-for="item in items" :key="item"></card>
      <a href="#" class="list-link">显示更多广播</a>
    </div>
    <download></download>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
    import Card from '../components/Card.vue'
    import Download from '../components/Download.vue'
    export default{
        components:[Card,Download],
        data(){
            return {
              items:new Array(10)
            }
        }
    }
</script>
