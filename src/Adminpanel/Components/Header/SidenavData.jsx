import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";

import DashboardIcon from "@material-ui/icons/Dashboard";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PostAddIcon from "@material-ui/icons/PostAdd";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
    { label: "Upload Music", link: "/upload", icon: <UploadFileIcon /> },
    { label: "ViewMusic", link: "/viewmusic", icon: <PostAddIcon /> },
    {
      label: "Analytics",
      link: "/analytics",
      icon: <AnalyticsIcon />,
    },
    { label: "Admin Details", link: "/admindetails", icon: <ExitToAppIcon /> },
  ];

  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size='small'
          onClick={() => handleDrawerClose()}
          className={classes.navButton}>
          <ListItem
            exact
            key={i}
            component={NavLink}
            to={item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
