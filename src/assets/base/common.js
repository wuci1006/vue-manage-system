// 时间计算
let countTime = {
    // 判断日期是否跨月
    isDateMonths: function (startDateString, endDateString) {
        var myStartMonth = startDateString.split('-')[1] * 1;
        var myEndMonth = endDateString.split('-')[1] * 1;
        if (myStartMonth != myEndMonth) {
            return true;
        }
        return false;
    },
    // 判断日期包含或周六周日
    isDateWeekends: function (startDateString, endDateString) {
        let days = this.getdfromtime(startDateString, endDateString);
        var myStartDay = new Date(Date.parse(startDateString.replace(/-/g, "/"))).getDay();
        var myEndDay = new Date(Date.parse(endDateString.replace(/-/g, "/"))).getDay();
        if (days >= 7) {
            return true;
        }
        if (myStartDay == 0 || myStartDay == 6 || myEndDay == 0 || myEndDay == 6) {
            return true;
        }
        if (myStartDay > myEndDay) {
            return true;
        }
        return false;
    },
    //  判断日期是否在区间内，在区间内返回true，否返回false
    isDateBetween: function (dateString, startDateString, endDateString) {
        let startFlag = (this.getdfromtime(dateString, startDateString) < 1);
        let endFlag = (this.getdfromtime(dateString, endDateString) > -1);
        if (startFlag && endFlag) {
            return true;
        }
        return false;
    },
    // 阿拉伯数字转中文大写
    toChinesNum: function (num) {
        let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; //changeNum[0] = "零"
        let unit = ["", "十", "百", "千", "万"];
        num = parseInt(num);
        let getWan = (temp) => {
            let strArr = temp.toString().split("").reverse();
            let newNum = "";
            for (var i = 0; i < strArr.length; i++) {
                newNum = (i == 0 && strArr[i] == 0 ? "" : (i > 0 && strArr[i] == 0 && strArr[i - 1] == 0 ?
                    "" : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i]))) + newNum;
            }
            return newNum;
        }
        let overWan = Math.floor(num / 10000);
        let noWan = num % 10000;
        if (noWan.toString().length < 4) noWan = "0" + noWan;
        return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);

    },

    // 年月日时分秒转年月日
    getnowdate: function (nowtime) {
        nowtime = new Date(nowtime);
        return new Date(nowtime.getFullYear(), nowtime.getMonth(), nowtime.getDate())
    },
    // 根据时间计算分钟数  1:00  得到60
    getmfromtime: function (time) {
        let timebh = null
        let timebm = null;
        if (time) {
            timebh = time.split(":")[0]; //time的时刻度
            timebm = time.split(":")[1]; //time的分刻度
        }
        return timebh * 60 + timebm * 1
    },
    // 根据日期计算相差天数    2018-01-03 00:00:02  2018-01-05 23:00:00   得到2
    getdfromtime: function (day1, day2) {
        var alldays = ((new Date(day2.replace(/-/g, "/"))) - (new Date(day1.replace(/-/g, "/"))));
        var days = parseInt(alldays / 1000 / 60 / 60 / 24);
        return days
    },

    // 根据日期计算 小时的时间差    
    gettfromtime: function (time1, time2) {
        // 格式要求 时间Date
        if (typeof time1 == 'string') {
            return false;
        }
        let dealtime = (time2.getTime() - time1.getTime()) / 1000 / 60 / 60;
        return dealtime
    },
    // 根据属性值排序  or ;true-升序 false-降序
    compare: function (property, or) {
        return function (a, b) {
            var value1 = a[property];
            var value2 = b[property];
            if (or) {
                return value1 - value2;
            } else {
                return value2 - value1;
            }
        }
    },
    // 获取指定日期的第n天  如 昨天-1 前天-2
    getNDay: function (nowdate, days) {
        let nowTime = nowdate.getTime();
        let ms = 24 * 3600 * 1000 * days;
        let returndate = nowdate.setTime(parseInt(nowTime + ms));
        return returndate;
    },
    //获取今天的日期
    getToday:function(){
        var now = new Date();
        var year = now.getFullYear(); //得到年份
        var month = now.getMonth() + 1;//得到月份
        var date = now.getDate();//得到日期
        var hour = now.getHours();//得到小时
        var minu = now.getMinutes();//得到分钟
        if (month < 10) month = "0" + month;
        if (date < 10) date = "0" + date;
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        return year + "-" + month + "-" + date + " " + hour + ":" + minu
    },

}
// 字符串加工
let workingStr = {
    longSTR: function (str, maxLength) {
        if ((str.length) < 6 || (maxLength < 6)) {
            return str;
        } else if (str.length >= maxLength) {
            let newNum = Math.floor(maxLength / 2) - 1;
            let preStr = str.slice(0, newNum);
            let endStr = str.slice(str.length - newNum, str.length);
            return preStr + '...' + endStr
        } else {
            return str;
        }
    },
}
export {
    countTime,
    workingStr
};