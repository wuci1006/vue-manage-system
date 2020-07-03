<template>
    <div class="websocket">
        <h3>websocket</h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                websock: null,
            }
        },
        created() {
            this.initWebSocket();//初始化weosocket
        },
        beforeDestroy() {
            if(this.websock){
                this.websock.close(); //离开路由之后断开websocket连接
            }
        },
        methods: {

            //初始化weosocket
            initWebSocket() {
                const wsUrl = "ws://127.0.0.1:8080";
                this.websock = new WebSocket(wsUrl);
                this.websock.onmessage = this.websocketMessage;
                this.websock.onopen = this.websocketOpen;
                this.websock.onerror = this.websocketError;
                this.websock.onclose = this.websocketClose;
            },
            //数据接收
            websocketMessage(e) {
                const redata = JSON.parse(e.data);
            },
            //连接建立之后执行send方法发送数据
            websocketOpen() {
                let actions = {"test": "12345"};
                this.websocketSend(JSON.stringify(actions));
            },
            //数据发送
            websocketSend(data) {
                this.websock.send(data);
            },
            //连接建立失败重连
            websocketError() {
                this.initWebSocket();
            },
            //关闭连接
            websocketClose(e) {
                console.log('websocket断开连接');
                // this.websock.close();
            },
            // 加载定时器
            loadTimer() {
                this.timer = setInterval(() => {
                    this.countTime++;
                }, 1000);
            },
            // 清除定时器
            closeTimer() {
                clearInterval(this.timer);
                this.countTime = 0;
            },
        },
    }
</script>
<style>
    .websocket{
        padding:20px;
        margin:20px;
        background-color: #fff;
    }

</style>
