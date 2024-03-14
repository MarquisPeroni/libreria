import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SingleBook from './SingleBook';
import  { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class BookList extends Component {
    state = {
        searchQuery: '',
    };

    render () {
        const filteredBooks = this.props.allBooks.filter(book =>
            book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        );
        return (
        <>
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={4} className="text-center pb-3">
            <Form.Group>
                <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                />
            </Form.Group>
            </Col>
        </Row>
            <Container className='fluid'>
                <Row>
                {filteredBooks.map((book, index) => (
                            <SingleBook libro={book} key={index} />
                        ))}
                </Row>
            </Container>
        </>
    )
}
}
export default BookList;