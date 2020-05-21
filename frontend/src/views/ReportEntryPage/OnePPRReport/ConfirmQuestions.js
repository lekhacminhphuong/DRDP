import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    subheader: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(4)
    },
    content: {
        paddingBottom: theme.spacing(6)
    }
}));

function Questions() {
    const classes = useStyles();

    return (
        <div>
            <Typography
                className={classes.subheader}
                gutterBottom
                variant="h4">
                A. Individuals Served
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                1. Individuals served as of October 1 (Carried over from previous FY)
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                2. Additional individuals served during the year
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                3. Total individuals served during the year (Add lines A1 and A2)
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                4. Individuals with more than one (1) intervention opened/closed FY
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                5. Individuals served as of September 30 (Carry over to next FY; ≤ A3)
            </Typography>



            <Typography
                className={classes.subheader}
                gutterBottom
                variant="h4">
                B. Ethnicity
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                1. Hispanic/Latino
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                2. American Indian/Alaskan Native
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                3. Asian
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                4. Black/African American
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                5. Native Hawaiian/Other Pacific Islander
            </Typography>
            <Typography
                className={classes.content}
                gutterBottom
                variant="subtitle1">
                6. White
            </Typography>
        </div>
    );
}

export default Questions;
