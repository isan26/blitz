import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function APPNavBar({ setConfig }: { setConfig: (config: string) => void }) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#" onClick={() => setConfig('html')}>HTML</Nav.Link>
                        <Nav.Link href="#" onClick={() => setConfig('register')}>Form</Nav.Link>
                        <Nav.Link href="#" onClick={() => setConfig('jokes')}>Jokes</Nav.Link>
                        <Nav.Link href="#" onClick={() => setConfig('url')}>Load from URL</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default APPNavBar;
