import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav,NavDropdown,Navbar}from "react-bootstrap";

export let Homepage=()=>
{
    return(
        <>
             <div id="bc1">
            <Navbar expand="lg" variant="light" >
                    <Navbar.Brand href="/" className="">JaiSuriya SuperMarket</Navbar.Brand>
                    <Navbar.Toggle aria-controls="manoj" />
                    <Navbar.Collapse id="manoj">
                        <Nav className="ms-5">   
                        <NavDropdown title="ProductDetails" id="basic-nav-dropdown">
                        <NavDropdown.Item href="createproduct">Create</NavDropdown.Item>
                        <NavDropdown.Item href="">ListAll(update & Read & Delete)</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav className="ms-5">
                        <button className="btn btn-outline-dark me-5 ">
                                Logout
                        </button>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </div>
        </>
    );
}