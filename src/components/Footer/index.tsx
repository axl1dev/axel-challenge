import React from 'react'
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css'

type Theme = {
    themeDefault: boolean,
    callback: (arg1: boolean) => void
}

const Footer = ({ themeDefault, callback }: Theme) => {
  
  return (
    <>
        <Navbar bg={themeDefault? 'dark' : 'light'} variant={themeDefault? 'dark' : 'light'}>
          <Container>
            <Row className='header-nav'>
              <Col md={3} xs={12} className='logo-footer'>
                <Navbar.Brand href="#home">
                  <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                      <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>{' '}
                </Navbar.Brand>
                © 2022 GitHub, Inc.
              </Col>
              <Col md={9} xs={9} className='d-none d-lg-block'>
                <Navbar bg={themeDefault? 'dark' : 'light'} variant={themeDefault? 'dark' : 'light'}>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link>Terms</Nav.Link>
                      <Nav.Link>Privacy</Nav.Link>
                      <Nav.Link>Security</Nav.Link>
                      <Nav.Link>Status</Nav.Link>
                      <Nav.Link>Docs</Nav.Link>
                      <Nav.Link>Contact GitHub</Nav.Link>
                      <Nav.Link>Pricing</Nav.Link>
                      <Nav.Link>API</Nav.Link>
                      <Nav.Link>Training</Nav.Link>
                      <Nav.Link>Blog</Nav.Link>
                      <Nav.Link>About</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
            
          </Container>
        </Navbar>
    </>
  )
}

export default Footer