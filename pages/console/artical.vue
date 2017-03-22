<template>
    <div class="layout-content-main">
        <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
  export default {
    /* page config */
    // 使用layouts/console.vue 作为视图模版
    layout: 'console',
    head () {
      return {
        title: this.title
      }
    },
    /* vue */
    data () {
      return {
        title: '文章管理 - 控制台',
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    }
  }
</script>
