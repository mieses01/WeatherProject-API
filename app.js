var express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){
  const url = "https://www.boredapi.com/api/activity";
  https.get(url,function(response){
    console.log(response.statusCode+" "+response.statusMessage);
    response.on("data",function(data){
      const waether = JSON.parse(data)
      const act = waether.activity+"- "+waether.type
      res.write("<h1>Actividad de hoy "+act+"</h1>");
      res.write("<h1>Precio "+waether.price+"</h1>");
      res.send();
    })
  })
})

app.listen(3000,function(){
  console.log("Running in port 3000");
})
