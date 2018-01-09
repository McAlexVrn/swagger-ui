var cbt = require("cbt_tunnels")

module.exports = {
  baseUrl: "http://local:3200",

  before: function(done) {
    console.log("Starting up tunnel")
    cbt.start({
      username: process.env.CBT_USERNAME || "",
      authkey: process.env.CBT_AUTHKEY || ""
    }, function(err, data) {
      if (err) {
        done(err)
      } else {
        done(data)
      }
    })
  },
  after: function(done) {
    console.log("Closing Down Tunnel")
    cbt.stop()
    done()
  }
}