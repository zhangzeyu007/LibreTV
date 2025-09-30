/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2025-09-30 10:40:48
 * @LastEditors: 张泽雨
 * @LastEditTime: 2025-09-30 10:51:58
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
  },
  niuniu: {
    api: "https://api.niuniuzy.me/api.php/provide/vod",
    name: "牛牛资源",
  },
  douban: {
    api: "https://caiji.dbzy5.com/api.php/provide/vod",
    name: "豆瓣资源",
  },
  maoyan: {
    api: "https://api.maoyanapi.top/api.php/provide/vod",
    name: "猫眼资源",
  },
  bfzy: {
    api: "https://bfzyapi.com/api.php/provide/vod",
    name: "暴风资源",
  },
  tyyszy: {
    api: "https://tyyszy.com/api.php/provide/vod",
    name: "天涯资源",
  },
  ffyzy: {
    api: "http://cj.ffzyapi.com/api.php/provide/vod",
    name: "非凡云",
  },
  iqiyi: {
    api: "https://www.iqiyizyapi.com/api.php/provide/vod",
    name: "iqiyi资源",
  },
  wolong: {
    api: "https://wolongzyw.com/api.php/provide/vod",
    name: "卧龙资源",
  },
  wolong2: {
    api: "https://collect.wolongzyw.com/api.php/provide/vod",
    name: "卧龙资源2",
  },
  jisu: {
    api: "https://jszyapi.com/api.php/provide/vod",
    name: "极速资源",
  },
  mozhua: {
    api: "https://mozhuazy.com/api.php/provide/vod",
    name: "魔爪资源",
  },
  yinghua: {
    api: "https://m3u8.apiyhzy.com/api.php/provide/vod",
    name: "樱花资源",
  },
  wwzy: {
    api: "https://wwzy.tv/api.php/provide/vod",
    name: "旺旺短剧",
  },
  ikun: {
    api: "https://ikunzyapi.com/api.php/provide/vod",
    name: "iKun资源",
  },
  lzi: {
    api: "https://cj.lziapi.com/api.php/provide/vod",
    name: "量子资源站",
  },
  pingguo: {
    api: "https://ikunzyapi.com/api.php/provide/vod",
    name: "苹果",
  },
  kuaiche: {
    api: "https://caiji.kuaichezy.org/api.php/provide/vod",
    name: "快车",
  },
  huya: {
    api: "https://www.huyaapi.com/api.php/provide/vod",
    name: "虎牙资源",
  },
  ckzy: {
    api: "https://ckzy.me/api.php/provide/vod",
    name: "CK资源",
  },
};

// 调用全局方法合并
if (window.extendAPISites) {
  window.extendAPISites(CUSTOMER_SITES);
} else {
  console.error("错误：请先加载 config.js！");
}
