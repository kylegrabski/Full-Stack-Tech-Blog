//if comment post_id === :num params then GET comments SORT BY CREATED AT 

const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", async ( req, res) => {
    try {
        req.body.post_id = req.session.userId
        const postData = await Comment.create(req.body);
        res.status(200).json(postData);
    } catch (err){
        res.status(400).json(err)
    }
})

module.exports = router;