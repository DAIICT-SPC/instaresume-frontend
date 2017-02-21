let config = require('../config');

export default {
  production: {
      apiUrl: "http://backend.instaresume.kunalvarma.in/api",
      token: '$2y$10$cEOiWUjwt9Pn0I7m2HdeOcYWOFZM9uNKYEjSRTYSycOMXhxTLz6'
  },

  development: {
      apiUrl: "http://identity.app/api",
      token: 'tHdUjw9PncYWOFZM9uNKYEOEOiWeOcMXhxTLz6jSRTYSyc'
  },

  get(key) {
    if (process.env.NODE_ENV === "production")
      return this.production[key];
    else
      return this.development[key];
  }
}
