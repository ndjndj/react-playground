import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import TableSample from './table-sample';

export default function Sample() {

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        Sample
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={false}>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                        <MenuIcon />
                        </ListItemIcon>
                        <ListItemText primary="トップページ" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                        <MenuIcon />
                        </ListItemIcon>
                        <ListItemText primary="商品ページ" />
                    </ListItem>
                </List>
            </Drawer>

            <TableSample></TableSample>

        </React.Fragment>

    )
  }
