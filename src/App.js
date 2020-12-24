import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Routes from "./Routes";

import { BrowserRouter as Router, Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "220px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"홈"} />
              </ListItem>
            </Link>
            
            <Link to="/mykeyword" className={classes.link}>
              <ListItem button>
                <ListItemText primary={"키워드"} />
              </ListItem>
            </Link>

            <Link to="/mygroup" className={classes.link}>
              <ListItem button>
                <ListItemText primary={"그룹"} />
              </ListItem>
            </Link>
    
            <Link to="/myinfo" className={classes.link}>
              <ListItem button>
                <ListItemText primary={"내정보"} />
              </ListItem>
            </Link>

            <Link to="/signup" className={classes.link}>
              <ListItem button>
                <ListItemText primary={"회원가입"} />
              </ListItem>
            </Link>

            <Link to="/signin" className={classes.link}>
              <ListItem button>
                <ListItemText primary={"로그인"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
      <Routes />
    </Router>
  );
}

export default App;
