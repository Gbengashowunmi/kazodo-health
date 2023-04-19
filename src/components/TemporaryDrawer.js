import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiMenuAltLeft } from "react-icons/bi";
import ControlledAccordions from "./ControlledAccordions";
import { Link } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation">
      <List>
        <span
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <h3>KAZODO HEALTH</h3>
          <IoMdCloseCircle />
        </span>

        <ControlledAccordions />
        {/* {["Drugs", "Equipments", "Disposables", "Health care", "My cart"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )} */}
      </List>
      {/* <Divider /> */}
      <List
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
        <div>
          <Link to="/signup">
            <p>
              <Button>Sign Up</Button>
            </p>
          </Link>

          <Link to="/login">
            <p>
              <Button>Login</Button>
            </p>
          </Link>
          <Link to="/cart">
            <p>
              <Button>My Cart</Button>
            </p>
          </Link>

          <p>
            <Button>COntact Us</Button>
          </p>
        </div>
        {/* {["Sign up", "login", "Contact us"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  return (
    <div>
      <BiMenuAltLeft
        onClick={toggleDrawer("left", !state.left)}
        className="nav_bar"
      />
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
