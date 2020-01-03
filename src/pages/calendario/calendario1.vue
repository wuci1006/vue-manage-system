<template>
    <div class="calendario">
        <div class="calendar">
			<calendarList ref="calendarChild"></calendarList>
        </div>
    </div>
</template>

<script>
	import calendarList from "../../components/calendar/calendar.vue";//日历
    export default {
		components: {
            calendarList
        },
        data() {
            return {
				monthData: [],
                msg: 'Welcome to Your Vue.js App'
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

<style lang="scss" scoped>
	.calendario{
		margin:15px;
		background-color: #fff;
	}
</style>
<style>
	@import '../../assets/style/calendar.css';
     /*重大事件背景色*/

     .zhongdabgc {
        /* background-color: #fda39e !important; */
    }

    /*上级检修背景色*/

    .peibgc {
        /* background-color: #9ec1fd !important; */
    }

    /*投运停电背景色*/

    .touyunbgc {
        /* background-color: #9ec1fd !important; */
    }

    /*限制条件背景色*/

    .xiannamebgc {
        /* background-color: #faa700 !important; */
    }

    .zhoubgc {
        /* background-color: #9ec1fd !important; */
    }

    /*检修计划1背景色*/

    .plan1bgc {
        /* background-color: #199c57 !important; */
    }

    .plan2bgc {
        /* background-color: #16bb28 !important; */
    }

    .plan3bgc {
        /* background-color: #1be431 !important; */
    }

    .plan4bgc {
        /* background-color: #0bead3 !important; */
    }

    .plan5bgc {
        /* background-color: #76d2c8 !important; */
    }



    

    
</style>


