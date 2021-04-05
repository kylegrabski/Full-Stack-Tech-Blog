const router = require('express').Router();


const users = [
    {
        id: 1,
        name: "Kyle",
        email: "kyle.grabski@gmail.com",
        password: "password123"
    }
]

router.get('/', async (req, res) => {
    res.render('all-posts', {users});
  });


router.get('/single-post/:num', async (req, res) => {
    res.render('single-post', users[req.params.num -1]);
  });
  
  
  module.exports = router;