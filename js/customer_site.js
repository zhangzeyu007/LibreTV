/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2025-09-30 10:40:48
 * @LastEditors: 张泽雨
 * @LastEditTime: 2025-09-30 11:05:11
 * @FilePath: /LibreTV/js/customer_site.js
 */
const CUSTOMER_SITES = {
  dyttzy: {
    api: "http://caiji.dyttzyapi.com/api.php/provide/vod",
    name: "电影天堂资源",
    url: "http://caiji.dyttzyapi.com/api.php/provide/vod",
  },
  ruyi: {
    api: "https://cj.rycjapi.com/api.php/provide/vod",
    name: "如意资源",
    url: "https://cj.rycjapi.com/api.php/provide/vod",
  },
  niuniu: {
    api: "https://api.niuniuzy.me/api.php/provide/vod",
    name: "牛牛资源",
    url: "https://api.niuniuzy.me/api.php/provide/vod",
  },
  douban: {
    api: "https://caiji.dbzy5.com/api.php/provide/vod",
    name: "豆瓣资源",
    url: "https://caiji.dbzy5.com/api.php/provide/vod",
  },
  maoyan: {
    api: "https://api.maoyanapi.top/api.php/provide/vod",
    name: "猫眼资源",
    url: "http://caiji.dyttzyapi.com/api.php/provide/vod",
  },
  bfzy: {
    api: "https://bfzyapi.com/api.php/provide/vod",
    name: "暴风资源",
    url: "https://bfzyapi.com/api.php/provide/vod",
  },
  tyyszy: {
    api: "https://tyyszy.com/api.php/provide/vod",
    name: "天涯资源",
    url: "https://tyyszy.com/api.php/provide/vod",
  },
  ffyzy: {
    api: "http://cj.ffzyapi.com/api.php/provide/vod",
    name: "非凡云",
    url: "http://cj.ffzyapi.com/api.php/provide/vod",
  },
  iqiyi: {
    api: "https://www.iqiyizyapi.com/api.php/provide/vod",
    name: "iqiyi资源",
    url: "https://www.iqiyizyapi.com/api.php/provide/vod",
  },
  wolong: {
    api: "https://wolongzyw.com/api.php/provide/vod",
    name: "卧龙资源",
    url: "https://wolongzyw.com/api.php/provide/vod",
  },
  wolong2: {
    api: "https://collect.wolongzyw.com/api.php/provide/vod",
    name: "卧龙资源2",
    url: "https://collect.wolongzyw.com/api.php/provide/vod",
  },
  jisu: {
    api: "https://jszyapi.com/api.php/provide/vod",
    name: "极速资源",
    url: "https://jszyapi.com/api.php/provide/vod",
  },
  mozhua: {
    api: "https://mozhuazy.com/api.php/provide/vod",
    name: "魔爪资源",
    url: "https://mozhuazy.com/api.php/provide/vod",
  },
  yinghua: {
    api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
    name: "樱花资源",
    url: "http://caiji.dyttzyapi.com/api.php/provide/vod",
  },
  wwzy: {
    api: "https://wwzy.tv/api.php/provide/vod",
    name: "旺旺短剧",
    url: "https://wwzy.tv/api.php/provide/vod",
  },
  ikun: {
    api: "https://ikunzyapi.com/api.php/provide/vod",
    name: "iKun资源",
    url: "https://ikunzyapi.com/api.php/provide/vod",
  },
  lzi: {
    api: "https://cj.lziapi.com/api.php/provide/vod",
    name: "量子资源站",
    url: "https://cj.lziapi.com/api.php/provide/vod",
  },
  pingguo: {
    api: "https://ikunzyapi.com/api.php/provide/vod",
    name: "苹果",
    url: "https://ikunzyapi.com/api.php/provide/vod",
  },
  kuaiche: {
    api: "https://caiji.kuaichezy.org/api.php/provide/vod",
    name: "快车",
    url: "https://caiji.kuaichezy.org/api.php/provide/vod",
  },
  huya: {
    api: "https://www.huyaapi.com/api.php/provide/vod",
    name: "虎牙资源",
    url: "https://www.huyaapi.com/api.php/provide/vod",
  },
  ckzy: {
    api: "https://ckzy.me/api.php/provide/vod",
    name: "CK资源",
    url: "https://ckzy.me/api.php/provide/vod",
  },
};

// 调用全局方法合并
if (window.extendAPISites) {
  window.extendAPISites(CUSTOMER_SITES);
} else {
  console.error("错误：请先加载 config.js！");
}
