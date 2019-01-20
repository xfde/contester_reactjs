import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import 'moment-timezone';
const styles={
 
};

function MediaCard(props) {
  const { classes, data } = props;
  return (
    <Card className={classes.card}>
    <Typography variant="h5"> 
            {<div style={{background:data.col, width:"100%", paddingLeft:"2px"}}>
            {data.name}
            <div style={{width:"90%", color:'#DCDCDC'}}>
            <Typography variant="subheading">
            {data.organizator}
            </Typography>
            </div>
            </div>}
     </Typography>  
            
       
        <CardContent> <Typography variant="subtitle1" align="right" >{<Moment format="DD MMMM, YYYY HH:mm">
                {data.data}</Moment>}</Typography>
          <Typography component="p" align='justify' variant="subheading">
            {data.descriere.toString()}
          </Typography>
        </CardContent>


      <CardActions>
      
        <Button size="small">{<a target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'#3f51b5'}} href={data.link}>More Details</a>}</Button>
          <Button size="small" color="primary" onClick={props.clickFunction} >
          Edit
        </Button>
        <Button size="small" color="secondary" onClick = {props.deleteFunction}>
          Delete
        </Button>

      </CardActions>

    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);