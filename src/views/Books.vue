<template>
  <div class="movie-view has-header">
    <scroller title="最受关注图书|虚构类" type="hasCover"></scroller>
    <scroller title="最受关注图书|非虚构类" type="hasCover"></scroller>
    <scroller title="豆瓣纸书" type="hasCover">
      <div class="promItem" slot="promItem">
        <img class="corver" src="../assets/book_zw.jpg" alt="">
        <div class="content">
          <span class="price">￥68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物宝典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title="发现好书" type="onlyString"></scroller>
    <type></type>
    <dowmload></dowmload>
  </div>
</template>
<style lang="scss" scoped>
  .promItem {
    overflow: hidden;
    margin: 1.6rem 1.8rem 0.8rem 1.6rem;
  }
  .corver {
    float: left;
    width: 10rem;
    margin-right: 1.5rem;
  }

  .content {
    margin-right: 1rem;
  }

  .name {
    font-size: 2rem;
    color: #494949;
    margin: 1rem;
    max-width: 100%;
    line-height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .price {
    float: right;
    color: #E76648;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  .info {
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.5;
    color: #9B9B9B;
  }
</style>
<script>
    import Scroller from '../components/Scroller.vue'
    import Type from '../components/Type.vue'
    import Download from '../components/Download.vue'
    export default{
        components:[Scroller,Type,Download],
        data(){
            return {}
        }
    }
</script>
