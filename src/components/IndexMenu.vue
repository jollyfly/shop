<template>
  <div id="slider">
    <i class="sideMenu el-icon-menu" style="color:#eee; margin:10px 2px;">
      欢迎系统管理员：清风抚雪</i>
    <el-menu default-active="1-1"  unique-opened background-color="#545c64"
             text-color="#fff" router style="border:0"
             active-text-color="#409EFF">

      <el-submenu :index="submenu.index" v-for="submenu in menuData" :data="submenu" :key="submenu.index">
        <template slot="title">
          <i :class="submenu.icon"></i>
          <span>{{submenu.title}}</span>
        </template>
        <el-menu-item v-for="menuItem in submenu.children" :data="menuItem" :key="menuItem.index"
                      :route="{path:menuItem.uri}" :index="menuItem.index">{{menuItem.title}}
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        menuData: []
      }
    },
    created: function () {
      this.menuData = [{
        index: '1',
        icon: 'el-icon-location',
        title: '商品管理',
        children: [{
          index: '1-1',
          title: '商品列表',
          icon: '',
          uri: '/item/list'
        }, {
          index: '1-2',
          title: '商品分类',
          icon: '',
          uri: '/item/category'
        }, {
          index: '1-3',
          title: '用户评论',
          icon: '',
          uri: '/item/comment'
        }, {
          index: '1-4',
          title: '库存管理',
          icon: '',
          uri: '/item/stock'
        }]
      }, {
        index: '2',
        icon: 'el-icon-location',
        title: '订单管理',
        children: [{
          index: '2-1',
          title: '商品列表',
          icon: '',
          uri: '/item/list'
        }]

      }]
    },
    methods: {

    }
  };
</script>
<style>
  #slider {
    background: #2a3542;
    font-size: 10px;
    height: 100%;
  }
</style>
