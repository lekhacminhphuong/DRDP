import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Page from 'src/components/Page';
import img from 'src/imgs/team.png'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(4),
  }
}));

function AboutUsPage() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="DRDP - About Us">
      <Container maxWidth="lg">
        <img src={img} height="400"/>
      </Container>
    </Page>
  );
}

export default AboutUsPage;
