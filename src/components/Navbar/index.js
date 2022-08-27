import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
    return (
        <Nav activeKey="/">
            <Nav.Item>
                <Nav.Link href="/">Button</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/card">Card</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/header">Header</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/movie">Movie</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
