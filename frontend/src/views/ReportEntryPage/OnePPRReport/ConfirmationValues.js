import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, TextField } from '@material-ui/core';
import Context from '../../../globalStore/context';

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
        paddingTop: theme.spacing(1)
    }
}));

function ConfirmationValues() {
    const classes = useStyles();
    const { report, actions } = useContext(Context);

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
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAAT
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATBI
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAVA
                    </Typography>
                </Grid>
            </Grid>

            {/* values */}
            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A1']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A1']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A1']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A1']}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A2']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A2']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A2']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A2']}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A3']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A3']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A3']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A3']}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A4']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A4']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A4']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A4']}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A5']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A5']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A5']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A5']}
                    </Typography>
                </Grid>
            </Grid>

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
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAAT
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATBI
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAVA
                    </Typography>
                </Grid>
            </Grid>

            {/* values */}
            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I1']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I1']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I1']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I1']}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I2']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I2']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I2']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I2']}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I3']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I3']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I3']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I3']}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I4']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I4']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I4']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I4']}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I5']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I5']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I5']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I5']}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I6']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I6']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I6']}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I6']}
                    </Typography>
                </Grid>
            </Grid>
            
            
        </div>
    );
}

export default ConfirmationValues;
