// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");

module.exports=function(app){
    // HTML GET Requests. Below code handles when users "visit" a page.

    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/index.html"));
    });
    app.get("/payment",function(req,res){
        res.sendFile(path.join(__dirname,"../public/payment.html"));
       
    });
   
};