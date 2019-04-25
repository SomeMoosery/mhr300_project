import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import crosshairs from '../assets/images/crosshairs.png';
import beta from '../assets/images/beta.png';

class Home extends Component {

    render() {
        return (
            <div style={{width:'100%', height:'680px', position:'relative'}}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ height: '1.5em', marginTop: '1em' }}>
                    IPS App
                </Typography>
                <div style={{ margin: 'auto', width: '50%', marginBottom: '2em' }}>
                    <img src={crosshairs} alt='crosshairs' style={{ width: '100%', height: '100%' }} />
                </div>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Carter Klein
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Dylan O'Donnell
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Mitch Andrews
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Sawyer Wedig
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Nathan Schilling
                </Typography>
                <img src={beta} alt='crosshairs' style={{ width: '100px', height: '100x', bottom:0, right:0, position:'absolute' }} />
            </div>
        )
    }
}

export default Home;
