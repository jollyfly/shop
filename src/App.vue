<template>
  <el-container>
    <el-header>
      <index-header></index-header>
    </el-header>
    <el-container>
      <el-aside width="200px" height="100%">
        <index-menu></index-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main style="background: #f1f2f7">
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import ElContainer from "element-ui/packages/container/src/main"
  import IndexHeader from "./components/IndexHeader"
  import IndexMenu from "./components/IndexMenu"


  export default {
    name: 'app',
    components: {
      IndexHeader,
      ElContainer,
      IndexMenu
    }
  }
</script>

<style>
  html, body ,section{
    height: 100%;
  }
</style>
