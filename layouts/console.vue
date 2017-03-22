<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <my-menu :menu="MyMenuObj"/>
            </i-col>
            <i-col span="19">
                <div class="layout-header"></div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <nuxt/>
                </div>
                <my-copy/>
            </i-col>
        </Row>
    </div>
</template>

<style src="iview/dist/styles/iview.css"></style>

<style scoped>
    html,body{height: 100%;}
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .ivu-row-flex{height: 100%;}
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 80vh;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
</style>

<script>
  import MyCopy from '~components/copy'
  import MyMenu from '~components/menu'

  export default {
    data () {
      return {
        MyMenuObj: [
          {
            title: '内容管理',
            icon: 'ios-paper',
            children: [
              {
                title: '文章管理',
                url: '/console/artical/'
              },
              {
                title: '评论管理',
                url: '/console/comment/'
              },
              {
                title: '举报管理',
                url: '/console/report/'
              }
            ]
          },
          {
            title: '用户管理',
            icon: 'ios-people',
            children: [
              {
                title: '新增用户',
                url: '/console/user/add/'
              },
              {
                title: '活跃用户',
                url: '/console/user/666/'
              }
            ]
          }
        ]
      }
    },
    components: {
      MyCopy,
      MyMenu
    }
  }
</script>
