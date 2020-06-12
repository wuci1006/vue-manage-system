<template>
    <div class="systemUser mainList">
        <div class="topWrap">
            <el-form>
                <el-row>
                    <el-form-item label="关键词:" :style="{float:'left',width:'210px',margin:'0px 20px 0px 10px'}">
                        <el-input size="small" placeholder="请输入姓名、手机号、团队名称" v-model="keyWord" style="width:150px" clearable></el-input>
                    </el-form-item>

                   <el-form-item label="性别:" :style="{float:'left',width:'200px',margin:'0px 20px 0px 0px'}">
                        <el-select size="small" v-model="sexName" style="width:150px" placeholder="请选择" clearable>
                            <el-option v-for="item in sexList" :value="item.id" :key="item.id" :label="item.label"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="创建时间:" :style="{float:'left',width:'230px',margin:'0px 20px 0px 0px'}">
						<el-date-picker size="small" style="width:150px" v-model="starttime" type="date" format="yyyy-MM-dd"></el-date-picker>
                    </el-form-item>

					<el-button type="primary" size="small" icon="el-icon-search" @click="searchList()"
                        :style="{float:'left',margin:'0px 20px 0px 0px'}">查询</el-button>

					<el-button type="primary" size="small" icon="el-icon-circle-plus-outline" @click="handleAdd()"
						:style="{float:'left',margin:'0px 20px 0px 0px'}">添加</el-button>

					<el-button type="primary" size="small" icon="el-icon-upload2" @click="importFile()"
						:style="{float:'left',margin:'0px 20px 0px 0px'}">导入</el-button>

					<el-button type="primary" size="small" icon="el-icon-download" @click="exportFile()"
						:style="{float:'left',margin:'0px 20px 0px 0px'}">导出</el-button>
                </el-row>
            </el-form>
        </div>
		<div class="contentWrap">
            <div class="titleItem clearfix">
                <div class="titleColor"></div>
                <p class="titleText">角色列表</p>
            </div>
            <div class="table">
                <el-row>
					<el-table :data="tableData" stripe border style="width: 100%;text-align: center;">
            <el-table-column prop="num" label="编号"></el-table-column>
						<el-table-column prop="name" label="角色名称" style="text-align: center;"></el-table-column>
						<el-table-column prop="role" label="角色状态"></el-table-column>
						<el-table-column prop="status" label="角色说明"></el-table-column>
						<el-table-column prop="posttime" label="创建时间"></el-table-column>
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
					// {num:1,name: 'user',role: '管理员',status: '禁用',posttime:'2020-09-12 12:30'},
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
