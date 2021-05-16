
const AppConfig = {
    PROTOCOL: "ws://",
    // TODO: change to localhost if you wish to run it locally
    HOST: "192.168.4.25",
    // HOST: "dinky.default.andwynn.uk0.bigv.io",
    PORT: ":3001"
}

const Singleton = (function () {
    let instance;

    function createInstance() {
        const socket = new WebSocket(AppConfig.PROTOCOL + AppConfig.HOST + AppConfig.PORT);
        return socket;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;