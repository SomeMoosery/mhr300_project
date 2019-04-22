import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
            <AppBar position='static' color='default' style={appBarStyle}>
            <Toolbar>
                <Typography variant="h6" color="primary" noWrap style={toolbarTitleStyle}>
                    Indoor Positioning App Service
                </Typography>
                <Button color='primary' variant='outlined' style={headerButtonStyle}>Company</Button>
                <Link to='/data'><Button color='primary' variant='outlined' style={headerButtonStyle}>Data</Button></Link>
                <Link to='/pricing'><Button color='primary' variant='outlined' style={headerButtonStyle}>Pricing</Button></Link>
                <Link to='/demo'><Button color='primary' variant='outlined' style={headerButtonStyle}>Demo</Button></Link>
            </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
