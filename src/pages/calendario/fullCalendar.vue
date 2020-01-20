<template>
    <div class="calendario">
        <div class="calendar">
			<myFullCalendar ref="calendarChild"></myFullCalendar>
        </div>
    </div>
</template>

<script>
	import myFullCalendar from "../../components/calendar/myFullCalendar.vue";//日历
    export default {
		components: {
            myFullCalendar
        },
        data() {
            return {
				monthData: [],
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
	@import '../../assets/style/fullCalendar.css';
</style>



