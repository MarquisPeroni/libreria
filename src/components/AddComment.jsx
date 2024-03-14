import React, { useState } from 'react';

const AddComment = ({ onAddComment }) => {
    const [newComment, setNewComment] = useState('');

    const handleInputChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newComment.trim() !== '') {
            onAddComment(newComment);
            setNewComment('');
        }
    };

    return (
        <div>
            <h2>Add Comment</h2>
            <form onSubmit={handleSubmit}>
                <textarea value={newComment} onChange={handleInputChange} />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}

export default AddComment;