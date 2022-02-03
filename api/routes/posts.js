const router = require("express").Router();
const Post = require("../models/Post");

// CREATE 
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

//GET POST BY ID
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404).json("Post not found.");
            // stop further execution in this callback
            return;
          }

        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL POSTS
router.get("/", async (req, res) => {
    const userName = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (userName){
            posts = await Post.find({username : userName});
        } else if (catName){
            posts = await Post.find({categeries : {
                $in:[catName]
            }});
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },{new:true});
                res.status(200).json(updatedPost);
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json("You can update only your own posts!");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json("Post has been deleted.");
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json("You can delete only your own posts!");
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;