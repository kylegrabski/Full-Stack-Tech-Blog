const { Comment } = require('../models');

const commentData = [
    {
        content: "Kyle's First comment is right Here! Hopefully under Olivers Post",
        post_id: 2,
    },
    {
        content: "Oliver's First comment is right Here! Hopefully under Kyles Post",
        post_id: 1,
    },
    {
        content: "Gordon's First comment is right Here! Hopefully under Gordons Post",
        post_id: 3,
    },
 
];

const seedComments = () => Post.bulkCreate(commentData);

module.exports = seedComments;