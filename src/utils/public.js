const publicFunction = {
	/**
	* 将接口路径后面加上时间戳
	* @param {String} url 接口
	*/
	joinTime: url => `${url}?time=${new Date().getTime()}`,
	/**
	* 数字转整数 如 100000 转为10万
	* @param {Number} num 需要转化的数
	* @param {Number} point 需要保留的小数位数
	*/
	tranNumber(num, point) {
		let numStr = num.toString()
		// 十万以内直接返回
		if (numStr.length < 6) {
			return numStr
		}
		//大于8位数是亿
		else if (numStr.length > 8) {
			let decimal = numStr.substring(
				numStr.length - 8,
				numStr.length - 8 + point
			)
			return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿'
		}
		//大于6位数是十万 (以10W分割 10W以下全部显示)
		else if (numStr.length > 5) {
			let decimal = numStr.substring(
				numStr.length - 4,
				numStr.length - 4 + point
			)
			return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万'
		}
	}
};

export default publicFunction;