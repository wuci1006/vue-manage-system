class MyBase{
	//获取年月日 时分秒
	static formatDate(date,value) { 
        var year = date.getFullYear(); 
        var month = date.getMonth() + 1; 
        var day = date.getDate(); 
        var hour = date.getHours(); 
        var minute = date.getMinutes(); 
        var second = date.getSeconds(); 
        if (month < 10) month = '0' + month;
        if (day < 10) day = '0' + day;
        if (hour < 10) hour = '0' + hour;
        if (minute < 10) minute = '0' + minute;
        if (second < 10) second = '0' + second;
		if(value == 'datetime'){
			return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
		}else if(value == 'date'){
			return year + "-" + month + "-" + day;
		}
    }
	//比较两个日期相差多少天
	static betweenDate(value1,value2) {
	    var day1 = new Date(value1);
	    var day2 = new Date(value2);
	    return (day2 - day1) / (1000 * 60 * 60 * 24);
	}
	//比较两个时间的大小
	static compareTime(date1,date2){
	    var oDate1 = new Date(date1);
	    var oDate2 = new Date(date2);
	    if(oDate1.getTime() >= oDate2.getTime()){
	        return false;
	    }else{
	        return true;
	    } 
	}
	//判断是否为手机号
	static isPhoneNum(str) {
	    return /^1[3|4|5|6|7|8|9][0-9]{9}$/g.test(str);
	}
	//判断是否为邮箱
	static isEmail(str) {
	    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(str);
	}
	//获取路径中携带的参数值
	static getUrlParam(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) return unescape(r[2]); return null;
	}
	//数组去重
	static newArrayUnique(array){
	    var temp = []; //一个新的临时数组
	    for(var i = 0; i < array.length; i++){
	        if(temp.indexOf(array[i]) == -1){//没有出现就等于-1
	            temp.push(array[i]);
	        }
	    }
	    return temp;
	}
}


export default MyBase;