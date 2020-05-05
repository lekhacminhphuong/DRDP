import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Grid } from '@material-ui/core';
import useGlobal from '../../globalStore/useGlobal';
import Context from '../../globalStore/context';
import { db } from '../../config/Fire';
import firebase from '../../config/Fire';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  media: {
    height: 140
  }
}));

let favorite;

export function GalleryCard(props) {
  const { state, actions } = useContext(Context);
  const classes = useStyles();
  const [favStatus, setFavStatus] = useState(false);

  const handleFavorite = (event) => {
    //set favorites in global state
    console.log(state);
    //actions({ type: 'setState', payload: 'something' });
    //set favorites in firebase
    setFavStatus(!favStatus)
  }

  if (!favStatus) {
    favorite = <FavoriteBorderIcon onClick={handleFavorite} style={{ cursor: "pointer" }} />
  } else {
    favorite = <FavoriteIcon onClick={handleFavorite} style={{ color: "#bd574e", cursor: "pointer" }} />
  }

  return (
    <Card className={classes.root}>
      <CardActionArea to={props.link} component={RouterLink} >
        <CardMedia
          className={classes.media}>
          <img src={props.img} height="150" width="345" alt="card"></img>
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.desc}
            </Typography>
          </Grid>
          <Grid item>
            {favorite}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
