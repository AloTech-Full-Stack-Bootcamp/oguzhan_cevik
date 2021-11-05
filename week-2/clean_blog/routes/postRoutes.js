


var express=require("express");
var router=express.Router();
const Post=require('../models/Posts');

//same as here, I connect same routes with router and export it.


router.get('/:id',async(req,res)=>{
    const post=await Post.findById(req.params.id);
    res.render("post",{
        post
    })});
router.post('/',(req,res)=>{
     console.log(req.body)
     Post.create(req.body);
     res.redirect("/");
 });
router.put('/:id', async(req,res)=>{
     const post=await Post.findOne({_id:req.params.id});
     post.title=req.body.title;
     post.detail=req.body.detail;
     post.save();
     res.redirect(`/posts/${req.params.id}`);
 });
router.delete('/:id', async(req,res)=>{
     await Post.findByIdAndRemove(req.params.id);
     res.redirect("/");
 });
router.get('/edit/:id', async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('edit_post', {
    post,
  });
});

module.exports=router;



