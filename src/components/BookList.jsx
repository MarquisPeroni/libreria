import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import SingleBook from './SingleBook';

function Booklist(props) {
    return (
    <Container className='fluid'>
        <Row>
            {props.allBooks.map((book, index) => (
                <SingleBook libro={book} key={index}/>
            ))}
        </Row>
    </Container>
    )
}

export default Booklist;