<template>
  <el-container>
    <el-header>
      <index-header></index-header>
    </el-header>
    <el-container>
      <el-aside width="250px" height="100%">
        <index-menu></index-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import IndexMenu from './components/IndexMenu'
  import ElContainer from "element-ui/packages/container/src/main";
  import IndexHeader from "./components/IndexHeader";
  import ItemList from "./components/item/ItemList";


  export default {
    name: 'app',
    components: {
      ItemList,
      IndexHeader,
      ElContainer,
      IndexMenu,

    }
  }
</script>

<style>
  html, body ,section{
    height: 100%;
  }
</style>
