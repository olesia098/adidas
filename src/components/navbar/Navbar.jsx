import React, { useEffect, useState } from "react";
import "./Navbar.css";
import MenuBurger from "./menu/MenuBurger";
//@ts-ignore
import logo from "./logo.png";
import { MenuBook } from "@mui/icons-material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContextProvider";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchProduct from "../../components/products/SearchProduct";
import { getUserRole } from "../../helpers/functions";

const pages = [{ title: "Products", link: "/", id: 1 }];

const adminPages = [{ title: "Add", link: "/add", id: 2 }];

const settings = [
  {
    title: "Register",
    link: "/register",
    id: 1,
  },
  {
    title: "Login",
    link: "/login",
    id: 2,
  },
  {
    title: "Logout",
    link: "/logout",
    id: 3,
  },
];

function Navbar() {
  const userRole = getUserRole();
  const navigate = useNavigate();
  const { currentUser, checkAuth, handleLogout, setCurrentUser } = useAuth();

  // function getPages() {
  //   if (isAdmin()) {
  //     return pages.concat(adminPages);
  //   } else {
  //     return pages;
  //   }
  // }

  useEffect(() => {
    const storedUser = localStorage.getItem("email");
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const [menuActive, setMenuActive] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <nav className="navver">
        <div
          className="burger-btn"
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <span />
        </div>
        <div className="nav_logo">
          <img className="nav_logo_img" src={logo} alt="logo" />
        </div>
        <div className="nav_auth flex justify-between">
          <Link className="text-white p-3">
            {currentUser ? currentUser : "No user"}
          </Link>
          <div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <AccountCircleOutlinedIcon color="secondary" fontSize="large" />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link to={"/register"} className="text-indigo-700">
                            Register
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to={"/login"} className="text-indigo-700">
                            Login
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            to={"/"}
                            onClick={() => handleLogout()}
                            className="text-indigo-700"
                          >
                            Logout
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      </nav>
      <MenuBurger
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        header={"Adidas"}
      />
    </div>
  );
}

export default Navbar;
