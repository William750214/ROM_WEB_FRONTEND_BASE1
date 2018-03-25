(function(){
	SEAP = {};
	SEAP.StringUtil = {};
	SEAP.MathUtil = {};
	SEAP.DateUtil = {};
	SEAP.CookieUtil = {};

	//Add 
	SEAP.CookieUtil.add = function (name,value,expiresMins,path,domain,secure) {
		var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
		
		if (expiresMins != undefined) {
			var date = new Date();
			date.setTime(date.getTime() + expiresMins * 60 * 1000);
			cookieText += ";expires=" + date.toGMTString();
		}
		
		if (path != undefined) {
			cookieText += ";path=" + path;		
		} else {
			cookieText += ";path=/";	
		}

		if (domain != undefined) {
			cookieText += ";domain" + domain;
		}
		
		if ((secure != undefined) && secure === true) {
			cookieText += ";secure";
		}

		document.cookie = cookieText;
	};

	//getAll
	SEAP.CookieUtil.getAll = function () {
		var strCookie = document.cookie;
		var cookies = {};
		var cookieItemArr = strCookie.split("; ");

		for (var i = 0; i < cookieItemArr.length; i++) {
			var cookieArr = cookieItemArr[i].split("=");
			cookies[decodeURIComponent(cookieArr[0])] = decodeURIComponent(cookieArr[1]);
		}
		return cookies;
	};

	//get
	SEAP.CookieUtil.get = function (name) {
		var cookies = SEAP.CookieUtil.getAll();
		return cookies[name];
	};

	//remove
	SEAP.CookieUtil.remove = function (name) {
		SEAP.CookieUtil.add(name,"",-1 * 24 * 60);
	};

	//removeAll
	SEAP.CookieUtil.removeAll = function () {
		var cookies = SEAP.CookieUtil.getAll();

		if ((cookies != null) && (cookies != undefined)) {
			for (var item in cookies) {
				SEAP.CookieUtil.remove(item);
			}
		}
	};
	

}())