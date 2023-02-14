const coap = require("coap");

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const port = 5683;

const sensor = {
  read: function (params) {},
};
