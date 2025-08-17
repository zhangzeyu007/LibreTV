const CUSTOMER_SITES = {
    "dyttzy": {
         "url": "http://caiji.dyttzyapi.com/api.php/provide/vod",
         "name": "电影天堂资源",
         "detail": "http://caiji.dyttzyapi.com"
       },
	"heimuer": {
         "url": "https://json.heimuer.xyz/api.php/provide/vod",
         "name": "黑木耳",
         "detail": "https://heimuer.tv"
       },
       "ruyi": {
         "url": "https://cj.rycjapi.com/api.php/provide/vod",
         "name": "如意资源"
       },
       "bfzy": {
         "url": "https://bfzyapi.com/api.php/provide/vod",
         "name": "暴风资源"
       },
       "tyyszy": {
         "url": "https://tyyszy.com/api.php/provide/vod",
         "name": "天涯资源"
       },
	"ffyzy": {
	"url": "http://cj.ffzyapi.com/api.php/provide/vod",
	"name": "非凡云",
	"detail": "http://cj.ffzyapi.com"
	 },
       "iqiyi": {
       "url": "https://www.iqiyizyapi.com/api.php/provide/vod",
         "name": "iqiyi资源"
       },
       "wolong": {
         "url": "https://wolongzyw.com/api.php/provide/vod",
         "name": "卧龙资源"
       },
   	"wolong2": {
   	  "url": "https://collect.wolongzyw.com/api.php/provide/vod",
   	  "name": "卧龙资源2"
   	},
       "jisu": {
         "url": "https://jszyapi.com/api.php/provide/vod",
         "name": "极速资源",
         "detail": "https://jszyapi.com"
       },
       "mozhua": {
         "url": "https://mozhuazy.com/api.php/provide/vod",
         "name": "魔爪资源"
       },
       "yinghua": {
         "url": "https://m3u8.apiyhzy.com/api.php/provide/vod",
         "name": "樱花资源"
       },
       "wujin": {
         "url": "https://api.wujinapi.me/api.php/provide/vod",
         "name": "无尽资源"
       },
       "wwzy": {
         "url": "https://wwzy.tv/api.php/provide/vod",
         "name": "旺旺短剧"
       },
       "ikun": {
         "url": "https://ikunzyapi.com/api.php/provide/vod",
         "name": "iKun资源"
       },
       "lzi": {
         "url": "https://cj.lziapi.com/api.php/provide/vod",
         "name": "量子资源站"
       },
	"huya": {
	  "url": "https://www.huyaapi.com/api.php/provide/vod",
	  "name": "虎牙资源",
	  "detail": "https://www.huyaapi.com"
	},
	"ckzy": {
	  "url": "https://ckzy.me/api.php/provide/vod",
	  "name": "CK资源",
	  "detail": "https://ckzy.me"
	},
	"wujinzy": {
	  "url": "https://api.wujinapi.com/api.php/provide/vod",
	  "name": "无尽资源2",
	  "detail": "https://api.wujinapi.com"
	},
	"hongniuzy": {
	  "url": "https://www.hongniuzy2.com/api.php/provide/vod",
	  "name": "红牛资源",
	  "detail": "https://www.hongniuzy2.com"
	} 
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
