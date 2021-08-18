import React from 'react'
import { Navbar ,Nav,Container} from "react-bootstrap";

const myNavBar = () => {
    return (
        <div>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Checkpoint React</Navbar.Brand>
    
    </Container>
  </Navbar>
        </div>
    )
}

export default myNavBar
