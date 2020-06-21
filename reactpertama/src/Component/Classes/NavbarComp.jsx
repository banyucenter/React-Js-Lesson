import React, { useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
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
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mahasiswa">Mahasiswa</NavLink>
                        </NavItem>
                        {/* Menambahkan 2 menu */}
                        <NavItem>
                            <NavLink href="/class">Class Comp</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/hook">Hooks</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

        )
}

export default NavbarComp