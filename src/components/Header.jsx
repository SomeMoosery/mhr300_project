import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const appBarStyle = {
    position: 'relative',
}

const toolbarTitleStyle = {
    flex: 1,
}

const headerButtonStyle = {
    marginRight: 10
}

class Header extends Component {
    render() { 
        return (
            <AppBar position="static" color="default" style={appBarStyle}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap style={toolbarTitleStyle}>
                Indoor Positioning App Service
                </Typography>
                <Button color="primary" variant="outlined" style={headerButtonStyle}>Company</Button>
                <Button color="primary" variant="outlined" style={headerButtonStyle}>Features</Button>
                <Button color="primary" variant="outlined" style={headerButtonStyle}>Pricing</Button>
            </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
