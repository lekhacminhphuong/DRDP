import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import img1 from 'src/imgs/barchart.png';
import img2 from 'src/imgs/linechart.png';
import { GalleryCard } from './GalleryCard';


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

function GalleryPage() {
  const classes = useStyles();
  const descriptions = ["Total Served from 2011-2018 (by jurisdiction)", "Ethnicity Ratios for CAP (all years)"];
  const titles =["Total Served", "Ethnicity Ratios"];
  const imgs = [img2, img1]

  return (
    <Page className={classes.root} title="DRDP - Gallery">
      <Container maxWidth="lg">
           <div id='gallerySpace'>
              <GalleryCard title={titles[0]} desc={descriptions[0]} img={imgs[0]} />
              <GalleryCard title={titles[1]} desc={descriptions[1]} img={imgs[1]}  />
            </div>
      </Container>
    </Page>
  );
}

export default GalleryPage;
