const router = require("express").Router();
const { Post, Comment, User } = require("../models");

//Hard Coded user for testing
// const users = [
//     {
//         id: 1,
//         name: "Kyle",
//         email: "kyle.grabski@gmail.com",
//         password: "password123"
//     }
// ]

//Testing to get hardcoded user
// router.get('/', async (req, res) => {
//     res.render('all-posts', {users});
//   });

router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
        include: [
          {
            model: User,
            // attributes: [
            //     'name',
            // ]
          },
        ],
    });

    const posts = dbPostData.map((content) => content.get({ plain: true }));

    res.render("all-posts", {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// render selected post
router.get("/single-post/:num", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.num);

    const post = dbPostData.get({ plain: true });
    

    res.render("single-post", {
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  
});

module.exports = router;
