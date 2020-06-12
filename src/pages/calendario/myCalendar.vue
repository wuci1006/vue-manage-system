<template>
	<div class="calenderio">
		<MyCalendar></MyCalendar>
	</div>
</template>

<script>
	import MyCalendar from "../../components/calendar/myCalendar.vue";
	export default {
		components: {
		    MyCalendar
		},
		data() {
			return {
			}
		},
		mounted() {
		},
		methods: {
			
		},

	}
</script>
<style lang="scss" scoped>
	.calenderio{
		padding:10px 10px;
		margin:15px;
		background-color: #fff;
	}
	
</style>
