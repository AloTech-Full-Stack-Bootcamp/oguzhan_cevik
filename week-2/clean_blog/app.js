const express=require('express'); 
require('dotenv').config();
const ejs=require('ejs');
const mongoose=require('mongoose');
const Post=require('./models/Posts');
const methodOverride=require('method-override');
const app=express();
//you can use router for connect mutual routes.
const postRoutes=require("./routes/postRoutes")
require('dotenv').config({path: __dirname + '/.env'})

//Connect Database 
mongoose.connect("mongodb://localhost/homework",{
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then(()=>{console.log(`Connected.`)})
.catch((err)=>{console.error("error:",err)});

//Template Engine
app.set("view engine","ejs");
//Middlewares
app.use(express.static('public'))//static contents
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//used to ovveride post and get methods
app.use(
   methodOverride('_method',{
      methods:['POST','GET']
    })
);

app.get('/', async(req,res)=>{

    const posts=await Post.find({}).sort("-dateCreated")
    console.log(posts)
    res.render("index",{
        posts,
    });
});

//used router here.
app.use("/posts",postRoutes)

app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/add", (req, res) => {
    res.render("add_post");
});

//port settingss
const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`server started on port ${port}..`)
});