var express=require("express"),
app=express()

app.set("view engine","ejs");

app.get("/",(req,res)=>{
	res.render("index");
});
app.get("/about",(req,res)=>{
	res.render("about");
});
app.get("/contact",(req,res)=>{
	res.render("contact");
});





app.listen(process.env.PORT||3000,()=>{
	console.log("The server has started");
});