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
  console.log(req.session.user_id)
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: [
              'user_name',
          ]
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

    const dbCommentData = await Comment.findAll({
      where: {
        post_id: req.params.num,
      },
    });

    const comments = dbCommentData.map((content) =>
      content.get({ plain: true })
    );

    res.render("single-post", {
      post,
      comments,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/new-post", async (req, res) => {
  try {
    res.render("new-post", {});
  } catch (err) {
    console.log(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login", {});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
