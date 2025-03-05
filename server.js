const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

// Middleware
app.use(express.json()); // Middleware for parsing JSON data

// Serve static files (Make sure the folder is named 'public' and not 'Public')
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/commentsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Define comment schema and model
const commentSchema = new mongoose.Schema({
    username: String,
    text: String,
    date: { type: Date, default: Date.now },
    replies: [{
        username: String,
        text: String,
        date: { type: Date, default: Date.now },
    }],
});

const Comment = mongoose.model('Comment', commentSchema);

// API Endpoint to submit a new comment
app.post('/api/comments', async (req, res) => {
    const { username, text } = req.body;
    if (!username || !text) {
        return res.status(400).json({ message: 'Username and text are required' });
    }

    try {
        const newComment = new Comment({ username, text });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ message: 'Error saving comment', error: err });
    }
});

// API Endpoint to get all comments
app.get('/api/comments', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching comments', error: err });
    }
});

// API Endpoint to reply to a comment
app.post('/api/comments/:commentId/reply', async (req, res) => {
    const { commentId } = req.params;
    const { username, text } = req.body;

    if (!username || !text) {
        return res.status(400).json({ message: 'Username and text are required' });
    }

    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        comment.replies.push({ username, text });
        await comment.save();
        res.json({ message: 'Reply added successfully', comment });
    } catch (err) {
        res.status(500).json({ message: 'Error adding reply', error: err });
    }
});

// API Endpoint to delete a comment
app.delete('/api/comments/:commentId', async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.commentId);
        res.json({ message: 'Comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting comment', error: err });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
