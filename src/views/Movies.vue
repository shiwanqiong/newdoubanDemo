<template>
  <div class="movie has-header">
    <scroller title="影院热映" type="hasCover"></scroller>
    <scroller title="免费在线观影" type="hasCover"></scroller>
    <scroller title="新片速递" type="hasCover"></scroller>
    <scroller title="发现好电影" type="onlyString"></scroller>
    <type></type>
    <download></download>
  </div>
</template>
<style lang="scss" scoped></style>
<script>
    import Scroller from '../components/Scroller'
    import Type from '../components/Type.vue'
    import Download from '../components/Download.vue'
    export default{
        components:[Scroller,Type,Download],
        data(){
            return {}
        }
    }
</script>
