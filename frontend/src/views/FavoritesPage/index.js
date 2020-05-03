import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import { Grid } from '@material-ui/core';
import { GalleryCard } from '../GalleryPage/GalleryCard';

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
}));

function FavoritesPage() {
  const classes = useStyles();
  const [mode] = useState('grid');

  return (
    <Page className={classes.root} title="DRDP - Favorites">
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={"No Name"} desc={"No Description"} />
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={"No Name"} desc={"No Description"} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default FavoritesPage;
