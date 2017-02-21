let config = require('../config');
import Env from './env'

let api_key = Env.apiKey;
let api_url = Env.apiUrl;

export default {
  apiUrl: api_url,
  apiKey: api_key
}
