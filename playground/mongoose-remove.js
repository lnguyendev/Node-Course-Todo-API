const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({
    _id: '5a4043a10c073ef3336d8532'
}).then((todo) => {
    console.log(todo);
});
// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5a4043a10c073ef3336d8531').then((todo) => {
    console.log(todo);
});
