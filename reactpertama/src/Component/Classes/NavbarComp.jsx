import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';

const NavbarComp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

        return (<div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">React.Js</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/about">About</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/mahasiswa">Mahasiswa</Link></NavLink>
                        </NavItem>
                        
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </div>

        )
}

export default NavbarComp