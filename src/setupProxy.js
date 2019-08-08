const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api/courseplan', { 
    target: 'http://10.9.65.236:5500/CoursePlan',
    changeOrigin: true
  }))
}