import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import setting from "./el_cog.svg";
import { Link } from "react-router-dom";
import useAuth from "../Firebase/Hooks/useAuth";

export default function TemporaryDrawer() {
  const { user, logout } = useAuth();
  const [state, setState] = React.useState({
    right: false,
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="drawer-right">
        <div className="profile drawer">
          <i class="fas fa-user"></i>
          <Link to="/profile">Profile</Link>
        </div>
        <div className="update-profile drawer">
          <i class="fas fa-user-edit"></i>
          <Link to="/updateprofile">Edit profile</Link>
        </div>
        <div className="booking drawer">
          <i class="fas fa-clipboard-check"></i>
          <Link to="/step1">Make booking</Link>
        </div>
        <div className="booking drawer">
          <i class="fas fa-ban"></i>
          <Link to="/makebooking">Cancel booking</Link>
        </div>
        {/* condition checking */}
        {user?.email ? (
          <div className="dashboard drawer">
            <i class="fas fa-sign-in-alt"></i>
            <Link to="/makebooking">Logout</Link>
          </div>
        ) : (
          <div className="dashboard drawer">
            <i class="fas fa-sign-in-alt"></i>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment>
          <div onClick={toggleDrawer(anchor, true)}>
            <img src={setting} alt="" />
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
