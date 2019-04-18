import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images for facility headers
import uw_hospital from '../assets/images/uw_hospital.png';
import summerfest from '../assets/images/summerfest.JPG';
import mall_of_america from '../assets/images/mall_of_america.jpg';
import milwaukee_airport from '../assets/images/milwauke_airport.jpg';
import ohare from '../assets/images/ohare.jpg';
import fao from '../assets/images/fao.jpg';
import yankees from '../assets/images/yankees.JPG';
import abbot_hospital from '../assets/images/abbot_hospital.jpg';
import metlife_stadium from '../assets/images/metlife_stadium.jpg';
import googleplex from '../assets/images/googleplex.jpg';
import lolla from '../assets/images/lolla.jpeg';
import target from '../assets/images/target.jpg';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [
    {id: 1, image: uw_hospital, heading: 'UW Health Hospital'}, 
    {id: 2, image: summerfest, heading: 'Summerfest 2019'}, 
    {id: 3, image: mall_of_america, heading: 'Mall of America'}, 
    {id: 4, image: milwaukee_airport, heading: 'Mitchell Airport'}, 
    {id: 5, image: ohare, heading:"O'Hare Airport"},
    {id: 6, image: fao, heading: 'FAO Schwarz'},
    {id: 7, image: yankees, heading: 'Yankee Stadium'},
    {id: 8, image: abbot_hospital, heading: 'Abbot Hospital'}, 
    {id: 9, image: metlife_stadium, heading: 'Metlife Stadium'}, 
    {id: 10, image: googleplex, heading: 'The Googleplex'}, 
    {id: 11, image: target, heading: 'Target Madison'}, 
    {id: 12, image: lolla, heading: 'Lollapalooza'}];

function Demo(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to IPS App
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Below is a list of facilities we have partnered with to create the most immersive,
              least expensive indoor navigational system on the market in one easy-to-use platform.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Sign up now
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card.id} sm={6} md={4} lg={3}>
                <Card className={classes.card.id}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent:'center'}}>
                    <Button size="small" color="primary">
                        View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Built by Carter Klein - University of Wisconsin 2019
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Demo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Demo);