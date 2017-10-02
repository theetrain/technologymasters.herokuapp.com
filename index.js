var express = require('express')
var request = require('superagent')

const app = express()

app.get('/', function (req, response) {
  let team = ''

  request.get('https://slack.com/api/team.info')
  .query({ token: process.env.TOKEN })
  .end((err, res) => {
    team = res.body.team
    response.send(team.name)
  })
})

app.listen(3000)
