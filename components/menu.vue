<template>
    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <div class="layout-logo-left"></div>
        <Submenu v-for="(item,index) in menu" :name="index + 1">
            <template slot="title">
                <Icon :type="item.icon"></Icon>
                {{ item.title }}
            </template>
            <!-- 路由 https://router.vuejs.org/zh-cn/api/router-link.html -->
            <ul class="ivu-menu">
              <router-link class="ivu-menu-item" v-for="(cItem,cIndex) in item.children" :name="index + '-' + cIndex" :to="cItem.url" tag="li" active-class="ivu-menu-item-active ivu-menu-item-selected"><a>{{ cItem.title }}</a></router-link>
            </ul>
        </Submenu>
    </Menu>
</template>

<style lang="less">
  .ivu-menu-item{
    &.ivu-menu-item-selected,&:hover{
      a{color: #fff;}
    }
    a{color: #9ea7b4;display: block;}
  }
</style>

<script>
  export default {
    props: {
      // 简单验证 https://cn.vuejs.org/v2/guide/components.html#Prop-验证
      menu: Array
    }
  }
</script>
