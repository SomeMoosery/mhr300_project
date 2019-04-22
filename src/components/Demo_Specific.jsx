import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import demo_1 from '../assets/images/demo_1.png';
import demo_2 from '../assets/images/demo_2.png';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import '../assets/styles/demo_specific.css';

class Demo_Specific extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondary_view: false,
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom style={{ marginTop: '15px' }}>
                        Mall of America
                    </Typography>
                </div>
                <div>
                    {!this.state.secondary_view
                        ? <img className='image' src={demo_1} alt='demo_1' />
                        : <img className='image' src={demo_2} alt='demo_2' />
                    }
                </div>

                <div className='lowerButton'>
                    <Button onClick={() => {
                        this.setState(prevState => ({
                            secondary_view: !prevState.secondary_view
                        }))
                    }}>
                        {!this.state.secondary_view
                            ? <p> 3D View </p>
                            : <p> Flat View </p>
                        }
                    </Button>
                </div>

                <div className='lowerButton'>
                    <Link to='/demo'>
                        <Button>
                            Back
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Demo_Specific;
