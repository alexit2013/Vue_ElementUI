<template>
  <div>
      <el-row>
          <el-col :span="22" :offset="1" style="height: 100%; margin-top: 10px;">

              <fieldset class="fieldset">

                  <legend class="legend">精确查找</legend>

                  <div class="field-box">

                      <!-- 表单组件 -->
                      <el-form :inline="true" ref="roleForm" :model="roleForm">

                          <el-form-item label="角色名称" prop="userName" :rules="[]" style="margin-left: 10px;">
                              <el-input v-model="roleForm.userName" placeholder="请输入名称"></el-input>
                          </el-form-item>

                          <el-form-item label="角色状态" style="margin-left: 50px;" prop="userState" :rules="[]">
                              <el-select v-model="roleForm.userState" placeholder="请选择状态">
                                  <el-option label="有效" value="1"></el-option>
                                  <el-option label="无效" value="2"></el-option>
                              </el-select>
                          </el-form-item>

                          <el-form-item>
                              <el-button type="primary" @click="onSubmit">查询</el-button>
                              <el-button @click="resetForm('roleForm')">重置</el-button>
                          </el-form-item>

                      </el-form>

                  </div>

              </fieldset>

          </el-col>
      </el-row>

      <!-- 表格组件 -->
      <el-row>
          <el-col :span="22" :offset="1" style="height: 100%; margin-top: 10px;">

              <!-- 自定义表格操作行 -->
              <div class="head-box">
                  <div class="item-box">
                    <span class="mg-r-15 head-item" @click.stop.prevent="tableAdd"><i class="fa fa-plus-square menu-icon vam" aria-hidden="true"></i>添加</span>
                    <span class="mg-r-15 head-item" @click.stop.prevent="tableEdit"><i class="fa fa-pencil-square menu-icon vam" aria-hidden="true"></i>编辑</span>
                    <span class="mg-r-15 head-item" @click.stop.prevent="tableRemove"><i class="fa fa-window-close menu-icon vam" aria-hidden="true"></i>删除</span>
                    <span class="mg-r-15 head-item" @click.stop.prevent="tableSave"><i class="fa fa-check-square menu-icon vam" aria-hidden="true"></i>保存</span>
                  </div>
              </div>

              <el-table ref="userTable" @row-click="rowClick" :data="tableData" @selection-change="handleSelectionChange" v-loading="uTableLoading" element-loading-text="数据加载中" border height="380">

                  <el-table-column type="selection" width="55"></el-table-column>

                  <el-table-column prop="name" label="姓名" width="120"></el-table-column>

                  <el-table-column show-overflow-tooltip prop="address" label="地址" width="260"></el-table-column>

                  <el-table-column prop="tag" label="活动区域" width="120"
                          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                          filter-placement="bottom-end">
                      <template scope="scope">
                          <el-tag
                                  :type="scope.row.tag === '家' ? 'primary' : 'success'"
                                  close-transition>{{scope.row.tag}}
                          </el-tag>
                      </template>
                  </el-table-column>

                  <el-table-column label="日期" width="180">
                      <template scope="scope">
                          <el-icon name="time"></el-icon>
                          <span style="margin-left: 10px">{{ scope.row.date }}</span>
                      </template>
                  </el-table-column>

                  <el-table-column label="标签" width="150">
                      <template scope="scope">
                          <el-popover trigger="hover" placement="top">
                              <p>姓名: {{ scope.row.name }}</p>
                              <p>住址: {{ scope.row.address }}</p>
                              <div slot="reference" class="name-wrapper">
                                  <el-tag>{{ scope.row.name }}</el-tag>
                              </div>
                          </el-popover>
                      </template>
                  </el-table-column>

                  <el-table-column label="操作">
                      <template scope="scope">
                          <el-button
                                  size="small"
                                  @click="handleEdit(scope.$index, scope.row)">编辑
                          </el-button>
                          <el-button
                                  size="small"
                                  type="danger"
                                  @click="handleDelete(scope.$index, scope.row)">删除
                          </el-button>
                      </template>
                  </el-table-column>
              </el-table>

          </el-col>
      </el-row>

      <!-- 分页组件 -->
      <el-row class="mg-b-10">
          <el-col :span="10" :offset="11" style="height: 100%; margin-top: 20px;">
              <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="defaultPage"
                      :page-sizes="[10, 15, 20]"
                      :page-size="10"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="365">
              </el-pagination>
          </el-col>
      </el-row>

      <!-- 用户信息编辑组件 -->
      <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" :closeOnClickModal="false" >
          <el-form :model="dialogForm">
              <el-form-item label="姓名" label-width="120px">
                  <el-input v-model="dialogForm.name" auto-complete="off" style="width: 50%;"></el-input>
              </el-form-item>
              <el-form-item  label="日期" label-width="120px">
                  <el-date-picker type="date" placeholder="选择日期" v-model="dialogForm.date" style="width: 50%;"></el-date-picker>
              </el-form-item>
              <el-form-item label="活动区域" label-width="120px">
                  <el-select v-model="dialogForm.tag" placeholder="请选择活动区域">
                      <el-option label="家" value="1"></el-option>
                      <el-option label="公司" value="2"></el-option>
                  </el-select>
              </el-form-item>

              <el-form-item label="地址" label-width="120px">
                  <el-input type="textarea" v-model="dialogForm.address" :autosize="{ minRows: 4, maxRows: 4 }" style="width:70%;"></el-input>
              </el-form-item>

          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogSubmit" :loading="submitBtnState">确 定</el-button>
          </div>
      </el-dialog>

  </div>
</template>

<script>
  import mock from 'src/mock/mock'
  import { getAllUserInfo } from 'api/user/userAPI'
export default {
  components: {  },
  name: 'RoleManage',
  props:{
    age: {
      type: Number,
      default: 0,
      required: false,
      validator: function (value) {
        return value >= 0;
      }
    }
  },
  data () {
    return {
        baseUrl: '',  //表格数据源的默认接口地址
        uTableLoading: false, //是否显示表格的正在加载层
        tableData: [], //表格数据
        selectedData: [], //当前选中的行数据

        defaultPage: 1, // 初始默认第几页
        currPage: this.defaultPage, // 当前第几页
        pageSize: 10, // 当前每页显示几条数据

        dialogTitle: '修改信息', // 编辑窗的Title
        dialogFormVisible: false, //是否显示编辑窗组件
        submitBtnState: false, //编辑窗提交按钮加载状态
        dialogForm: {  //编辑窗表单组件数据模板
            date: '',
            name: '',
            address: '',
            tag: ''
        },

        roleForm: { //搜索表单组件数据模板
          userName: '',
          userState: ''
        }
    }
  },
  mounted: function () {

  },
  created: function () {
    mock();
    this.tableInit();
  },
  methods: {
    tableInit() { // 页面表格加载, 调用API，传入页面 this.baseUrl, this.currPage, this.pageSize

      var _this = this;
      this.uTableLoading = true;

      /*this.$store.dispatch('getAllUserInfo').then((response)=>{
        alert(JSON.stringify(response.data))
      }).catch((err)=>{
          alert(err)
      });*/

      /*getAllUserInfo('param').then((response) => {
        alert(JSON.stringify(response.data));
      }).catch((err) => {
        alert(err);
      });*/

      $.ajax({
        url: `${process.env.BASE_API}/getAllUserInfo`,
        type:'POST',
        async:true,
        dataType:'json',
        success:function(data){
          _this.tableData = data.UserInfo;
        },
        complete:function(){
          _this.uTableLoading = false;
        }
      });
    },
    onSubmit() {  // 表单提交事件
        alert('submit');
    },
    resetForm(formName) {  // 表单重置事件
      this.$refs[formName].resetFields();
    },
    handleSelectionChange: function(val){  // 选中行改变事件
        this.selectedData = val;
    },
    handleEdit(index, row) {  // 编辑按钮点击事件 当前行索引0开始、行JSON对象
      this.dialogTitle = "编辑信息";
      this.dialogForm.name = row.name;
      this.dialogForm.address = row.address;
      this.dialogForm.date = row.date;
      this.dialogForm.tag = row.tag;
      this.dialogFormVisible = true;
    },
    dialogSubmit: function () {  // 编辑窗口提交按钮事件
        this.submitBtnState = true;

        // 进行添加操作
        if(this.dialogTitle==='添加信息'){
          //this.dialogForm
          setTimeout(()=>{
            this.dialogFormVisible = false;
            this.submitBtnState = false;
            this.$message({
              showClose: true,
              message: '信息添加成功！',
              type: 'success'
            });
          }, 3000);
        }

        // 进行修改操作
        if(this.dialogTitle==='编辑信息'){
          //this.dialogForm
          setTimeout(()=>{
            this.dialogFormVisible = false;
            this.submitBtnState = false;
            this.$message({
              showClose: true,
              message: '信息修改成功！',
              type: 'success'
            });
          }, 3000);
        }


    },
    handleDelete(index, row) {  //删除按钮点击事件
      //console.log(index, row);
    },
    handleSizeChange(size){  //size变化
      this.pageSize = size;
      this.tableInit();
    },
    handleCurrentChange(currentPage){   //page变化
      this.currPage = currentPage;
      mock();
      this.tableInit();
    },
    rowClick: function (row, event, column) {  // row点击事件：切换checkbox选中状态
      this.$refs['userTable'].toggleRowSelection(row);
    },

    tableAdd: function () {  // 表头添加
      this.dialogTitle = "添加信息";
      this.dialogForm.name = '';
      this.dialogForm.address = '';
      this.dialogForm.date = '';
      this.dialogForm.tag = '';
      this.dialogFormVisible = true;
    },
    tableEdit: function () {  // 表头编辑

      // 当前选中0条数据
      if(!this.selectedData.length){
        this.$message({
          showClose: true,
          message: '请先选择一条信息！'
        });
        return;
      }

      // 当前选中数据超过1条
      if(this.selectedData.length > 1){
        this.$message({
          showClose: true,
          message: '最多选择一条数据编辑！'
        });
        return;
      }

      var item = this.selectedData[0];
      this.dialogTitle = "编辑信息";
      this.dialogForm.name = item.name;
      this.dialogForm.address = item.address;
      this.dialogForm.date = item.date;
      this.dialogForm.tag = item.tag;
      this.dialogFormVisible = true;
    },
    tableRemove: function () {  // 表头删除
      // 当前选中0条数据
      if(!this.selectedData.length){
        this.$message({
          showClose: true,
          message: '请先选择一条信息！'
        });
        return;
      }

      this.$confirm('是否删除信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.tableInit();
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    tableSave: function () {  // 表头保存
      alert('保存');
    }


  }
}

</script>

<style scoped>

  .fieldset{
    margin-bottom: 10px;
    padding: 0;
    border: 1px solid #e2e2e2;
    min-height: 80px;
  }

  .legend{
    margin-left: 20px;
    padding: 0 10px;
    font-weight: 300;
    color: #bbbbbb;
    font-size: 15px;
  }

  .field-box{
    padding: 15px 0 0 30px;
  }

  .menu-icon{
    display: inline-block;
    font-size: 20px;
    margin: 0 5px 0 0;
    color: #324157;
  }

  .head-box{
    position: relative;
    height: 35px;
    border-top: 1px solid #dfe6ec;
    border-left: 1px solid #dfe6ec;
    border-right: 1px solid #dfe6ec;
    font-size: 14px;
    color: #1f2d3d;
  }

  .item-box{
    position: absolute;
    right: 15px;
  }

  .head-item{
    line-height: 35px;
    display: inline-block;
    cursor: pointer;
  }


</style>
