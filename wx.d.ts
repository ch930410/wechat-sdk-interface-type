import { APIList } from "./APIList";

declare global {
  interface Window {
    wx: WeChatAPI;
  }
}

export interface WeChatAPI {
  config(conf: Config): void;//配置
  ready?: () => void; // ready接口处理成功验证
  error?: (err: any) => void; // error接口处理失败验证
  checkJsApi(res: any): void;
}

/**
 * 注入权限验证配置
 */
export interface Config {
  debug?: boolean; // 是否开启调试模式
  appId: string; // 必填，公众号的唯一标识
  timestamp: string; // 必填，生成签名的时间戳
  nonceStr: string; // 必填，生成签名的随机串
  signature: string; // 必填，签名
  jsApiList: (keyof typeof APIList)[]; // 必填，需要使用的JS接口列表
}
