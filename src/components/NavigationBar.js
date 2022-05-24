import React from "react";
import { IndexLinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import { SearchIcon, PlusCircleIcon, ZapIcon } from "@primer/octicons-react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

function NavigationBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=M4QRJF5GDHCKA"
            alt=""
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="success" size="lg">
              Contribute
            </Button>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// @ts-ignore
export default NavigationBar;
