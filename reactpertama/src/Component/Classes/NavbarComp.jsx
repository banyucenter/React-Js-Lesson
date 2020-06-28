import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';


import { CartContext } from '../../CartContext';

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
                    <NavItem>
                        <NavLink href="/hookeffects">Hooks Effects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/produk">Produk</NavLink>
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