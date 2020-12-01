const express = require("express");
const project = require("../project.config");

const app = express();
const contract = require("../api/index.json");

contract.apis.forEach((api) => {
  const url = `${contract.url}${api.url}`;
  app.get(url, (req, res) => {
    const location = `../api/${api.response}.json`
    console.log(`listening on ${url}, data: ${location}`);
    const data = require(location)
    res.json(data)
  });
});

module.exports = app;
