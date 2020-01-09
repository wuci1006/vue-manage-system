<template>
    <div class="calendarList" id="calendarDemo">
        <p class="calendarTitle">计划日历</p>
		<div id="promptTip" style="background-color:orange;" v-show="tip.if">
			<p>123</p>
			<p>456</p>
			<p>{{tip.content}}</p>
			<p>aaaaa</p>
		</div>
        <full-calendar :events="events" locale="fr" lang="zh" firstDay='0' weekMode="liquid" ref="calendar" 
			@changeMonth="changeMonth" @eventClick="eventClick" @dayClick="dayClick" @moreClick="moreClick">
        </full-calendar>
    </div>
</template>

<script>
    import moment from 'moment';
    import $ from "jquery";
    export default {
        components: {
            'full-calendar': require('vue-fullcalendar'),
        },
        data() {
            return {
                currentTime:'',
                starttime:'',
                endtime:'',
                events: [
                    {id:1,cssClass:'pink',title:'工研院-华科',start:'2019-12-10',end:'2019-12-12',posttime:'2019-12-10 16:50',person:'张师傅',phone:'13412345678',car:'鄂GLY048'},
					{id:2,cssClass:'blue',title:'工研院-华科',start:'2019-12-15',end:'2019-12-19',posttime:'2019-12-12 16:50',person:'张师傅',phone:'13412345678',car:'鄂GLY048'},
					{id:3,cssClass:'blue',title:'工研院-华科',start:'2020-01-12',posttime:'2020-01-20 16:50',person:'张师傅',phone:'13412345678',car:'鄂GLY048'},
                ],
                data1: [],
                tip: {
                    if: false,
                    title: "暂无数据",
                    content: "暂无数据",
                },
                // 阴历添加
                today: '',
                lunarInfo: [
                    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
                    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
                    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
                    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
                    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
                    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
                    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
                    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
                    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
                    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
                    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
                    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
                    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
                    0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
                    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0
                ],
                nStr1: ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
                nStr2: ['初', '十', '廿', '三'],
                festival: {
                    //  中文国际节日
                    feativals_CH: {
                        '01-01': '元旦',
                        '02-14': '情人节',
                        '03-08': '妇女节',
                        '03-12': '植树节',
                        '04-01': '愚人节',
                        '04-022': '地球日',
                        '05-01': '劳动节',
                        '05-04': '青年节',
                        '06-01': '儿童节',
                        '07-01': '建党节',
                        '08-01': '建军节',
                        '09-10': '教师节',
                        '10-01': '国庆节',
                        '12-25': '圣诞节',
                    },
                    //  英文国际节日   
                    // feativals_EN: {
                    //     '1-1': "new year’s day",
                    //     '2-14': "Saint Valentine's Day",
                    //     '3-8': 'international women’s day',
                    //     '3-12': "Arbor Day",
                    //     '4-1': "April Fool's Day",
                    //     '4-22': "Earth Day",
                    //     '5-1': "international labour day",
                    //     '5-4': "Chinese Youth Day",
                    //     '6-1': "Children's Day",
                    //     '7-1': "The party's Day",
                    //     '8-1': "the Army's Day",
                    //     '9-10': "Teachers' Day",
                    //     '10-1': 'National Day',
                    //     '12-25': 'Christmas Day',
                    // },
                    //  农历节日
                    lunarFeatival_CH: {
                        '正月初一': '春节',
                        '正月十五': '元宵节',
                        '二月初二': '龙抬头',
                        // '四月初四': '寒食节',
                        // '四月初五': '清明节',
                        '五月初五': '端午节',
                        '八月十五': '中秋节',
                        '九月初九': '重阳节',
                        '十二月三十': '除夕',
                    },
                    //  节气
                    solarTerm: {
                        '02-03': '立春',
                        '02-18': '雨水',
                        '03-05': '惊蛰',
                        '03-20': '春分',
                        '04-04': '清明',
                        '04-19': '谷雨',

                        '05-05': '立夏',
                        '05-20': '小满',
                        '06-05': '芒种',
                        '06-21': '夏至',
                        '07-06': '小暑',
                        '07-22': '大暑',

                        '08-07': '立秋',
                        '08-22': '处暑',
                        '09-07': '白露',
                        '09-22': '秋分',
                        '10-08': '寒露',
                        '10-23': '霜降',

                        '11-07': '立冬',
                        '11-22': '小雪',
                        '12-06': '大雪',
                        '12-21': '冬至',
                        '01-05': '小寒',
                        '01-20': '大寒',
                    },

                    //2017 2018 2019 2020法定节假日
                    legal_feativals: {
                        CLH: {
                            // 把农历节日转阳历日期放一起
                            '2016-12-31': '休', // 元旦休
                            '2017-01-01': '休',
                            '2017-01-02': '休',
                            '2017-01-27': '休', // 除夕休
                            '2017-01-28': '休', // 春节休
                            '2017-01-29': '休',
                            '2017-01-30': '休',
                            '2017-01-31': '休',
                            '2017-02-01': '休',
                            '2017-02-02': '休',
                            '2017-04-02': '休', //清明休
                            '2017-04-03': '休',
                            '2017-04-04': '休',
                            '2017-04-29': '休', // 劳动节
                            '2017-04-30': '休',
                            '2017-05-01': '休',
                            '2017-05-28': '休', //端午休
                            '2017-05-29': '休',
                            '2017-05-30': '休',
                            '2017-10-01': '休', // 国庆休
                            '2017-10-02': '休',
                            '2017-10-03': '休',
                            '2017-10-04': '休', //中秋休
                            '2017-10-05': '休',
                            '2017-10-06': '休',
                            '2017-10-07': '休',
                            '2017-10-08': '休',

                            '2017-12-30': '休', // 元旦休
                            '2017-12-31': '休',
                            '2018-01-01': '休',
                            '2018-02-15': '休', // 除夕休
                            '2018-02-16': '休', // 春节休
                            '2018-02-17': '休',
                            '2018-02-18': '休',
                            '2018-02-19': '休',
                            '2018-02-20': '休',
                            '2018-02-21': '休',
                            '2018-04-05': '休', //清明休
                            '2018-04-06': '休',
                            '2018-04-07': '休',
                            '2018-04-29': '休', // 劳动节
                            '2018-04-30': '休',
                            '2018-05-01': '休',
                            '2018-06-16': '休', //端午休
                            '2018-06-17': '休',
                            '2018-06-18': '休',
                            '2018-09-22': '休', //中秋休
                            '2018-09-23': '休',
                            '2018-09-24': '休',
                            '2018-10-01': '休', // 国庆休
                            '2018-10-02': '休',
                            '2018-10-03': '休',
                            '2018-10-04': '休',
                            '2018-10-05': '休',
                            '2018-10-06': '休',
                            '2018-10-07': '休',

                            '2018-12-30': '休', // 元旦休
                            '2018-12-31': '休',
                            '2019-01-01': '休',
                            '2019-02-04': '休', // 除夕休
                            '2019-02-05': '休', // 春节休
                            '2019-02-06': '休',
                            '2019-02-07': '休',
                            '2019-02-08': '休',
                            '2019-02-09': '休',
                            '2019-02-10': '休',
                            '2019-04-05': '休', //清明休
                            '2019-04-06': '休',
                            '2019-04-07': '休',
                            '2019-05-01': '休', // 劳动节
                            '2019-06-07': '休', //端午休
                            '2019-06-08': '休',
                            '2019-06-09': '休',
                            '2019-09-13': '休', //中秋休
                            '2019-09-14': '休',
                            '2019-09-15': '休',
                            '2019-10-01': '休', // 国庆休
                            '2019-10-02': '休',
                            '2019-10-03': '休',
                            '2019-10-04': '休',
                            '2019-10-05': '休',
                            '2019-10-06': '休',
                            '2019-10-07': '休',
							
                            '2020-01-01': '休',//元旦
                            '2020-01-24': '休',//春节
                            '2020-01-25': '休',
                            '2020-01-26': '休',
                            '2020-01-27': '休',
                            '2020-01-28': '休',
                            '2020-01-29': '休',
                            '2020-01-30': '休',
                            '2020-04-04': '休',//清明
                            '2020-04-05': '休',
                            '2020-04-06': '休',
                            '2020-05-01': '休',//劳动节
                            '2020-05-02': '休',
                            '2020-05-03': '休',
                            '2020-05-04': '休',
                            '2020-05-05': '休',
                            '2020-06-25': '休',//端午节
                            '2020-06-26': '休',
                            '2020-06-27': '休',
                            '2020-10-01': '休',//国庆
                            '2020-10-02': '休',
                            '2020-10-03': '休',
                            '2020-10-04': '休',
                            '2020-10-05': '休',
                            '2020-10-06': '休',
                            '2020-10-07': '休',
                            '2020-10-08': '休',
                        },
//                         CH: {
//                             '2017-12-30': '休', // 元旦休
//                             '2017-12-31': '休',
//                             '2018-01-01': '休',
// 
//                             '2018-04-05': '休', //清明休
//                             '2018-04-06': '休',
//                             '2018-04-07': '休',
// 
//                             '2018-04-29': '休', // 劳动节
//                             '2018-04-30': '休',
//                             '2018-05-01': '休',
// 
//                             '2018-10-01': '休', // 国庆休
//                             '2018-10-02': '休',
//                             '2018-10-03': '休',
//                             '2018-10-04': '休',
//                             '2018-10-05': '休',
//                             '2018-10-06': '休',
//                             '2018-10-07': '休',
//                         },
//                         LU: {
//                             '正月初一': '休', // 春节休
//                             '正月初二': '休',
//                             '正月初三': '休',
//                             '正月初四': '休',
//                             '正月初五': '休',
//                             '正月初六': '休',
// 
//                             '五月初三': '休', //端午休
//                             '五月初四': '休',
//                             '五月初五': '休',
// 
//                             '八月十三': '休', //中秋休
//                             '八月十四': '休',
//                             '八月十五': '休',
//                         }
                    }
                },
            }
        },
        mounted() {
			this.drawData();
        },
        methods: {
			drawData(){
				$('.events-day>.day-number').before(`<p class='events-yinli'></p>`); // 在被选元素之前插入指定内容 日期描述准备 比如 廿一  国庆节 ...
			},
            // 点击换月 - 第一次自动触发
            'changeMonth'(start, end, current) {
				console.log('changeMonth',start,end,current)
                this.tip.if = false;
                setTimeout(() => {
                    this.dayofweeks();
                    // this.dayofevents();
                    this.addyinli();
                }, 1);

            },
            // 点击日历事件
            'eventClick'(event, jsEvent, pos) {
				console.log(event)
				console.log(jsEvent)
				console.log(pos)
                this.tip.if = false;
                this.tip.title = event.title;
                this.tip.start = event.start;

                this.tip.id = event.id;
                this.tip.person = event.person;
                this.tip.car = event.car;
                this.tip.phone = event.phone;
                this.tip.posttime = event.posttime;
                this.tip.content = '123';

                let tipcontent = '';
                if (event.posttime.indexOf(' ') > -1) {
                }
                let left = jsEvent.clientX;
                let top = jsEvent.clientY - 70;
                this.tip.if = true;
                $('#promptTip').css({
                    'left': left + 'px',
                    'top': top + 'px'
                });
                // $('#promptTip').empty();
                // $('#promptTip').append(tipcontent);
            },
            // 点击某一天
            'dayClick'(day, jsEvent) {
                this.tip.if = false;
                let today = moment(day).format('YYYY-MM-DD');
                this.today = today;
            },
			//点击更多
            'moreClick'(day, events, jsEvent) {
                // console.log('moreCLick', day, events, jsEvent)
            },

			// 日历-改变周六周日的背景色
			dayofweeks() {
			    $('.events-week').each(function (i, evn) {
			        $('.events-week').eq(i).children('.events-day').eq(0).removeClass('dayofweeks');
			        $('.events-week').eq(i).children('.events-day').eq(6).removeClass('dayofweeks');
			        $('.events-week').eq(i).children('.events-day').eq(0).addClass('dayofweeks');
			        $('.events-week').eq(i).children('.events-day').eq(6).addClass('dayofweeks');
			    });
			},
			 // 日历事件日渲染
			dayofevents() {
			    // $('.events-day').removeClass('dayofevents');
			    // $('.zhongdabgc').parents('.events-day').addClass('dayofevents');
			    // $('.peibgc').parents('.events-day').addClass('dayofevents');
			    // $('.touyunbgc').parents('.events-day').addClass('dayofevents');
			    // $('.xiannamebgc').parents('.events-day').addClass('dayofevents');
			},
            // 添加阴历以及节假日
            addyinli() {
                let that = this;
                $('.events-day>.day-number').each(function (i) {
                    $(this).click();
                    let yangliyear = that.today.split('-')[0];//获取阳历年份
                    let yanglimonth = that.today.split('-')[1];//获取阳历月份
                    let yangliday = that.today.split('-')[2];//获取阳历日
                    let daynumber2 = '';

                    daynumber2 = that.constructor(yangliyear, yanglimonth, yangliday); //获取阴历  廿一
					
                    let yanglimd = yanglimonth + '-' + yangliday; //阳历月日  如 10-1  06-05
					
                    let feativals_CH_if = that.festival['feativals_CH'][yanglimd]; //判断中文国际节日 国庆节
					
                    let solarTerm_if = that.festival['solarTerm'][yanglimd]; //判断二十四节气  芒种

                    let yangliymd = yangliyear + '-' + yanglimonth + '-' + yangliday; //阳历年月日  如 2018-10-1 
                    let legal_feativals_CLH_if = that.festival['legal_feativals']['CLH'][yangliymd]; // 判断CLH中指定年份的年法定节假日  国庆节

                    let yinlimd = that.getLunarDay(); //阴历日期 如 八月十五
                    let lunarFeatival_CH_if = that.festival['lunarFeatival_CH'][yinlimd]; //判断农历节日 中秋节

                    $(this).siblings('.events-yinli').removeClass('feativals_CH');
                    $(this).siblings('.events-yinli').removeClass('lunarFeatival_CH');
                    $(this).siblings('.events-yinli').removeClass('solarTerm');
                    $(this).siblings('.events-yinli').removeClass('legal_feativals');
                    $(this).parent('.events-day').removeClass('dayoflegal');
                    if ($(this).siblings('p').hasClass('rest')) {
                        $(this).siblings('.rest').remove();
                    }

                    if (feativals_CH_if) {
                        daynumber2 = feativals_CH_if;
                        $(this).siblings('.events-yinli').addClass('feativals_CH');
                    } else if (lunarFeatival_CH_if) {
                        daynumber2 = lunarFeatival_CH_if;
                        $(this).siblings('.events-yinli').addClass('lunarFeatival_CH');
                    } else if (solarTerm_if) {
                        daynumber2 = solarTerm_if;
                        $(this).siblings('.events-yinli').addClass('solarTerm')
                    }
                    $(this).siblings('.events-yinli').text(daynumber2); //写入文字

                    if (legal_feativals_CLH_if) { // 法定节日-阳历
                        // daynumber2 += '/' + legal_feativals_CLH_if;
                        $(this).siblings('.events-yinli').addClass('legal_feativals');
                        $(this).siblings('.events-yinli').after(`<p class='rest'>休</p>`);
                        $(this).parent('.events-day').addClass('dayoflegal');
                    }
                })
            },
            
           
            //根据阳历日期计算阴历
            constructor(year, month, day) {
                var date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                var i, leap = 0,temp = 0; //天数
                var baseDate = new Date(1900, 0, 31);
                var offset = (date - baseDate) / 86400000; //1900距离今天的天数
				
                //计算年数
                for (i = 1900; i < 2050 && (offset - this.lYearDays(i)) > 0; i++) {
                    offset -= this.lYearDays(i)
                }
                this.year = i;
                leap = this.leapMonth(i) //闰哪个月 0则不润
                this.isLeap = false;

                //计算月数
                for (i = 1; i < 13 && offset > 0; i++) {
                    //闰月
                    if (leap > 0 && i == (leap + 1) && this.isLeap == false) {
                        --i;
                        temp = this.leapDays(this.year);
                    } else {
                        temp = this.monthDays(this.year, i);
                    }
                    //解除闰月
                    if (this.isLeap == true && i == (leap + 1));
                    this.isLeap = false

                    offset -= temp;
                }

                //如果恰好减完了，不是闰月的话月数减1
                if (offset == 0 && leap > 0 && i == leap + 1)
                    if (this.isLeap) {
                        this.isLeap = false;
                    } else {
                        this.isLeap = true;
                        --i;
                    }

                if (offset < 0) {
                    offset += temp;
                    --i;
                }

                this.month = i;
                //最后剩余的就是日期
                this.day = (offset + 1).toFixed(0);
                return this.getLunarDayName();
            },

            // 获取y年的总天数
            lYearDays(year) {
                var i, sum = 0;
                for (i = 0x8000; i > 0x8; i >>= 1)
                    sum += (this.lunarInfo[year - 1900] & i) ? 30 : 29
                return (sum + this.leapDays(year)) //最后在加上可能有的闰年的闰月
            },

            //获取闰年闰月的天数 闰大月还是小月
            leapDays(year) {
                if (this.leapMonth(year))
                    return ((this.lunarInfo[year - 1900] & 0x10000) ? 30 : 29)
                else
                    return 0;
            },

            //获取闰年闰哪个月1-12 ,没闰传回 0
            leapMonth(year) {
                return (this.lunarInfo[year - 1900] & 0xf)
            },

            //获取y年m月的总天数 正常月
            monthDays(year, month) {
                return ((this.lunarInfo[year - 1900] & (0x10000 >> month)) ? 30 : 29)
            },

            //根据阳历获取阴历日期 
            cDay(d) {
                let s;
                switch (d * 1) {
                    case 10:s = '初十';break;
                    case 20:s = '二十';break;
                    case 30:s = '三十';break;
                    default:
                        s = this.nStr2[Math.floor(d / 10)];
                        s += this.nStr1[d % 10];
                }
                return (s);
            },
            //根据阳历获取阳历月份  
            cMonth(m) {
                let s;
                switch (m) {
                    case 1:s = '正月';break;
                    case 2:s = '二月';break;
                    case 3:s = '三月';break;
                    case 4:s = '四月';break;
                    case 5:s = '五月';break;
                    case 6:s = '六月';break;
                    case 7:s = '七月';break;
                    case 8:s = '八月';break;
                    case 9:s = '九月';break;
                    case 10:s = '十月';break;
                    case 11:s = '十一月';break;
                    case 12:s = '十二月';break;
                    default:break;
                }
                return (s);
            },

            //获得阴历日期 字符串 -----八月十五
            getLunarDay() {
                return this.cMonth(this.month) + this.cDay(this.day);
            },
            //获得阴历日期某一天的中文----八月十五
            getLunarDayName() {
                if (this.day == 1)
                    return this.cMonth(this.month);
                return this.cDay(this.day);
            },
            //获取阴历日期的数字 -------8-15
            getLunarDayNum() {
                return this.month + '-' + this.day;
            },
        },
    }
</script>

