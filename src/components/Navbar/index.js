import React from "react";
import { FaBars } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import {
  NavMenuItem,
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLogout,
} from "./NavbarElements";
import Cookies from "js-cookie";
import axios from "axios";

const Navbar = ({
  toggle,
  auth,
  handleAuth,
  displayState,
  displayStateHandler,
}) => {
  const handleLogout = (e) => {
    displayStateHandler("0");
    e.preventDefault();
    //console.log("clicked");
    //Cookies.remove("PHPSESSID");
    const url = "/react-backend/logout.php";
    axios
      .get(url)
      .then((res) => {
        handleAuth(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Home</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {/* <NavItem>
              <NavMenuItem to='/BusinessMain'>Business</NavMenuItem>
            </NavItem> */}
            {/* <NavItem>
              {displayState === "1" && (
                <NavMenuItem to='/'>Reviews</NavMenuItem>
              )}
              {displayState === "2" && (
                <NavMenuItem to='/BusinessMain'>Business</NavMenuItem>
              )}
            </NavItem> */}
            {/* <NavItem>
              {auth ? (
                <NavMenuItem to='/SelectBusiness'>
                  Select/Add Business
                </NavMenuItem>
              ) : (
                ""
              )}
            </NavItem> */}
            <NavItem>
              {displayState === "1" && (
                <NavMenuItem to='/PatronMain'>Visited Businesses</NavMenuItem>
              )}
              {displayState === "2" && (
                <NavMenuItem to='/SelectBusiness'>
                  Select/Add Business
                </NavMenuItem>
              )}
            </NavItem>
            {/* <NavItem>
              {displayState === "1" && (
                <NavMenuItem to='/'>Search Businesses</NavMenuItem>
              )}
              {displayState === "2" && (
                <NavMenuItem to='/Business'>Check-In</NavMenuItem>
              )}
            </NavItem> */}

            <NavItem>
              {auth ? (
                ""
              ) : (
                <NavMenuItem to='/ChooseRegister'>Sign Up</NavMenuItem>
              )}
            </NavItem>
          </NavMenu>
          <NavBtn>
            {auth ? (
              <NavLogout onClick={handleLogout}>Log Out</NavLogout>
            ) : (
              <NavBtnLink to='/Login'>Sign In</NavBtnLink>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
