export default ({ app }, inject) => {
  console.log("connecting to ws server...");
  const wsc = new WebSocket(process.env.WS_API_URL);
  // const self = this;
  wsc.onmessage = msgEvent => {
    // console.log(incomingMessage)
    console.log("got ws message from server: " + msgEvent.data);
    const jd = JSON.parse(msgEvent.data);
    if (jd != null) {
      if ($nuxt) {
        if (jd.type == "stats") {
          $nuxt.$root.$emit("stats-update", jd);
        } else {
          $nuxt.$root.$emit(jd.type, jd);
        }
      }
    }
  };
  function waitForConnection(callback, interval) {
    if (wsc.readyState === 1) {
      callback();
    } else {
      setTimeout(function() {
        waitForConnection(callback, interval);
      }, interval);
    }
  }
  inject("ws", {
    send(data) {
      waitForConnection(() => wsc.send(data), 1000);
    }
  });
};
