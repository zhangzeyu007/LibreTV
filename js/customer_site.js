const CUSTOMER_SITES = {
    dyttzy: {
         api: "http://caiji.dyttzyapi.com/api.php/provide/vod",
         name: "电影天堂资源"
       },
	heimuer: {
         api: "https://json.heimuer.xyz/api.php/provide/vod",
         name: "黑木耳"
       },
       ruyi: {
         api: "https://cj.rycjapi.com/api.php/provide/vod",
         name: "如意资源"
       },
       bfzy: {
         api: "https://bfzyapi.com/api.php/provide/vod",
         name: "暴风资源"
       },
       tyyszy: {
         api: "https://tyyszy.com/api.php/provide/vod",
         name: "天涯资源"
       },
	  ffyzy: {
	   api: "http://cj.ffzyapi.com/api.php/provide/vod",
	   name: "非凡云"
	 },
      iqiyi: {
       api: "https://www.iqiyizyapi.com/api.php/provide/vod",
       name: "iqiyi资源"
       },
       wolong: {
         api: "https://wolongzyw.com/api.php/provide/vod",
         name: "卧龙资源"
       },
   	wolong2: {
   	  api: "https://collect.wolongzyw.com/api.php/provide/vod",
   	  name: "卧龙资源2"
   	},
       jisu: {
         api: "https://jszyapi.com/api.php/provide/vod",
         name: "极速资源"
       },
       mozhua: {
         api: "https://mozhuazy.com/api.php/provide/vod",
         name: "魔爪资源"
       },
       yinghua: {
         api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
         name: "樱花资源"
       },
       wujin: {
         api: "https://api.wujinapi.me/api.php/provide/vod",
         name: "无尽资源"
       },
       wwzy: {
         api: "https://wwzy.tv/api.php/provide/vod",
         name: "旺旺短剧"
       },
       ikun: {
        api: "https://ikunzyapi.com/api.php/provide/vod",
         name: "iKun资源"
       },
       lzi: {
         api: "https://cj.lziapi.com/api.php/provide/vod",
         name: "量子资源站"
       },
	huya": {
	  api: "https://www.huyaapi.com/api.php/provide/vod",
	  name: "虎牙资源"
	},
	ckzy: {
	  api: "https://ckzy.me/api.php/provide/vod",
	  name: "CK资源"
	},
	"wujinzy": {
	  api: "https://api.wujinapi.com/api.php/provide/vod",
	  name: "无尽资源2",
	 
	},
	hongniuzy: {
	  api: "https://www.hongniuzy2.com/api.php/provide/vod",
	  name: "红牛资源"
	} 
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
