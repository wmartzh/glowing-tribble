const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get('/hey',(req, res)=>{
  res.send("Hey")
})

app.listen(3000, () => {
  console.log("Server running");
});
