import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Grid
} from '@material-ui/core';
import Page from 'src/components/Page';
import img1 from 'src/imgs/piechart.png';
import img2 from 'src/imgs/linechart.png';
import img3 from 'src/imgs/barchart2.png';
import { GalleryCard } from './GalleryCard';

const popularSearches = [
  'Total Served',
  'Ethnicity Ratios',
];

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  search: {
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit'
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100,
    flexDirection: 'row',

  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  }
}));

function GalleryPage() {
  const classes = useStyles();
  const descriptions = ["Total Served from 2011-2018 (by jurisdiction)", "Ethnicity Ratios for CAP (all years)", 'Total served, by ethnicity for all reported years'];
  const titles = ["Total Served", "Ethnicity Ratios", 'Ethnicity Over Time'];
  const imgs = [img2, img1, img3]
  const links =['/gallery/totalserved', '/gallery/ethnicity', '/gallery/ethnicity2']
  const [mode] = useState('grid');

  return (
    <Page className={classes.root} title="DRDP - Gallery">
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[0]} desc={descriptions[0]} img={imgs[0]} link={links[0]}/>
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[1]} desc={descriptions[1]} img={imgs[1]} link={links[1]}/>
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[2]} desc={descriptions[2]} img={imgs[2]} link={links[2]}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default GalleryPage;
