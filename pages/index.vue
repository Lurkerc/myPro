<template>
  <section class="main">
    <div class="btnBox">
      <nuxt-link class="button" to="/console/">前往控制台</nuxt-link>
    </div>
  </section>
</template>

<style lang="less">
  .btnBox{padding:210px;}
  .button{width:100px;height:40px;display:block;line-height:40px;text-decoration: none;color:#39f;text-align:center;border:1px solid #39f;margin:0 auto;
    &:hover{color:#fff;background-color:#39f;}
  }
</style>
