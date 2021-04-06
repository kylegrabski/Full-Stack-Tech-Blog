const router = require("express").Router();
const { Post } = require("../../models");

// get all posts
router.get("/", async (req, res) => {
  // find all posts
  try {
    const allData = await Post.findAll({});
    res.json(allData);
  } catch (err) {
    res.status(500).json(err, "WRONG AT END POINT");
  }
});

// route to create a post
router.post("/", async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;