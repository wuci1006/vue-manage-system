<template>
	<div class="calender">
		<div class="calendar_top">
			<div class="calendar_top_year">{{currentYear}}年{{currentMonth}}月</div>
			<div class="calendar_top_month" @click="handleShowLastMonth">上个月</div>
			<div class="calendar_top_vacation" @click="handleShowNextMonth">下个月</div>
			<div class="calendar_top_today" @click="handleShowToday">返回今天</div>
		</div>

		<div class="calendar_content">
			<ul class="calendar_content_week">
				<li v-for="(item,index) in weekendList" :key="index">{{item.day}}</li>
			</ul>
			<ul class="calendar_content_day">
				<li v-for="(item,index) in dateList" :key=index @click="handleDay(item,$event)"
				:class="`${currentToday==item.solarYear+'-'+item.solarMonth+'-'+item.solarDay ? 'calendar_content_today' : ''}
					${item.isRest==true ? 'calendar_content_rest_bgc' : ''}
					${item.currentClass=='lastMonth'||item.currentClass=='nextMonth' ? 'calendar_content_month_opacity' : ''}
					${isCurrentDay==item.solarYear+'-'+item.solarMonth+'-'+item.solarDay ? 'calendar_content_click' : ''}`">
					
					<p :class="`${item.currentClass=='lastMonth'||item.currentClass=='nextMonth' ? 'calendar_content_month_color' : 'item_solar'}`">
						{{item.solarDay}}
					</p>
					
					<p :class="`${item.isTerm==true||item.isSolarFestival==true||item.isLunarFestival==true ? 'calendar_content_term_color' :'item_lunar'}
						${item.currentClass=='lastMonth'||item.currentClass=='nextMonth' ? 'calendar_content_month_color' : 'item_lunar'}`">
						{{item.lunarFestival || item.solarFestival || item.solarTerm || item.lunarDay}}
					</p>
					<span :class="[{ calendar_content_rest_opacity: item.currentClass=='lastMonth'||item.currentClass=='nextMonth' }, 'item_rest']" 
						v-show="item.isRest">休</span>
					<span :class="['calendar_content_event']" v-show="item.isEvent" @click="handleEvent(item,$event)">more</span>		
				</li>
			</ul>
		</div>
		<!-- 提示信息 -->
		<Prompt :promptData="promptData" @dealDelete="deleteEvent" @dealEdit="editEvent"></Prompt>
		
	</div>
</template>

<script>
	import {calendarFestival} from '../../assets/calendar/calendarFestival.js';
	import {calendar} from '../../assets/calendar/calendar.js';
	import Prompt from '../prompt/prompt.vue';
	// import $ from "jquery";
	export default {
		components: {
		    Prompt
		},
		data() {
			return {				
				currentYear:'',
				currentMonth:'',
				currentDay:'',
				currentToday:'',//今天
				weekendList:[
					{day:'日',isWeekend:true},
					{day:'一',isWeekend:false},
					{day:'二',isWeekend:false},
					{day:'三',isWeekend:false},
					{day:'四',isWeekend:false},
					{day:'五',isWeekend:false},
					{day:'六',isWeekend:true},
				],
				dateList: [],
				isCurrentDay:'',
				eventData:[
					{id:1,day:'2020-01-08',event:'休息'},
					{id:2,day:'2020-01-20',event:'睡觉'}
				],
				
				promptData:{
					promptShow:false,
					header_title:'详情',
					content:'暂无数据',
					footerShow:true,
				}
			}
		},
		mounted() {
			this.getTodayDate();
		},
		methods: {
			//获取今天日期
			getTodayDate(){
				this.currentYear = new Date().getFullYear();
				this.currentMonth = new Date().getMonth() + 1;
				this.currentDay = new Date().getDate();
				this.currentToday = this.currentYear + '-' + this.currentMonth + '-' + this.currentDay;
				this.pushDateList();
			},
			//渲染日历
			pushDateList() {
				//将这个月多少天加入数组dateList
				for (let i = 1; i <= this.getDayNumber(this.currentYear, this.currentMonth); i++) {
					let dayResult = {};
					dayResult.solarYear = this.currentYear;
					dayResult.solarMonth = this.currentMonth;
					dayResult.solarDay = i;
					dayResult.currentClass = 'currentMonth';
					this.dateList.push(dayResult)
				}
				//将下个月要显示的天数加入dateList
				for (let i = 1; i <= 42 - this.getDayNumber(this.currentYear, this.currentMonth) - this.getWeekNumber(this.currentYear, this.currentMonth); i++) {
					let dayResult = {};
					if(this.currentMonth == 12){
						dayResult.solarMonth = 1;
						dayResult.solarYear = Number(this.currentYear) + 1;
					}else{
						dayResult.solarMonth = Number(this.currentMonth) + 1;
						dayResult.solarYear = this.currentYear;
					}
					dayResult.solarDay = i;
					dayResult.currentClass = 'nextMonth';
					this.dateList.push(dayResult)
				}
				//将上个月要显示的天数加入dateList
				for (let i = 0; i < this.getWeekNumber(this.currentYear, this.currentMonth); i++) {
					var lastMonthdateList = this.getDayNumber(this.currentYear, this.currentMonth - 1);
					let dayResult = {};
					if(this.currentMonth == 1){
						dayResult.solarMonth = 12;
						dayResult.solarYear = this.currentYear - 1;
					}else{
						dayResult.solarMonth = this.currentMonth - 1;
						dayResult.solarYear = this.currentYear;
					}
					dayResult.solarDay = lastMonthdateList - i;
					dayResult.currentClass = 'lastMonth';
					this.dateList.unshift(dayResult)
				}
				for (let i = 0; i < this.dateList.length; i++){
					let otherInfo = calendar.solartolunar(this.dateList[i].solarYear,this.dateList[i].solarMonth,this.dateList[i].solarDay);
					// console.log(calendar.solartolunar(this.dateList[i].solarYear,this.dateList[i].solarMonth,this.dateList[i].solarDay))
					this.dateList[i].lunarMonth = otherInfo.IMonthCn;
					this.dateList[i].lunarDay = otherInfo.IDayCn;
					this.dateList[i].animal = otherInfo.Animal;
					this.dateList[i].weekDay = otherInfo.ncWeek;
					this.dateList[i].weekDayNumber = otherInfo.nWeek;
					if(otherInfo.isTerm){
						this.dateList[i].solarTerm = otherInfo.Term;
						this.dateList[i].isTerm = otherInfo.isTerm;
					}
					
					//公历节日
					let solarMonthDay = this.addZero(this.dateList[i].solarMonth)+'-'+this.addZero(this.dateList[i].solarDay);//获取公历月日
					let solar_festival = calendarFestival['solar_festival'][solarMonthDay]; //判断公历节日
					if(solar_festival != undefined){
						this.dateList[i].solarFestival = solar_festival;
						this.dateList[i].isSolarFestival = true;
					}
					
					//农历节日
					let lunarMonthDay = this.dateList[i].lunarMonth+this.dateList[i].lunarDay;//获取农历月日
					let lunar_festival = calendarFestival['lunar_festival'][lunarMonthDay]; //判断公历节日
					if(lunar_festival != undefined){
						this.dateList[i].lunarFestival = lunar_festival;
						this.dateList[i].isLunarFestival = true;
					}
					
					//法定节假日
					let solarYearMonthDay = this.dateList[i].solarYear+'-'+this.addZero(this.dateList[i].solarMonth)+'-'+this.addZero(this.dateList[i].solarDay);//获取农历月日
					let rest_festival = calendarFestival['legal_festival'][solarYearMonthDay]; //判断公历节日
					if(rest_festival != undefined){
						this.dateList[i].isRest = true;
					}
					
					//事件
					if(this.eventData.length > 0){
						for(let j = 0; j<this.eventData.length;j++){
							if(this.eventData[j].day == this.dateList[i].solarYear+'-'+this.addZero(this.dateList[i].solarMonth)+'-'+this.addZero(this.dateList[i].solarDay)){
								this.dateList[i].isEvent = true;
								this.dateList[i].id = this.eventData[j].id;
							}
						}
					}
				}
					
				// console.log(this.dateList)//天数
			},
			//加零
			addZero(_num){
				if(_num<10){
					return '0' + _num;
				}else{
					return _num;
				}
			},
			//得到当前年的这个月有多少天
			getDayNumber(_year, _month) {
				return new Date(_year, _month, 0).getDate();
			},
			//得到当前年这个月的一号是周几
			getWeekNumber(_year, _month) {
				let now = new Date();
				now.setFullYear(_year);
				now.setMonth(_month - 1);
				now.setDate(1);
				return now.getDay();
			},
			//点击某一天
			handleDay(item,event){
				this.isCurrentDay = item.solarYear + '-' + item.solarMonth + '-' + item.solarDay;
			},
			//处理事件
			handleEvent(item,event){
				event.stopPropagation();//阻止冒泡
				if(item.id){
					for(let i = 0;i<this.eventData.length;i++){
						if(item.id == this.eventData[i].id){
							this.promptData.header_title = this.eventData[i].day;
							this.promptData.content = this.eventData[i].event;
							this.promptData.id = this.eventData[i].id;
						}
					}
					this.promptData.promptShow = true;
				}
			},
			//删除
			deleteEvent(value){
				console.log(value)
			},
			//编辑
			editEvent(value){
				console.log(value)
			},
			//上个月
			handleShowLastMonth() {
				this.dateList = [];
				if (this.currentMonth > 1) {
					this.currentMonth = this.currentMonth - 1;
					this.pushDateList();
				} else if (this.currentYear > 1970) {
					this.currentMonth = 12;
					this.currentYear = this.currentYear - 1;
					this.pushDateList();
				} else {
					alert("不能查找更远的日期")
				}
			},
			//下个月
			handleShowNextMonth() {
				this.dateList = [];
				if (this.currentMonth < 12) {
					this.currentMonth = this.currentMonth + 1;
					this.pushDateList();
				} else {
					this.currentMonth = this.currentMonth = 1;
					this.currentYear = this.currentYear + 1;
					this.pushDateList();
				}
			},
			//返回今天
			handleShowToday() {
				this.dateList = [];
				let now = new Date();
				this.currentYear = now.getFullYear();
				this.currentMonth = now.getMonth() + 1;
				this.pushDateList();
			},
			
		},

	}
</script>
<style scoped>
	
</style>

<style>
	@import '../../assets/style/calendar.css';
</style>
