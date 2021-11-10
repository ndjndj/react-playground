import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

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
            <Button variant="contained" color="primary">
                Test
            </Button>
        </React.Fragment>

    )
  }
