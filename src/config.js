let config = require('../config');

export default {
  production: {
      apiUrl: "http://backend.instaresume.kunalvarma.in/api"
  },

  development: {
      apiUrl: "http://identity.app/api"
  },

  get(key) {
    if (process.env.NODE_ENV === "production")
      return this.production[key];
    else
      return this.development[key];
  }
}
