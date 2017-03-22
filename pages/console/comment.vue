<template>
    <div class="layout-content-main">{{ title }}</div>
</template>

<script>
  export default {
    /* page config */
    // 使用layouts/console.vue 作为视图模版
    layout: 'console',
    head () {
      return {
        title: this.title,
        value: ''
      }
    },
    /* vue */
    data () {
      return {
        title: '评论管理 - 控制台'
      }
    }
  }
</script>
