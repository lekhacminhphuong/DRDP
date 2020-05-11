import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';
import Page from 'src/components/Page';
import { Grid } from '@material-ui/core';
import { GalleryCard } from '../GalleryPage/GalleryCard';
import useGlobal from '../../globalStore/useGlobal';
import Context from '../../globalStore/context';
import { db } from '../../config/Fire';
import firebase from '../../config/Fire';
import img from 'src/imgs/empty.svg'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
  filter: {
    marginTop: theme.spacing(3),
  },
  results: {
    marginTop: theme.spacing(6),
  },
  empty: {
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(40)
  },
  noFav: {
    paddingLeft: theme.spacing(25),
  }
}));

function FavoritesPage() {
  const { favorites } = useContext(Context);
  const classes = useStyles();
  const [mode] = useState('grid');

  if (favorites == null || favorites.length == 0) {
    return (
      <Page className={classes.root} title="DRDP - Favorites">
        <Container maxWidth="lg">
          <div className={classes.empty}>
            <img src={img} height="400" />
            <Typography
              className={classes.noFav}
              gutterBottom
              variant="subtitle1"
            >
              Empty
           </Typography>
          </div>
        </Container>
      </Page>
    )

  } else {
    console.log(favorites.length)
    return (
      <Page className={classes.root} title="DRDP - Favorites">
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            {favorites.map((el) => {
              return (<Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
                <GalleryCard title={el.title} desc={el.desc} img={el.img} />
              </Grid>)
            })}
          </Grid>
        </Container>
      </Page>
    );
  }


}

export default FavoritesPage;
