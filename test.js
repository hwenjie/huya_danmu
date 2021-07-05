const HuyaDanmu = require('./src')

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
    roomid: 'kpl',
    onChat,
    onGift,
    onError
}).start()