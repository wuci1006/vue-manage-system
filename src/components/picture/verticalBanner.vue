<template>
    <div class="ag7-main">
    	<div class="ag7-bannerslide">
    		<ul class="slidebox">
    			<li v-for="(i,index) in bannerList" :key="i.id">
                    <a><img :src="i.src"></a>
                </li>
    		</ul>
    		<div class="slideinfo">
    			<div class="slidetitle">
    				<h2></h2>
    			</div>
    			<div class="slidelist">
    				<ul>
    					<li v-for="(i,index) in bannerList" :key="i.id"
                            :data-h1="i.text">{{i.title}}</li>
    				</ul>
    				<span class="mask"></span>
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
import '../../assets/banner/jquery.easing.min.js';
import '../../assets/banner/banner.js';
export default {
    data() {
        return {
            bannerList:[
                {id:1,title:'动物',text:'图片1',src:require('../../assets/images/picture/a1.png')},
                {id:2,title:'风景',text:'图片2',src:require('../../assets/images/picture/a2.png')},
                {id:3,title:'户外',text:'图片3',src:require('../../assets/images/picture/a3.png')},
                {id:4,title:'骑车',text:'图片4',src:require('../../assets/images/picture/a4.png')},
            ],
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
    },
}
</script>

<style>
    @import url("../../assets/style/banner.css");

</style>
