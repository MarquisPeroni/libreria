import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class SingleBook extends Component {
    state = {
        selected: false
    };

    render () {

        return (
                <Col xs={12} md={6} lg={3} className='pb-3'>
                    <Card style={{ width: '18rem'}} 
                    onClick={() => {this.setState({ selected: !this.state.selected });
                    }}className={this.state.selected?"bg-warning":"bg-danger"}>
                    <Card.Img variant="top" src={this.props.libro.img} alt={this.props.libro.title} />
                    <Card.Body>
                        <Card.Title >{this.props.libro.title}</Card.Title>
                        <Card.Text>
                            <strong>Price:</strong> {this.props.libro.price} $
                        </Card.Text >
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
    )}
    
}

export default SingleBook;