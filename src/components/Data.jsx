import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import moa from '../assets/images/data_demo.jpg';
import ball from '../assets/images/ball.png';

class Data extends Component {

    render() {
        return (
            <div style={{marginTop:'2em'}}>
                <div style={{position:'relative', top:0, left:0}}>
                    <img src={moa} alt='data_demo' style={{ width: '100%', position:'relative', top:0, left:0 }} />
                    <Link to='/data_detail'>
                        <img src={ball} alt='ball' style={{ width: '15px', height: '15px', top: 175, left: 75, position:'absolute' }} />
                    </Link>
                </div>
                <div>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        You have 1 pending insight
                    </Typography>
                </div>
            </div>
        )
    }
}

export default Data;
