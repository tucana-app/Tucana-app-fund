import React from "react";
import { IndexLinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="white" variant="light">
      <Navbar.Collapse id="navigation-bar">
        <Nav className="w-100 justify-content-evenly align-items-center">
          {/* <Button onClick={() => changeLanguage("en")} variant="white">
            <ReactCountryFlag countryCode="US" className="mb-1" svg />
          </Button>
          <Button onClick={() => changeLanguage("es")} variant="white">
            <ReactCountryFlag countryCode="CR" className="mb-1" svg />
          </Button>
          <Button onClick={() => changeLanguage("fr")} variant="white">
            <ReactCountryFlag countryCode="FR" className="mb-1" svg />
          </Button> */}
          <IndexLinkContainer to="/" className="cursor-pointer">
            <div>
              <h1 className="mb-0">Tucána</h1>
              <span className="p lead mb-0">Crowdfunding</span>
            </div>
          </IndexLinkContainer>
          <div>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=M4QRJF5GDHCKA"
              alt=""
              target="_blank"
              rel="noreferrer"
              className="me-2 hvr-grow"
            >
              <Button variant="success" size="lg">
                Contribute
              </Button>
            </a>
            <IndexLinkContainer
              to="/spendings"
              alt=""
              size="lg"
              className="hvr-grow"
            >
              <Button variant="warning">Our spendings</Button>
            </IndexLinkContainer>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// @ts-ignore
export default NavigationBar;
