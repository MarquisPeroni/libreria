import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import items from '../data/fantasy.json'

function AllTheBooks() {
    items.map((book, i) => {
    return (
    <Container>
        <Row>
            <Col xs={12} md={8} lg={6}>
                <Card key={book.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text >
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
});
}

export default AllTheBooks;