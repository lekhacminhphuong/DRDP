import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    subheader: {
        paddingBottom: theme.spacing(1)
    },
    input: {
        width: 100,
        paddingBottom: theme.spacing(1.5)
    },
    partA: {
        paddingTop: theme.spacing(3)
    },
    partB: {
        paddingTop: theme.spacing(6)
    }
}));

function TextFields() {
    const classes = useStyles();

    return (
        <div>
            <Grid
                className={classes.partA}
                container
                spacing={4}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PADD
                    </Typography>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATT
                    </Typography>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATBI
                    </Typography>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAVA
                    </Typography>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={4}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PADD
                    </Typography>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATT
                    </Typography>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATBI
                    </Typography>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAVA
                    </Typography>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" />
                </Grid>
            </Grid>
        </div>
    );
}

export default TextFields;
