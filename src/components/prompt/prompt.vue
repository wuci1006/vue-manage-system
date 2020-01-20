<template>
	<div class="prompt">
		<div v-show="promptData.promptShow" id="propmt_mask"></div>
		<div v-show="promptData.promptShow" id="prompt_content">
			<div class="prompt_content_main">
				<div class="prompt_content_header">
					<div class="prompt_content_title">{{promptData.header_title}}</div>
					<div class="prompt_content_cancel" @click="promptData.promptShow=false">
						<img src="../../assets/images/icon_delete.png" alt="">
					</div>
				</div>
				<div class="prompt_content_body">
					<p>{{promptData.content}}</p>
				</div>
				<div class="prompt_content_footer" v-show="promptData.footerShow">
					<button class="prompt_content_btn btn_delete" @click="handleDelete">删除</button>
					<button class="prompt_content_btn btn_edit" @click="handleEdit">编辑</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				
			}
		},
		props:{
			promptData: {
                type: Object,
                default: '',
            }
		},
		methods:{
			//删除
			handleDelete(){
				this.$emit('dealDelete',this.promptData.id);
			},
			// 编辑
			handleEdit(){
				this.$emit('dealEdit',this.promptData.id)
			}
		}
	}
</script>

<style>
	#propmt_mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 998;
		background-color: rgba(55, 55, 55, .6)
	}

	#prompt_content {
		position: fixed;
		z-index: 999;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		border-radius: 6px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
	}

	.prompt_content_main {
		width: 400px;
	}

	/* 头部 */
	.prompt_content_header {
		border-bottom: 1px solid #e8eaec;
		padding: 15px;
		position: relative;
	}

	/* 内容 */
	.prompt_content_body {
		padding: 15px;
		font-size: 14px;
	}

	/* 尾部 */
	.prompt_content_footer {
		border-top: 1px solid #e8eaec;
		padding: 15px;
		text-align: right;
	}

	/* 头部标题 */
	.prompt_content_title {
		font-size: 14px;
		color: #17233d;
		font-weight: 700;
		height: 20px;
		line-height: 20px;
		display: inline-block;
		width: 93%;
	}

	/* 头部取消 */
	.prompt_content_cancel {
		height: 20px;
		position: absolute;
		right: 15px;
		top: 15px;
	}

	.prompt_content_cancel img {
		width: 20px;
		height: 20px;
	}

	/* 尾部按钮 */
	.prompt_content_btn {
		padding: 5px 15px;
		font-size: 12px;
		color: #fff;
		font-weight: 400;
		border-color: transparent;
		border-radius: 4px;
		border: none;
		text-align: center;

		line-height: 25px;
		cursor: pointer;
		outline: none;
	}
	/* 删除按钮 */
	.btn_delete {
		background-color: #ed4014;
		border-color: #ed4014;
	}
	/* 编辑按钮 */
	.btn_edit {
		background-color: #2d8cf0;
		border-color: #2d8cf0;
	}
</style>
