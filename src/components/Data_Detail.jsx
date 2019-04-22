import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import SimpleLineChart from './SimpleLineChart';

import clustering from '../assets/images/clustering.png';
import models from '../assets/images/models.png';
import models_2 from '../assets/images/models_2.png';
import { Button } from '@material-ui/core';

import '../assets/styles/demo_specific.css';

class Data_Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_images: false
        }
    }

    render() {
        return (
            <div style={{ marginTop: '3em', marginRight: '1em', marginLeft: '-1em' }}>
                <div>
                    <SimpleLineChart />
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Customer foot traffic to Apple and Patagonia stores
                    </Typography>
                </div>
                <div>
                    <img src={clustering} alt='clustering' style={{ width: '100%', height: '100%' }} />
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Plot of customers determined by 120 different attributes
                    </Typography>
                </div>
                <div>
                    {!this.state.new_images
                        ? <img src={models} alt='models' style={{ width: '300px', height: '300px', marginLeft: '3em' }} />
                        : <img src={models_2} alt='models_2' style={{ width: '300px', height: '300px', marginLeft: '3em' }} />
                    }
                    <div style={{height:'80px'}}>
                        {!this.state.new_images
                            ? <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Plots of both SVM and Clustering classification algorithms.
                            </Typography>
                            : <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Ensemble algorithms
                            </Typography>
                        }
                    </div>
                    <div className='lowerButton'>
                        <Button onClick={() => {
                            this.setState(prevState => ({
                                new_images: !prevState.new_images
                            }))
                        }}>
                            Generate More Plots
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data_Detail;
