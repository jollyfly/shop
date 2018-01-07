<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品列表</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">添加产品</el-button>
      </div>
      <el-row :gutter="20">
        <el-col :span="5">
          <el-select v-model="value" placeholder="商品类目" value="所有">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-input placeholder="关键词搜索"/>
        </el-col>

        <el-col :span="3">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>
      <hr>
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column type="selection" width="55"/>

        <el-table-column prop="id" label="编号"/>

        <el-table-column prop="title" label="名称"/>

        <el-table-column prop="category" label="类目"/>

        <el-table-column prop="image" label="图片"/>

        <el-table-column prop="price" label="价格"/>

        <el-table-column prop="sellPoint" label="卖点"/>

        <el-table-column prop="status" label="状态"/>

        <el-table-column prop="createTime" label="创建时间"/>

      </el-table>
      <div class="block">
        <el-pagination background
                       :current-page="1"
                       :page-sizes="[10, 50, 100]"
                       :page-size="10"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="400">
        </el-pagination>
      </div>
    </el-card>
    <el-dialog title="新增商品" :visible.sync="dialogFormVisible">
      <el-form :model="item">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="item.title" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="item.name" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="商品类别" :label-width="formLabelWidth">
          <el-select v-model="item.category" placeholder="请选择商品类别" value="">
            <el-option label="区域一" value="shanghai"/>
            <el-option label="区域二" value="beijing"/>
          </el-select>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="item.price" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="卖点" :label-width="formLabelWidth">
          <el-input v-model="item.sellPoint" auto-complete="off"/>
        </el-form-item>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ElCollapse from "element-ui/packages/collapse/src/collapse";
  import ElForm from "element-ui/packages/form/src/form";

  export default {
    components: {
      ElForm,
      ElCollapse
    },
    name: "item-list",
    data() {
      return {
        options: [],
        value: [],
        tableData: [],
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        item:{}
      }
    },
    mounted: function () {
      this.options = [{
        value: 'all',
        label: '全部'
      }, {
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
        status: '正常'
      },{
        createTime: '2016-05-02',
        title: '旺仔牛奶',
        sellPoint: '上海市普陀区金沙江路 1518 弄',
        status: '正常'
      }]
    }

  }
</script>

<style scoped>

</style>
