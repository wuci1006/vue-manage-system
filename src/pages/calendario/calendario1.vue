<template>
    <div class="calendario">
        <div class="calendar">
			<calendarList ref="calendarChild"></calendarList>
        </div>
    </div>
</template>

<script>
	import calendarList from "../../components/calendar/calendar1.vue";//日历
    export default {
		components: {
            calendarList
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
	@import '../../assets/style/calendar.css';
</style>


