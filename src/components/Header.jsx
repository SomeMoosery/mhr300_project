import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import '../assets/styles/header_style.css';

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
                    <Button color='primary' variant='outlined' style={headerButtonStyle}><Link to='/home' className='headerButton'>Company</Link></Button>
                    <Button color='primary' variant='outlined' style={headerButtonStyle}><Link to='/data' className='headerButton'>Data</Link></Button>
                    <Button color='primary' variant='outlined' style={headerButtonStyle}><Link to='/pricing' className='headerButton'>Pricing</Link></Button>
                    <Button color='primary' variant='outlined' style={headerButtonStyle}><Link to='/demo' className='headerButton'>Demo</Link></Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
