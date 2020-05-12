import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';
import Page from 'src/components/Page';
import { Grid } from '@material-ui/core';
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
        paddingLeft: theme.spacing(15),
    }
}));


function EntrySuccess() {

    const classes = useStyles();
    const [mode] = useState('grid');

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
                Report Submitted Successfully
             </Typography>
            </div>
          </Container>
        </Page>
      )
}

export default EntrySuccess;