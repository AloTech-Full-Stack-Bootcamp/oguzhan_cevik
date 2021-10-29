var express=require("express"),
app=express()

//if you are not familiar with ejs(embedded-javascript-templates) :
// EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

app.set("view engine","ejs"); // installed ejs package to do not write .ejs it will automaticly recognize the view engine as ejs
//redirecting de index page and rendering index ejs file
app.get("/",(req,res)=>{
	res.render("index");
});
//redirecting de about page and rendering about ejs file
app.get("/about",(req,res)=>{
	res.render("about");
});
//redirecting de contact page and rendering contact ejs file
app.get("/contact",(req,res)=>{
	res.render("contact");
});





app.listen(process.env.PORT||3000,()=>{
	console.log("The server has started");
});
