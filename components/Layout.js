import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { Navbar, Nav } from 'react-bootstrap'

export default ({ children }) => (


      <div>
      <Head>
        <title>Movies App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  
      </Head>
      <header>
  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home"><a>Home</a></Nav.Link>
            <Nav.Link href="#contact"><a>Contact</a></Nav.Link>
            <Nav.Link href="#about us"><a>About us</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>
      {children}
      <footer>
        <hr />
        <span>Footer</span>
        <hr />
      </footer>
  
      <style jsx>{`
      
        header {
          background-color: red
        }
      

      `}</style>
    </div>
)
