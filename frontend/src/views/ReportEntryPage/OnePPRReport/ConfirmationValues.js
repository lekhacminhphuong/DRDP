import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, TextField } from '@material-ui/core';
import Context from '../../../globalStore/context';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    subheader: {
        paddingBottom: theme.spacing(1)
    },
    input: {
        width: 100,
        paddingBottom: theme.spacing(1.5)
    },
    part1A: {
        paddingTop: theme.spacing(3)
    },
    part2A: {
        paddingTop: theme.spacing(6)
    },
    partB: {
        paddingTop: theme.spacing(1)
    }
}));

const CustomTypography = withStyles(theme => ({
    h6: {
        fontSize: '15px',
        color: '#427996'
    }
  }))(Typography);

function ConfirmationValues() {
    const classes = useStyles();
    const { report, actions } = useContext(Context);

    const logField = (e) => {
        console.log(e.target.name)
    }

    return (
        <div>
            <Grid
                className={classes.part1A}
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
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A1']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A1']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A1']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A1']}
                    </CustomTypography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A2']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A2']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A2']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A2']}
                    </CustomTypography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A3']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A3']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A3']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A3']}
                    </CustomTypography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A4']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A4']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A4']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A4']}
                    </CustomTypography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-A5']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-A5']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-A5']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-A5']}
                    </CustomTypography>
                </Grid>
            </Grid>

            <Grid
                className={classes.part2A}
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
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I1']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I1']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I1']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I1']}
                    </CustomTypography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I2']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I2']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I2']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I2']}
                    </CustomTypography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I3']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I3']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I3']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I3']}
                    </CustomTypography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I4']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I4']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I4']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I4']}
                    </CustomTypography>
                </Grid>
            </Grid>

            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I5']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I5']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I5']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I5']}
                    </CustomTypography>
                </Grid>
            </Grid>
            <Grid
                className={classes.partB}
                container
                spacing={10}
            >
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PADD-I6']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAAT-I6']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PATBI-I6']}
                    </CustomTypography>
                </Grid>
                <Grid item>
                    <CustomTypography
                        className={classes.subheader}
                        gutterBottom
                        variant="h6">
                        {report['PAVA-I6']}
                    </CustomTypography>
                </Grid>
            </Grid>
            
            
        </div>
    );
}

export default ConfirmationValues;
