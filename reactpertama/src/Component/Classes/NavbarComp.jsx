import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';

import { CartContext } from '../../CartContext';
import { NavLink } from 'react-router-dom';

//tambahkan nilai context global


const NavbarComp = () => {
    //ambil nilai dari context
    const {value,setValue} = useContext(CartContext)


    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (<div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">React.Js</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/mahasiswa" className="nav-link">Mahasiswa</NavLink>
                    </NavItem>
                    {/* Menambahkan 2 menu */}
                    <NavItem>
                        <NavLink to="/class" className="nav-link">Class Comp</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/hook" className="nav-link">Hooks</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/hookeffects" className="nav-link">Hooks Effects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/produk" className="nav-link">Produk</NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                    <button type="button" class="btn btn-danger">
                        <i className="fa fa-shopping-cart"></i>
                        <span class="badge badge-light">{value}</span>
                    </button>
                </NavbarText>
            </Collapse>
        </Navbar>
    </div>

    )
}

export default NavbarComp