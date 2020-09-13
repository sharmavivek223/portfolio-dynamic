import React, { useState, useContext } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { NavHashLink } from "react-router-hash-link";
import UserDataContext from "../UserDataContext";

const MyNav = (props) => {
  const data = useContext(UserDataContext);
  const [isCollapse, setCollapse] = useState(false);
  const [isWideEnough] = useState(false);
  const onClick = () => {
    setCollapse(!isCollapse);
  };

  return (
    <header>
      <MDBNavbar
        id="nav-bar"
        color="unique-color"
        fixed="top"
        dark
        expand="md"
        scrolling
        transparent
      >
        <MDBNavbarBrand href="/">
          <img
            src={process.env.PUBLIC_URL + data.logo}
            width="50"
            height="50"
            alt=""
          />
          <strong>Navbar</strong>
        </MDBNavbarBrand>
        {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
        <MDBCollapse isOpen={isCollapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
              <NavHashLink className="nav-link" to="#about" smooth>
                About Me
              </NavHashLink>
              {/* <div data-test="waves" class="Ripple is-reppling" style="top: -15px; left: 3.3625px; width: 78px; height: 78px;"></div> */}
            </MDBNavItem>
            <MDBNavItem>
              <NavHashLink className="nav-link" to="#skills" smooth>
                My Skills
              </NavHashLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavHashLink className="nav-link" to="#projects" smooth>
                My Projects
              </NavHashLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Contact Me</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {data.contact.map((item,i) => (
                    <MDBDropdownItem key={i} href={item.url}>
                      <img src={item.icon} width="30" height="30" alt=""/>{' '}
                      {item.name}
                    </MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
  );
};

export default MyNav;
