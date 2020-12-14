import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarMenuItem,
} from "./SidebarElements";
import axios from "axios";

const Sidebar = ({ isOpen, toggle, auth, handleAuth }) => {
  const handleLogout = (e) => {
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
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            {" "}
            About
          </SidebarLink>
          <SidebarMenuItem to='/BusinessMain' onClick={toggle}>
            {" "}
            Business{" "}
          </SidebarMenuItem>
          <SidebarMenuItem to='/Business' onClick={toggle}>
            {" "}
            Check-In{" "}
          </SidebarMenuItem>
          {auth ? (
            ""
          ) : (
            <SidebarMenuItem to='/Register' onClick={toggle}>
              {" "}
              Sign Up{" "}
            </SidebarMenuItem>
          )}
        </SidebarMenu>
        <SideBtnWrap>
          {auth ? (
            <SidebarRoute onClick={handleLogout}>Log Out</SidebarRoute>
          ) : (
            <SidebarRoute to='/Login'>Sign In</SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
