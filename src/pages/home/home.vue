<template>
    <div class="home">
		<div class="home_content">
			<h2>模块</h2>
			<div>
				<h3>子模块1</h3>
				<p>关于子模块的介绍1</p>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
				// 轮播图模块,各种菜案模块,选项卡模块
				moduleArr:[
					{
						id:1,
						title:'图形管理',
						child:[
							{id:11,title:'饼图',desc:''},
							{id:11,title:'折线图',desc:''},
							{id:11,title:'柱状图',desc:''}
						],
					},
				]
            }
        }
    }
</script>

<style scoped>
	.home{
		margin:20px;
		background-color: #fff;
	}
	.home_content{
		padding:15px;
	}
	.home_content h2{
		padding:10px 0;
	}
	.home_content h3{
		padding:10px 0;
	}
	.home_content p{
		line-height: 25px;
		padding:10px 0;
		font-size:14px;
		color:#515a6e;
	}

</style>