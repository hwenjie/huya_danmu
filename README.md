## 虎牙直播弹幕监听

> 2021-7-5 16:49

## 使用说明

```javascript
const HuyaDanmu = require('./src')

/*
* 接收消息
* new HuyaDanmu(config)
* 每个实例监听一个直播间
*/
new HuyaDanmu({
    roomid: 'kaerlol',
    onChat: function(message){},
    onGift: function(message){},
    onError: function(message){}
}).start()

new HuyaDanmu({
    roomid: 'kpl',
    onChat: function(message){},
    onGift: function(message){},
    onError: function(message){}
}).start()


```

## config参数说明

|  参数   |  类型  |  必填  | 默认 | 说明  |
|  ----   | ----   | ----   | ---- | ----  |
| roomid  | String/Number |  ✔️  | ❌ | 要监听的直播间id  |
| onChat  | Function |  ❌  | ❌ | 弹幕消息回调  |
| onGift  | Function |  ❌  | ❌ | 送礼消息回调(type说明: 6501 普通礼物 6502 贵重礼物 6507 虎牙一号) |
| onError  | Function |  ❌  | ❌ | 错误消息回调(type说明: 1 获取直播间信息出错 2 websocket错误 3 代码功能性错误)  |
| heartbeatTime  | Number |  ❌  | 60 | 心跳时间❤️ 单位:秒 |
| timeout  | Number |  ❌  | 60 | 请求超时时间，单位:秒 |

