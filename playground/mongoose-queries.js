const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a3f56c48e5a4971e9d8b22911';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) return console.log('Id not found');
//     console.log('Todo by id', todo);
// }).catch((e) => {
//     console.log(e);
// });

var id = '5a3f3cd26152947fe4187529';

User.findById(id).then((user) => {
    if(!user) return console.log('User not found');
    console.log('User: \n', user);
}).catch((e) => {
    console.log(e);
});
