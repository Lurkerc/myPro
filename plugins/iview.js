import Vue from 'vue'

if (process.BROWSER_BUILD) {
  const iView = require('iview')
  Vue.use(iView)
}
