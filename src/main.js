import Vue from 'vue'
import axios from 'axios'
import App from './App'

// Create a global Event Bus
var EventBus = new Vue();

// Make Axios globally available
window.axios = axios.create({
  baseURL: 'http://identity.app/api'
});

window.directDownloadFile = {};

window.directDownloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
window.directDownloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;

// Add to Vue properties by exposing a getter for $bus
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function() {
      return EventBus;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
