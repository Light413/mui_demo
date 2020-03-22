/**
 * 日期格式化-时间戳转日期字符串(yyyy-MM-dd HH:mm:ss)
 * @param {String} 要转化的格式 eg.yyyy-MM-dd HH:mm:ss 年月日时分秒
 * @param {Int} timestamp
 * @return{String} 格式化后的字符串
 */
function dateFormatterFromTimestamp(formatter , timestamp){
	if(!(formatter && timestamp))return;
	function _dataFormatter(s){
		return s < 10 ? '0' + s : s;
	}
	
	var str = formatter;
	var date=new Date(timestamp);
	var year=date.getFullYear(); 
	var mon = date.getMonth()+1; 
	var day = date.getDate(); 
	var hours = date.getHours(); 
	var minu = date.getMinutes(); 
	var sec = date.getSeconds(); 
	
	if(formatter.indexOf('yyyy') > -1){
		str = str.replace('yyyy' , year);
	}
	if(formatter.indexOf('MM') > -1){
		str = str.replace('MM' , _dataFormatter(mon));
	}
	if(formatter.indexOf('dd') > -1){
		str = str.replace('dd' , _dataFormatter(day));
	}
	if(formatter.indexOf('HH') > -1){
		str = str.replace('HH' , _dataFormatter(hours));
	}
	if(formatter.indexOf('mm') > -1){
		str = str.replace('mm' , _dataFormatter(minu));
	}
	if(formatter.indexOf('ss') > -1){
		str = str.replace('ss' , _dataFormatter(sec));
	}
	
	return str;
}


/**
 * 日期格式化 eg:2019-12-19+-+12:10
 * @param {Object} ts:时间戳
 * 1h = 1*60*60*1000 = 3600*1000ms
 * 
 */
function dateStrFromTimestamp(ts){
	var str = dateFormatterFromTimestamp('yyyy-MM-dd+-+HH:mm' , parseInt(ts))
	return  str;
}

function dateStrFromTimestamp2(ts){
	var str = dateFormatterFromTimestamp('yyyyMMddHHmmss' , parseInt(ts));
	return  str;
}


//时间戳转换成时间格式方法
function dateFromTimestamp(time , isfull) {
	if(!time){return '';}
	if(isfull){
		return dateFormatterFromTimestamp('yyyy-MM-dd HH:mm:ss' , parseInt(time)); 
	}
	
	return dateFormatterFromTimestamp('HH:mm' , parseInt(time));
}

/**
 * 格式化时间的辅助类，将一个时间转换成x小时前、y天前等
 */
var dateUtils = {
		UNITS: {
			'年': 31557600000,
			'月': 2629800000,
			'天': 86400000,
			'小时': 3600000,
			'分钟': 60000,
			'秒': 1000
		},
		humanize: function(milliseconds) {
			var humanize = '';
			mui.each(this.UNITS, function(unit, value) {
				if(milliseconds >= value) {
					humanize = Math.floor(milliseconds / value) + unit + '前';
					return false;
				}
				return true;
			});
			return humanize || '刚刚';
		},
		format: function(dateStr) {
			var date = this.parse(dateStr)
			var diff = Date.now() - date.getTime();
			if(diff < this.UNITS['天']) {
				return this.humanize(diff);
			}

			var _format = function(number) {
				return(number < 10 ? ('0' + number) : number);
			};
			
			return date.getFullYear() + '-' + _format(date.getMonth() + 1) + '-' + _format(date.getDate());
			// return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' + _format(date.getHours()) + ':' + _format(date.getMinutes());
		},
		parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
			var a = str.split(/[^0-9]/);
			return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
		}
	};
		