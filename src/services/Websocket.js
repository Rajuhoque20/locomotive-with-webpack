// import baseUrl from "./baseUrl";
// // let reconnectCount = 0;
// class WebSocketManager {
//   static instance;
//   constructor(url) {
//     if (WebSocketManager.instance) {
//       return WebSocketManager.instance; // Ensure only one instance exists
//     }
//     this.baseUrl = url;
//     this.ws = null;
//     this.topics = {};
//     WebSocketManager.instance = this;
//     this.reconnectCount=0;
//   }
//   connect() {
//     if (this.ws && this.ws.readyState === WebSocket.OPEN) {
//       console.warn("WebSocket is already connected.");
//       return;
//     }
//     this.ws = new WebSocket(this.baseUrl);
//     this.ws.onopen = () => {
//       console.log("WebSocket connected");
//     };
//     this.ws.onmessage = (event) => {
//       try {
//         const message = JSON.parse(event.data);
//         this.notifySubscribers(message);
//       } catch (error) {
//         console.error("Error parsing WebSocket message:", error);
//       }
//     };
//     this.ws.onclose = () => {
//       this.reconnectCount++;
//       if (this.reconnectCount < 10) {
//         setTimeout(this.connect, 100);
//       }
//     };
//     this.ws.onerror = (error) => {
//       console.error("WebSocket error:", error);
//       this.reconnectCount++;
//       if (this.reconnectCount < 10) {
//         setTimeout(this.connect, 100);
//       }
//     };
//   }
//   close() {
//     if (this.ws) {
//       this.ws.close();
//     }
//   }
//   send(topic, action, data = null) {
//     if (action === "subcribe") {
//       if (!this.topics[topic]) {
//         this.topics[topic] = [];
//       }
//     }
//     if (this.ws && this.ws.readyState === WebSocket.OPEN) {
//       this.ws.send(
//         JSON.stringify({
//           topic,
//           action,
//           data,
//         })
//       );
//     } else {
//       console.error("WebSocket is not open. Cannot subscribe.");
//     }
//   }
//   notifySubscribers(message) {
//     const { topic, data } = message;
//     if (topic && this.topics[topic]) {
//       this.topics[topic].forEach((callback) => {
//         if (typeof callback === "function") {
//           callback(data);
//         }
//       });
//     }
//   }
//   subscribe(data, callback) {
//     let topic = data;
//     if (typeof topic !== "string") {
//       topic = data?.topic;
//     }
//     if (!this.topics[topic]) {
//       this.topics[topic] = [];
//       if (this.ws && this.ws.readyState === WebSocket.OPEN) {
//         this.ws.send(
//           JSON.stringify({
//             action: "subscribe",
//             topic: topic,
//             data: data?.data,
//           })
//         );
//       } else {
//         console.error("WebSocket is not open. Cannot subscribe.");
//       }
//     }
//     let exist = this.topics[topic]?.find((item) => item === callback);
//     if (!exist) {
//       this.topics[topic].push(callback);
//     }
//   }
//   unsubscribe(topic, callback) {
//     if (this.topics[topic]) {
//       this.topics[topic] = this.topics[topic].filter((cb) => cb !== callback);
//     }
//   }
  // unsubscribeTopic(topic) {
  //   if (this.ws && this.ws.readyState === WebSocket.OPEN) {
  //   this.ws.send(
  //     JSON.stringify({ action: "unsubscribe", topic: topic, data: null })
  //   );
  //   delete this.topics[topic];
  //   }
  //   else
  //   {
  //     console.error("WebSocket is not open. Cannot publish message.");
  //   }
  // }
//   publish(topic, data, callback) {
//     if (this.ws && this.ws.readyState === WebSocket.OPEN) {
//       this.ws.send(
//         JSON.stringify({ action: "publish", topic: topic, data: data })
//       );
//     } else {
//       console.error("WebSocket is not open. Cannot publish message.");
//     }
//     if (callback) {
//       if (!this.topics[topic]) {
//         this.topics[topic] = [];
//       }
//       this.topics[topic].push(callback);
//     }
//   }
// }
// const websocket = new WebSocketManager(baseUrl);
// export default websocket;

// new connection method

import baseUrl from "./baseUrl";
let reconnectCount = 0;
class WebSocketManager {
  static instance;
  constructor(url) {
    if (WebSocketManager.instance) {
      return WebSocketManager.instance; // Ensure only one instance exists
    }
    this.baseUrl = url;
    this.ws = null;
    this.topics = {};
    this.reconnectCount = 0;
    this.maxReconnectAttempts = 10;
    this.pendingApiRequests = []; // Queue for API requests
    WebSocketManager.instance = this;
    this.reconnectCount=0;
  }
  connect() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      console.warn("WebSocket is already connected.");
      return;
    }
    this.ws = new WebSocket(this.baseUrl);
    this.ws.onopen = () => {
      console.log("WebSocket connected");
    };
    this.ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        this.notifySubscribers(message);
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };
    this.ws.onclose = () => {
      this.reconnectCount++;
      if (this.reconnectCount < 10) {
        setTimeout(this.connect, 100);
      }
    };
    this.ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      this.reconnectCount++;
      if (this.reconnectCount < 10) {
        setTimeout(this.connect, 100);
      }
    };
  }
  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
  send(topic, action, data = null) {
    if (action === "subcribe") {
      if (!this.topics[topic]) {
        this.topics[topic] = [];
      }
    }
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(
        JSON.stringify({
          topic,
          action,
          data,
        })
      );
    } else {
      console.error("WebSocket is not open. Cannot subscribe.");
    }
  }
  notifySubscribers(message) {
    const { topic, data } = message;
    if (topic && this.topics[topic]) {
      this.topics[topic].forEach((callback) => {
        if (typeof callback === "function") {
          callback(data);
        }
      });
    }
  }

  subscribe(topic, callback,data) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
      this.send(topic, "subscribe",data);
    
  }

    if (!this.topics[topic].includes(callback)) {
      this.topics[topic].push(callback);
    }
  }
  unsubscribe(topic, callback) {
    if (this.topics[topic]) {
      this.topics[topic] = this.topics[topic].filter((cb) => cb !== callback);
    }
  }

  // unsubscribeTopic(topic) {
  //   if (this.ws?.readyState === WebSocket.OPEN) {
  //     this.send(topic, "unsubscribe");
  //   }
  //   delete this.topics[topic];
  // }

  unsubscribeTopic(topic) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
    this.ws.send(
      JSON.stringify({ action: "unsubscribe", topic: topic, data: null })
    );
    delete this.topics[topic];
    }
    else
    {
      console.error("WebSocket is not open. Cannot publish message.");
    }
  }

  publish(topic, data) {
        console.log('frompublish',topic,data)
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(
            JSON.stringify({ action: "publish", topic: topic, data: data })
          );
        } else {
          console.error("WebSocket is not open. Cannot publish message.");
        }
      
      }

      /**
   * Makes an API request with automatic retry logic.
   */
  async apiRequest(url, options = {}, attempt = 1) {
    try {
      const response = await fetch(url, options);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    } catch (error) {
      console.error(`API request failed (Attempt ${attempt}):`, error);

      if (attempt < this.maxReconnectAttempts) {
        const delay = Math.min(1000 * 2 ** attempt, 30000); // Exponential backoff
        // console.log(`Retrying API request in ${delay / 1000} seconds...`);
        return new Promise((resolve) =>
          setTimeout(
            () => resolve(this.apiRequest(url, options, attempt + 1)),
            delay
          )
        );
      } else {
        console.error("API request failed after maximum retries.");
        throw error;
      }
    }
  }

  /**
   * Queues an API request if WebSocket is disconnected and retries it on reconnect.
   */
  // async safeApiRequest(url, options = {}) {
  //   if (this.ws?.readyState !== WebSocket.OPEN) {
  //     console.warn("WebSocket disconnected, queuing API request:", url);
  //     this.pendingApiRequests.push({ url, options });
  //   } else {
  //     console.error("WebSocket is not open. Cannot publish message.");
  //   }
  //   if (callback) {
  //     if (!this.topics[topic]) {
  //       this.topics[topic] = [];
  //     }
  //     this.topics[topic].push(callback);
  //   }
  // }
}
const websocket = new WebSocketManager(baseUrl);
export default websocket;



//new connection method

// import baseUrl from "./baseUrl";

// class WebSocketManager {
//   static instance;

//   constructor(url) {
//     if (WebSocketManager.instance) {
//       return WebSocketManager.instance;
//     }
//     this.baseUrl = url;
//     this.ws = null;
//     this.topics = {};
//     this.reconnectCount = 0;
//     this.maxReconnectAttempts = Infinity;
//     this.pendingApiRequests = []; // Queue for API requests
//     WebSocketManager.instance = this;
//   }

//   connect() {
//     if (this.ws && this.ws.readyState === WebSocket.OPEN) {
//       console.warn("WebSocket is already connected.");
//       return;
//     }

//     this.ws = new WebSocket(this.baseUrl);

//     this.ws.onopen = () => {
//       console.log("WebSocket connected");
//       this.reconnectCount = 0; // Reset reconnect attempts
//       //this.retryPendingRequests(); // Retry stored API requests
//     };

//     this.ws.onmessage = (event) => {
//       try {
//         const message = JSON.parse(event.data);
//         this.notifySubscribers(message);
//       } catch (error) {
//         console.error("Error parsing WebSocket message:", error);
//       }
//     };

//     this.ws.onclose = () => {
//       console.warn("WebSocket closed, attempting to reconnect...");
//       this.handleReconnect();
//     };

//     this.ws.onerror = (error) => {
//       console.error("WebSocket error:", error);
//       this.ws.close(); // Ensure it's properly closed before reconnecting
//       this.handleReconnect();
//     };
//   }

//   handleReconnect() {
//     if (this.reconnectCount < this.maxReconnectAttempts) {
//       const delay = Math.min(1000 * 2 ** this.reconnectCount, 30000); // Exponential backoff up to 30 sec
//       this.reconnectCount++;
//       // console.log(`Reconnecting in ${delay / 1000} seconds...`);
//       setTimeout(() => this.connect(), delay);
//     } else {
//       console.error("Max reconnect attempts reached. Manual reload required.");
//     }
//   }

//   close() {
//     if (this.ws) {
//       this.ws.close();
//     }
//   }

//   send(topic, action, data = null) {
//     if (action === "subscribe" && !this.topics[topic]) {
//       this.topics[topic] = [];
//     }

//     if (this.ws && this.ws.readyState === WebSocket.OPEN) {
//       this.ws.send(JSON.stringify({ topic, action, data }));
//     } else {
//       console.error("WebSocket is not open. Cannot send message.");
//     }
//   }

//   notifySubscribers(message) {
//     const { topic, data } = message;
//     if (topic && this.topics[topic]) {
//       this.topics[topic].forEach((callback) => callback(data));
//     }
//   }

//   subscribe(topic, callback) {
//     if (!this.topics[topic]) {
//       this.topics[topic] = [];
//       this.send(topic, "subscribe");
//     }

//     if (!this.topics[topic].includes(callback)) {
//       this.topics[topic].push(callback);
//     }
//   }

//   unsubscribe(topic, callback) {
//     if (this.topics[topic]) {
//       this.topics[topic] = this.topics[topic].filter((cb) => cb !== callback);
//       if (this.topics[topic].length === 0) {
//         delete this.topics[topic];
//       }
//     }
//   }

//   unsubscribeTopic(topic) {
//     if (this.ws?.readyState === WebSocket.OPEN) {
//       this.send(topic, "unsubscribe");
//     }
//     delete this.topics[topic];
//   }

//   publish(topic, data, callback) {
//     this.send(topic, "publish", data);
//     if (callback) {
//       this.subscribe(topic, callback);
//     }
//   }

//   /**
//    * Makes an API request with automatic retry logic.
//    */
//   async apiRequest(url, options = {}, attempt = 1) {
//     try {
//       const response = await fetch(url, options);
//       if (!response.ok)
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       return response.json();
//     } catch (error) {
//       console.error(`API request failed (Attempt ${attempt}):`, error);

//       if (attempt < this.maxReconnectAttempts) {
//         const delay = Math.min(1000 * 2 ** attempt, 30000); // Exponential backoff
//         // console.log(`Retrying API request in ${delay / 1000} seconds...`);
//         return new Promise((resolve) =>
//           setTimeout(
//             () => resolve(this.apiRequest(url, options, attempt + 1)),
//             delay
//           )
//         );
//       } else {
//         console.error("API request failed after maximum retries.");
//         throw error;
//       }
//     }
//   }

//   /**
//    * Queues an API request if WebSocket is disconnected and retries it on reconnect.
//    */
//   async safeApiRequest(url, options = {}) {
//     if (this.ws?.readyState !== WebSocket.OPEN) {
//       console.warn("WebSocket disconnected, queuing API request:", url);
//       this.pendingApiRequests.push({ url, options });
//     } else {
//       return this.apiRequest(url, options);
//     }
//   }

//   /**
//    * Retries all stored API requests when WebSocket reconnects.
//    */
//   retryPendingRequests() {
//     if (this.pendingApiRequests.length > 0) {
//       // console.log(
//       //   `Retrying ${this.pendingApiRequests.length} pending API requests...`
//       // );
//       this.pendingApiRequests.forEach(({ url, options }) => {
//         this.apiRequest(url, options)
//           .then(() => {
//             // console.log("API request successful:", url);
//           })
//           .catch((error) => {
//             console.error("Failed to retry API request:", error);
//           });
//       });
//       this.pendingApiRequests = [];
//     }
//   }
// }

// const websocket = new WebSocketManager(baseUrl);
// export default websocket;
