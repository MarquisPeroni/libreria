import React from 'react';

const CommentsList = ({ comments }) => {
    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default CommentsList;