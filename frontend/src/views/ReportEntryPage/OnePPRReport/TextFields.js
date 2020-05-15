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

function TextFields(props) {
    const classes = useStyles();

    const logField = (e) => {
        console.log(e.target.name)
    }

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
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-A1' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAAT
                    </Typography>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-A1' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATBI
                    </Typography>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-A1' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAVA
                    </Typography>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-A1' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-A2' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-A2' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-A2' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-A2' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-A3' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-A3' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-A3' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-A3' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-A4' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-A4' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-A4' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-A4' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-A5' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-A5' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-A5' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-A5' onChange={props.handleReport} required/>
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
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-I1' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATT
                    </Typography>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-I1' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATBI
                    </Typography>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-I1' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAVA
                    </Typography>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-I1' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-I2' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-I2' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-I2' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-I2' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-I3' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-I3' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-I3' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-I3' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-I4' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-I4' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-I4' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-I4' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-I5' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-I5' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-I5' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-I5' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PADD-I6' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAAT-I6' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PATBI-I6' onChange={props.handleReport} required/>
                </Grid>
                <Grid item>
                    <TextField type="number" className={classes.input} id="outlined-basic" variant="outlined" name='PAVA-I6' onChange={props.handleReport} required/>
                </Grid>
            </Grid>
        </div>
    );
}

export default TextFields;
