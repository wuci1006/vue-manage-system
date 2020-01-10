<template>
	<div class="calender">
		<div class="calendar_top">
			<div class="calendar_top_year">{{year}}年{{month}}月</div>
			<div class="calendar_top_month" @click="handleShowLastMonth">上个月</div>
			<div class="calendar_top_vacation" @click="handleShowNextMonth">下个月</div>
			<div class="calendar_top_today" @click="handleShowToday">返回今天</div>
		</div>

		<div class="calendar_content">
			<ul class="calendar_content_week">
				<li v-for="(item,index) in weekendList" :key="index">{{item.day}}</li>
			</ul>
			<ul class="calendar_content_day">
				<li v-for="(item,index) in days" :key=index :class="{calendar_content_now:todayDate==year.toString()+month.toString()+item}">
					<p class="item_solar">{{item}}</p>
					<p class="item_lunar">初三</p>
					<!-- <span class="item_rest">休</span> -->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				year: '',
				month: '',
				days: [],
				todayDate: '',
				weekendList:[
					{day:'日',isWeekend:true},
					{day:'一',isWeekend:false},
					{day:'二',isWeekend:false},
					{day:'三',isWeekend:false},
					{day:'四',isWeekend:false},
					{day:'五',isWeekend:false},
					{day:'六',isWeekend:true},
				],
				
				today:'',//今天
			}
		},
		mounted() {
			console.log(new Date(2020, 1,0).getDate())
			this.getDate();
			this.handleShowDateStyle();
			this.getTodayDate();
		},
		methods: {
			//获取今天日期
			getTodayDate(){
				let currentYear = new Date().getFullYear();
				let currentMonth = new Date().getMonth() + 1;
				let currentDay = new Date().getDate();
				this.today = currentYear + '-' + currentMonth + '-' + currentDay;
			},
			//控制今天显示特殊样式
			handleShowDateStyle() {
				let now = new Date();
				this.todayDate = now.getFullYear().toString() + (now.getMonth() + 1).toString() + now.getDate().toString();
				console.log(this.todayDate)
			},
			getDate() {
				let now = new Date();
				this.year = now.getFullYear();
				this.month = now.getMonth() + 1;
				this.pushDays();
			},
			pushDays() {
				//将这个月多少天加入数组days
				for (let i = 1; i <= this.getDayNumber(this.year, this.month); i++) {
					this.days.push(i)
				}
				
				// console.log(typeof(this.days))
				// console.log('month' + this.days)
				
				//将下个月要显示的天数加入days
				for (let i = 1; i <= 35 - this.getDayNumber(this.year, this.month) - this.getWeek(this.year, this.month); i++) {
					this.days.push(i)
				}
				
				console.log('month' + this.days)
				//将上个月要显示的天数加入days
				for (let i = 0; i < this.getWeek(this.year, this.month); i++) {
					var lastMonthDays = this.getDayNumber(this.year, this.month - 1)
					this.days.unshift(lastMonthDays - i)
				}
				
				console.log(this.days)//天数
				console.log(this.getWeek(this.year, this.month))
			},
			
			
			
			//得到当前年的这个月有多少天
			getDayNumber(_year, _month) {
				return new Date(_year, _month, 0).getDate();
			},
			
			//得到当前年，这个月的一号是周几
			getWeek(Y, M) {
				let now = new Date()
				now.setFullYear(this.year);
				now.setMonth(this.month - 1);
				now.setDate(1);
				console.log(now)
				console.log(week)
				return now.getDay();
			},
			
			
			changeDate() {

			},
			handleShowNextMonth() {
				this.days = [];
				if (this.month < 12) {
					this.month = this.month + 1;
					this.pushDays();
				} else {
					this.month = this.month = 1;
					this.year = this.year + 1;
					this.pushDays();
				}

			},
			handleShowToday() {
				this.days = [];
				let now = new Date();
				this.year = now.getFullYear();
				this.month = now.getMonth() + 1;
				this.pushDays();
			},
			handleShowLastMonth() {
				this.days = [];
				if (this.month > 1) {
					this.month = this.month - 1;
					this.pushDays();
				} else if (this.year > 1970) {
					this.month = 12;
					this.year = this.year - 1;
					this.pushDays();
				} else {
					alert("不能查找更远的日期")
				}

			}
		},

	}
</script>
<style scoped>
	
</style>

<style>
	@import '../../assets/style/calendar3.css';
</style>
