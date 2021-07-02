const events = require('events')
const ws = require('ws')
const request = require('request')

class HuyaDanmu extends events{
    constructor(config){
        super()
        this.config = {
            roomid: '',
            subsid: '',
            topsid: '',
            yyuid: '',
            sHuYaUA: 'webh5&2106011457&websocket',
            wsApi: 'wss://cdnws.api.huya.com',
            heartbeatTime: 60, //60s/心跳
            ...config
        }

        config.onChat && this.on('onChat', config.onChat)
        config.onGift && this.on('onGift', config.onGift)
        config.onError && this.on('onError', config.onError)
    }


    async start(){
        this.emit('onChat', this.config.roomid + '-弹幕')
        this.emit('onGift', this.config.roomid + '-礼物')
        this.emit('onError', this.config.roomid + '-错误')
        return this
    }
}

module.exports = HuyaDanmu