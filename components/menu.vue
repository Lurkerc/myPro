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
              <router-link class="ivu-menu-item" v-for="(cItem,cIndex) in item.children" :name="index + '-' + cIndex" :to="cItem.url" tag="li" active-class="ivu-menu-item-active ivu-menu-item-selected">{{ cItem.title }}</router-link>
            </ul>
        </Submenu>
    </Menu>
</template>

<script>
  export default {
    props: {
      // 简单验证 https://cn.vuejs.org/v2/guide/components.html#Prop-验证
      menu: Array
    }
  }
</script>
