import React, { useState, useContext, useEffect } from 'react';
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
  const { state, favorites, actions } = useContext(Context);
  const classes = useStyles();
  const [favStatus, setFavStatus] = useState(false);

  //check if card is in favorites
  useEffect(() => {
    if (favorites != null) {
      for (let i = 0; i < favorites.length; i++) {
        if (props.desc == favorites[i].desc) {
          setFavStatus(true)
        }
      }
    }
  },[favStatus])

  const handleFavorite = (event) => {
    // IF FAV IS NOT IN GLOBAL FAVS: put favorite in global favorites
    if (favorites == null) {
      actions({ type: 'setFavorites', payload: [props] });
      db.collection('favorites')
          .doc(props.title)
          .set({
            desc: props.desc,
            title: props.title,
            img: props.img
          })
    } else {
      //create a new array arr
      let arr = []
      //deconstruct previous favorites array and push into new arr
      arr.push(...favorites)
      // MAKE A CHECK IF PROPS is already in the favorites, if not add it into arr
      let arrContains = false;
      //iterate thru arr
      for (let i = 0; i < arr.length; i++) {
        //if props is in arr...
        if (arr[i].desc == props.desc) {
          arrContains = true;
          //remove it from arr
          arr = arr.filter((el) => { return el.desc != props.desc })
          break;
        }
      }
      if (arrContains == false) {
        arr.push(props)
        actions({ type: 'setFavorites', payload: arr });
        //add to firebase
        db.collection('favorites')
          .doc(props.title)
          .set({
            desc: props.desc,
            title: props.title,
            img: props.img
          })
      }
      if (arrContains == true) {
        actions({ type: 'setFavorites', payload: arr });
        //remove from firebase
        var query = db.collection('favorites').where('desc', '==', props.desc);
        query.get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            doc.ref.delete();
          });
        });
      }
    }
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
