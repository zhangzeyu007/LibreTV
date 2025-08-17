const CUSTOMER_SITES = {
   "dyttzy": {
         "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
         "name": "电影天堂资源",
         "url": "http://caiji.dyttzyapi.com/api.php/provide/vod"
       },
   "pingguo": {
         "api": "https://ikunzyapi.com/api.php/provide/vod",
         "name": "苹果",
         "url": "https://ikunzyapi.com/api.php/provide/vod"
       },
    "lzi": {
         "api": "https://cj.lziapi.com/api.php/provide/vod",
         "name": "量子",
         "url": "https://cj.lziapi.com/api.php/provide/vod"
       },
    "ruyi": {
         "api": "https://cj.rycjapi.com/api.php/provide/vod",
         "name": "如意",
         "url": "https://cj.rycjapi.com/api.php/provide/vod"
       },
    "baofeng": {
         "api": "https://bfzyapi.com/api.php/provide/vod",
         "name": "暴风",
         "url": "https://bfzyapi.com/api.php/provide/vod"
       } 
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
