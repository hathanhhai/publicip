const express = require("express");
const app = express();
const axios = require("axios");
app.set('view engine', 'ejs');
//-----------=
const AUTH_TOKEN = "2qsVznjhF54E4P7QAHnz8H71tFQk4XoBXO9BnJLv";
const ZONE_ID = "49d92e256ae53d3ac2d6650e4ecf3a7b";
const DOMAIN = "congcucuatoi.com";

const PORT = 1001;
//----------
const Axios = axios.create({
  timeout: 1000,
  headers: { Authorization: "Bearer " + AUTH_TOKEN },
});

app.get("/", async (req, res) => {
  try {
    var publicIP = await Axios.get(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records?name=${DOMAIN}&type=A`);
    console.log('publicIP: ', publicIP);
    var IP = publicIP.data.result[0].content;
    res.render('ip',{ip:IP})
    // res.send(IP);
  } catch (err) {
    return res.send({message:err});
  }
});

app.listen(PORT, () => {
  console.log(`App Show Public IP on Port: ${PORT}`);
});
