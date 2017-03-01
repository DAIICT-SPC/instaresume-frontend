let config = require('../config');
import Env from './env'

export default {
  apiUrl: Env.apiUrl,
  token: Env.apiKey,
  gaTrackingID: Env.googleAnalyticsTrackingID,

  get(key) {
    return this[key];
  }
}
