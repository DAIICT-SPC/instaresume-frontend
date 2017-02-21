let config = require('../config');
import Env from './env'

export default {
  apiUrl: Env.apiUrl,
  token: Env.apiKey,

  get(key) {
    return this[key];
  }
}
