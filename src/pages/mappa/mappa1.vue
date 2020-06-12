<template>
    <div class="home">
      <div class="home_content">
        <h2>暂未开发</h2>
        <!-- <div>
          <h3>子模块1</h3>
          <p>关于子模块的介绍1</p>
        </div> -->
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            //
        },
    }
</script>

<style lang="scss" scoped>
.home{
		margin:20px;
		background-color: #fff;
    .home_content{
    	padding:15px;
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
    }

	}

</style>
