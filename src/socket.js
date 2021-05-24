
const AppConfig = {
    PROTOCOL: "ws://",
    // TODO: change to localhost if you wish to run it locally
    HOST: "192.168.4.25",
    // HOST: "dinky.default.andwynn.uk0.bigv.io",
    PORT: ":3001"
}

const ConnectWebsocket = (function () {
    function createInstance() {
        const socket = new WebSocket(AppConfig.PROTOCOL + AppConfig.HOST + AppConfig.PORT);
        return socket;
    }

    return {
        getInstance: function () {
            return createInstance();
        }
    };
})();

export default ConnectWebsocket;