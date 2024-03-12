import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import items from '../data/fantasy.json'

function AllTheBooks() {
    return (
    <Container className='fluid'>
        <Row>
            {items.map((book, index) => (
                <Col xs={12} md={6} lg={3} key={index}>
                    <Card style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Card.Img variant="top" src={book.img} alt={book.title} />
                    <Card.Body>
                        <Card.Title >{book.title}</Card.Title>
                        <Card.Text>
                            <strong>Price:</strong> {book.price} $
                        </Card.Text >
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
    )
}

export default AllTheBooks;