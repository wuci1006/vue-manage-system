<template>
    <div class="systemUser mainList">
        <div class="topWrap">
            <el-form>
                <el-row>
                    <el-form-item label="关键词:" :style="{float:'left',width:'240px',margin:'0px 20px 0px 10px'}">
                        <el-input placeholder="请输入姓名、手机号、团队名称" v-model="keyWord" style="width:180px" clearable></el-input>
                    </el-form-item>

                   <el-form-item label="性别:" :style="{float:'left',width:'230px',margin:'0px 20px 0px 0px'}">
                        <el-select v-model="sexName" style="width:180px" placeholder="请选择" clearable>
                            <el-option v-for="item in sexList" :value="item.id" :key="item.id" :label="item.label"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="入驻时间:" :style="{float:'left',width:'260px',margin:'0px 20px 0px 0px'}">
						<el-date-picker style="width:180px" v-model="starttime" type="date" format="yyyy-MM-dd"></el-date-picker>
                    </el-form-item>
					
					<el-button type="primary" icon="el-icon-search" @click="searchList()"
                        :style="{float:'left',margin:'0px 20px 0px 0px'}">查询</el-button>
						
					<el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd()"
						:style="{float:'left',margin:'0px 20px 0px 0px'}">添加</el-button>
						
					<el-button type="primary" icon="el-icon-upload2" @click="importFile()"
						:style="{float:'left',margin:'0px 20px 0px 0px'}">导入</el-button>
						
					<el-button type="primary" icon="el-icon-download" @click="exportFile()"
						:style="{float:'left',margin:'0px 20px 0px 0px'}">导出</el-button>
                </el-row>
            </el-form>
        </div>
		<div class="contentWrap">
            <div class="titleItem clearfix">
                <div class="titleColor"></div>
                <p class="titleText">人员列表</p>
            </div>
            <div class="table">
                <el-row>
					<el-table :data="tableData" stripe border style="width: 100%;text-align: center;">
						<el-table-column prop="date" label="日期" style="text-align: center;"></el-table-column>
						<el-table-column prop="name" label="姓名"></el-table-column>
						<el-table-column prop="province" label="省份"></el-table-column>
						<el-table-column prop="city" label="市区"></el-table-column>
						<el-table-column prop="address" label="地址"></el-table-column>
						<el-table-column label="操作" width="150">
							<template slot-scope="scope">
								<el-button size="mini"  type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
                </el-row>
                <el-row :style="{margin: '20px 0px'}">
					<el-pagination :style="{float: 'right'}" @current-change="handleCurrentChange"
						 :page-size="pageSize" layout="total, prev, pager, next" :total="pageTotal"></el-pagination>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
				keyWord:'',
				sexName:'',
				sexList:[
					{id:'0',label:'男'},
					{id:'1',label:'女'},
				],
				starttime:'',
				tableData: [
					{date: '2016-05-02',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路1518',id: 2001}, 
					{date: '2016-05-04',name: '王小虎',province: '上海',city: '普陀区',address: '上海市普陀区金沙江路1517',id: 2002}, 
				],
				pageSize:10,//条数
				pageListRows:1,//页数
				pageTotal:0,//数据总数
            }
        },
		methods: {
			//获取数据
			handleList() {
				
			},
			//分页
			handleCurrentChange(index){
				console.log(index)
			},
			//查询
			searchList(){
				
			},
			//导入
			importFile(){
				
			},
			//导出
			exportFile(){
				
			},
			//添加
			handleAdd(){
				
			},	
			//编辑
			handleEdit(){
				
			},
			//删除
			handleDelete(){
				
			}
				
		},
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/list.scss';

</style>