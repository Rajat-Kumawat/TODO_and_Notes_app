require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const { todo, user, connectDB } = require('./db');
app.use(express.json());
app.use(cors());

connectDB();

// For creating a new todos
app.post("/create", async function(req, res){
    try{
        const title = req.body.Title;
        const description = req.body.Description;

        const savedTodo = await todo.create({
            Title: title,
            Description: description
        });
        res.status(200).json(savedTodo);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

//For updating the status of a todo
app.put("/update/:id", async function(req, res){
    try{
        const id = req.params.id;
        const updateData = req.body;

        const updatedTodo = await todo.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );
        if(!updatedTodo){
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
})

// For deleting a todo
app.delete("/delete/:id", async function(req, res){
    try{
        const id = req.params.id;
        const deleteTodo = await todo.findByIdAndDelete(id);
        if(!deleteTodo){
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// For fetching all the todos
app.get("/", async(req, res) => {
    try{
        const todos = await todo.find({});
        res.status(200).json(todos);
    }catch(error){
        res.status(500).json({message: "Server Error", error: error.message});
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});