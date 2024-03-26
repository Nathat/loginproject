const express = require('express');//express  หน้า เป็น function
console.log(express);
const app = express();//app เป็น object -- console.log เป็น fn
console.log(app);
const authRoute = require("./routes/auth");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(authRoute);
const port = process.env.port || 3000;
app.listen(port, function() {
   console.log("Listening on port", port);
});
