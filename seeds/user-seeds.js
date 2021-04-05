const { User } = require('../models');


// Creating sample users
const userData = [
    {
        user_name: 'Kyle Grabski',
        email: 'kyle.grabski@gmail.com',
        password: 'test1234'
    },
    {
        user_name: 'Oliver Cat',
        email: 'oliver.cat@aol.com',
        password: 'kitten1234'
    },
    {
        user_name: 'Gordon Ramsey',
        email: 'elGordo@netscape.com',
        password: 'tortuga1234'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;