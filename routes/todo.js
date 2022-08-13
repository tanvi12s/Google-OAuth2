const router = require('express').Router();
const Todo_model = require('../models/todo');

router.get('/add/todo', (req,res) => {
    const {todo} = req.body;
    const newTodo = new Todo_model({todo:task, email:req.user.email, done:"0"})
if(todo==""){
    res.redirect('/');
}
newTodo.save()
.then(() => {
    console.log("Done");
    res.redirect('/');
})
.catch(err => console.log(err))
})

.get("/delete/todo/:_id", (req,res) => {
    const {_id} = req.params;
    Todo_model.deleteOne({_id})
    .then(() => {
        console.log("Deleted");
        res.redirect('/');
    })
    .catch((err) => console.log(err));
})

.get("/update/todo/:_id", (req,res) => {
    const {_id} = req.params;
    const info = Todo_model.find();
    console.log(info);
    Todo.model.updateOne({_id}, {done:"1"})
    .then(() => {
        console.log("Updated");
        res.redirect('/');
    })
    .catch((err) => console.log(err));
})

module.exports = router;