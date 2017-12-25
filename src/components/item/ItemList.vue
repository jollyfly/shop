<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>商品列表</span>
      <el-button style="float: right; padding: 3px 0" type="text">添加产品</el-button>
    </div>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-select v-model="value" placeholder="商品类目">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-input  placeholder="关键词搜索"></el-input>
      </el-col>

      <el-col :span="3">
        <el-button type="primary">搜索</el-button>
      </el-col>
    </el-row>
    <hr>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column prop="id" label="编号"></el-table-column>

      <el-table-column prop="title" label="名称"></el-table-column>

      <el-table-column prop="category" label="类目"></el-table-column>

      <el-table-column prop="image" label="图片"></el-table-column>

      <el-table-column prop="price" label="价格"></el-table-column>

      <el-table-column prop="sellPoint" label="卖点"></el-table-column>

      <el-table-column prop="status" label="状态"></el-table-column>

      <el-table-column prop="createTime" label="创建时间"></el-table-column>



    </el-table>
    <div class="block">
      <el-pagination background
        :current-page="4"
        :page-sizes="[10, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </el-card>
</template>

<script>
  import ElCollapse from "element-ui/packages/collapse/src/collapse";

  export default {
    components: {ElCollapse},
    name: "item-list",
    data() {
      return {
        options: [],
        value: [],
        tableData: []
      }
    },
    mounted: function () {
      this.options = [{
        value:'all',
        label:'全部'
      },{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
      this.tableData = [{
        createTime: '2016-05-02',
        title: '旺仔牛奶',
        sellPoint: '上海市普陀区金沙江路 1518 弄',
        status:'正常'
      }]
    }

  }
</script>

<style scoped>

</style>
