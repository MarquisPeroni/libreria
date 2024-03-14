import React, { Component } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

class CommentArea extends Component {
    state = {
        comments:[],
        error: null
    };

    componentDidMount() {
        this.fetchComments();
    }
    fetchComments() {
        fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWMwZjRjNTllYzAwMTk5MGQ2ZjkiLCJpYXQiOjE3MTA0MjU5NDgsImV4cCI6MTcxMTYzNTU0OH0.QXhGHJQM2MeLha7KHELr7JTwdpc-a1IU5B4-EQrPs8w"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore durante il recupero delle recensioni');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ comments: data });
            })
            .catch(error => {
                this.setState({ error: error.message });
            });
    }

    handleAddComment = (newComment) => {
        this.setState(prevState => ({
            comments: [...prevState.comments, { comment: newComment }]
        }));
    }

    render() {
        const { comments, error } = this.state;
        if (error) {
            return <div>Errore: {error}</div>;
        }

        return (
            <div>
                <CommentsList comments={comments} />
                <AddComment onAddComment={this.handleAddComment}/>
            </div>
        );
    }
}

export default CommentArea;