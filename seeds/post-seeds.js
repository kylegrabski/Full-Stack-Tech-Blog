const { Post } = require('../models');


// creating sample posts
const postData = [
    {
        title: "Kyle's First Post Title",
        content: "Hello! My name is Kyle, and this is my first post content!",
        user_id: 1,
    },
    {
        title: "Olivers First Post Title",
        content: "Hello! My name is Oliver, and this is my first post content!",
        user_id: 2,
    },
    {
        title: "Gordon's First Post Title",
        content: "Hello! My name is Gordon, and this is my first post content!",
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;