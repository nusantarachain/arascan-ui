
import io from 'socket.io-client';

export default ({ app }, inject) => {
  console.log('connecting to ws server...');

  console.log('🚀 ~ file: ws.js ~ line 6 ~ app.$config.wsApiUrl', app.$config.wsApiUrl);

  const socket = io(app.$config.wsApiUrl, { path: '/socket' });

  inject('ws', {
    socket,
    send(key, data) {
      socket.emit(key, data);
    },
  });
};


// export default ({ app }, inject) => {
//   console.log("connecting to ws server...");
//   const wsc = new WebSocket(process.env.WS_API_URL);
//   // const self = this;
//   wsc.onmessage = msgEvent => {
//     // console.log(incomingMessage)
//     console.log("got ws message from server: " + msgEvent.data);
//     const jd = JSON.parse(msgEvent.data);
//     if (jd != null) {
//       if (window.$nuxt){
//         if (jd.type == "stats") {
//           window.$nuxt.$root.$emit("stats-update", jd);
//         } else {
//           window.$nuxt.$root.$emit(jd.type, jd);
//         }
//       }
//     }
//   };
// //   window.onNuxtReady((app) => {
// //     // your have access to `window.$nuxt.$root` here
// // })
//   function waitForConnection(callback, interval) {
//     if (wsc.readyState === 1) {
//       callback();
//     } else {
//       setTimeout(function() {
//         waitForConnection(callback, interval);
//       }, interval);
//     }
//   }
//   inject("ws", {
//     send(data) {
//       waitForConnection(() => wsc.send(data), 1000);
//     }
//   });
// };
