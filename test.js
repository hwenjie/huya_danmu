const HuyaDanmu = require('./src/index')

function onChat(data){ // 弹幕消息
    console.log(data)
}
function onGift(data){ // 送礼消息
    console.log(data)
}
function onError(data){
    console.log(data)
}

new HuyaDanmu({
    roomid: '123',
    onChat,
    onGift,
    onError
}).start()

new HuyaDanmu({
    roomid: '456',
    onChat,
    onGift,
    onError
}).start()
