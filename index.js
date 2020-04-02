const express = require('express');
var cors = require('cors')


const main = async () => {
  const app = express()
  app.use(cors());
  app.post("/", (req, res) => {
    res.status(500).json(
      {error:"news_subscribe_duplicate",error_description:"You have already registered for the newsletter"})
  })

  app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
}

main()
