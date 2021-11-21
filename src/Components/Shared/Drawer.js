import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import setting from "./el_cog.svg";

export default function TemporaryDrawer() {
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
      <div className="icon">Anas</div>
      <div className="icon">Anas</div>
      <div className="icon">Anas</div>
      <div className="icon">Anas</div>
      <div className="icon">Anas</div>
      <div className="icon">Anas</div>
      <div className="icon">Anas</div>
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
