<template>
    <div class="calendarList" id="calendarDemo">
		<div id="promptTip" v-show="tip.if">
			<div class="prompt_top">
				<div class="prompt_top_title">详情</div>
				<div class="prompt_top_cancel" @click="tip.if=false">
					<img src="../../assets/images/icon_delete.png" alt="">
				</div>
			</div>
			<div class="prompt_content">
				<p>司机：{{tip.person}}</p>
				<p>车牌：{{tip.car}}</p>
				<p>手机号：{{tip.phone}}</p>
				<p>发车时间：{{tip.posttime}}</p>
			</div>
			<div class="prompt_foot" v-show="tip.footerShow">
				<button class="prompt_foot_btn btn_delete" @click="handleDelete">删除</button>
				<button class="prompt_foot_btn btn_edit" @click="handleEdit">编辑</button>
			</div>
		</div>
        <full-calendar :events="events" locale="fr" lang="zh" firstDay='0' weekMode="liquid" ref="calendar" 
			@changeMonth="changeMonth" @eventClick="eventClick" @dayClick="dayClick" @moreClick="moreClick">
        </full-calendar>
    </div>
</template>

<script>
    import $ from "jquery";
	import {festival} from '../../assets/calendar/festival.js';
	import {calendar} from '../../assets/calendar/calendar.js';

    export default {
        components: {
            'full-calendar': require('vue-fullcalendar'),
        },
        data() {
            return {
                events: [
                    {id:1,cssClass:'pink',title:'工研院-华科',start:'2019-12-10',end:'2019-12-12',posttime:'2019-12-10 16:50',person:'张师傅',phone:'13412345678',car:'鄂GLY048'},
					{id:2,cssClass:'blue',title:'工研院-华科',start:'2019-12-15',end:'2019-12-19',posttime:'2019-12-12 16:50',person:'张师傅',phone:'13412345678',car:'鄂GLY048'},
					{id:3,cssClass:'blue',title:'工研院-华科',start:'2020-01-12',posttime:'2020-01-20 16:50',person:'张师傅',phone:'13412345678',car:'鄂GLY048'},
					{id:4,cssClass:'blue',title:'工研院-华科',start:'2020-02-12',posttime:'2020-02-20 16:50',person:'张师傅',phone:'13412345678',car:'鄂GLY048'},
					{id:5,cssClass:'blue',title:'工研院-华科',start:'2020-03-12',posttime:'2020-03-20 16:50',person:'张师傅',phone:'13412345678',car:'鄂GLY048'},
                ],
                tip: {
                    if: false,
					footerShow:true,
                },
                today: '',
            }
        },
        mounted() {
			this.drawData();
        },
        methods: {
			drawData(){
				// 在被选元素之前插入指定日期内容
				$('.events-day>.day-number').before(`<p class='events-lunar'></p>`);
			},
            //点击换月 - 第一次自动触发
            changeMonth(start, end, current) {
				// console.log('changeMonth',start,end,current)
                this.tip.if = false;
                setTimeout(() => {
					this.changeWeekendBackgroundColor();
                    this.addLunar();
                }, 1);
            },
            //点击日历事件
            eventClick(event, jsEvent, pos) {
                this.tip.if = false;
				
				this.tip.id = event.id;
                this.tip.title = event.title;
                this.tip.start = event.start;
				this.tip.end = event.end;
				this.tip.posttime = event.posttime;
                this.tip.person = event.person;
                this.tip.car = event.car;
                this.tip.phone = event.phone;
				
                let left = jsEvent.clientX;
                let top = jsEvent.clientY - 170;
                this.tip.if = true;
                $('#promptTip').css({'left': left + 'px','top': top + 'px'});
            },
            // 点击某一天
            dayClick(day, jsEvent) {
                this.tip.if = false;
                let today = this.myMoment(day).format('YYYY-MM-DD');
                this.today = today;
            },
			//点击更多
			moreClick(){
				// console.log('moreCLick', day, events, jsEvent)
			},
			
			//改变周末的背景颜色
			changeWeekendBackgroundColor(){
				$('.events-week').each(function (i, evn) {
				    $('.events-week').eq(i).children('.events-day').eq(0).removeClass('weekendBackgroundColor');
				    $('.events-week').eq(i).children('.events-day').eq(6).removeClass('weekendBackgroundColor');
				    $('.events-week').eq(i).children('.events-day').eq(0).addClass('weekendBackgroundColor');
				    $('.events-week').eq(i).children('.events-day').eq(6).addClass('weekendBackgroundColor');
				});
			},
            // 添加阴历以及节假日
            addLunar() {
                let _this = this;
                $('.events-day>.day-number').each(function (i) {
                    $(this).click();
                    let solarYear = _this.today.split('-')[0];//获取阳历年
                    let solarMonth = _this.today.split('-')[1];//获取阳历月
                    let solarDay = _this.today.split('-')[2];//获取阳历日
                    
                    let solarMonthDay = solarMonth + '-' + solarDay; //获取阳历月日
					let solarYearMonthDay = solarYear + '-' + solarMonth + '-' + solarDay;//获取阳历年月日
					
					let lunarDay = '';//阴历日
					lunarDay = calendar.solartolunar(solarYear,solarMonth,solarDay).IDayCn;//获取阴历日
						
					let lunarMonthDay = calendar.solartolunar(solarYear,solarMonth,solarDay).IMonthCn 
						+ calendar.solartolunar(solarYear,solarMonth,solarDay).IDayCn;//获取阴历月日	)

					let solar_festival_if = festival['solar_festival'][solarMonthDay]; //判断公历节日
					let lunar_festival_if = festival['lunar_festival'][lunarMonthDay]; //判断农历节日
					let solar_term_if = festival['solar_term'][solarMonthDay]; //判断二十四节气
					let legal_festival_if = festival['legal_festival'][solarYearMonthDay]; // 判断国家法定节假日
					
                    $(this).siblings('.events-lunar').removeClass('solarFestivalColor');
                    $(this).siblings('.events-lunar').removeClass('lunarFestivalColor');
                    $(this).siblings('.events-lunar').removeClass('solarTermColor');
                    $(this).siblings('.events-lunar').removeClass('legalFestivalColor');
                    $(this).parent('.events-day').removeClass('legalFestivalBackgroundColor');
					
                    if ($(this).siblings('p').hasClass('rest')) {
                        $(this).siblings('.rest').remove();
                    }

                    if (solar_festival_if) {
                        lunarDay = solar_festival_if;
                        $(this).siblings('.events-lunar').addClass('solarFestivalColor');
                    } else if (lunar_festival_if) {
                        lunarDay = lunar_festival_if;
                        $(this).siblings('.events-lunar').addClass('lunarFestivalColor');
                    } else if (solar_term_if) {
                        lunarDay = solar_term_if;
                        $(this).siblings('.events-lunar').addClass('solarTermColor')
                    }
                    $(this).siblings('.events-lunar').text(lunarDay); //写入文字

                    if (legal_festival_if) { // 法定节日-阳历
                        $(this).siblings('.events-lunar').addClass('legalFestivalColor');
                        $(this).siblings('.events-lunar').after(`<p class='rest'>休</p>`);
                        $(this).parent('.events-day').addClass('legalFestivalBackgroundColor');
                    }
                })
            },
			//删除
			handleDelete(){
				// console.log(this.tip.id)
			},
			//编辑
			handleEdit(){
				// console.log(this.tip.id)
			},

        },
    }
</script>

