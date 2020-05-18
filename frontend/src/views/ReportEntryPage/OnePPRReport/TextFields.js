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
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PADD-A1'
                        onChange={props.handleReport}
                        error={props.fields['PADD-A1'] === '' || props.fields['PADD-A1'][0] === ''}
                        helperText={props.fields['PADD-A1'] === '' || props.fields['PADD-A1'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAAT
                    </Typography>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAAT-A1'
                        onChange={props.handleReport}
                        error={props.fields['PAAT-A1'] === '' || props.fields['PAAT-A1'][0] === ''}
                        helperText={props.fields['PAAT-A1'] === '' || props.fields['PAAT-A1'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATBI
                    </Typography>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PATBI-A1'
                        onChange={props.handleReport}
                        error={props.fields['PATBI-A1'] === '' || props.fields['PATBI-A1'][0] === ''}
                        helperText={props.fields['PATBI-A1'] === '' || props.fields['PAAT-A1'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAVA
                    </Typography>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAVA-A1'
                        onChange={props.handleReport}
                        error={props.fields['PAVA-A1'] === '' || props.fields['PAVA-A1'][0] === ''}
                        helperText={props.fields['PAVA-A1'] === '' || props.fields['PAVA-A1'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic" variant="outlined"
                        name='PADD-A2'
                        onChange={props.handleReport}
                        error={props.fields['PADD-A2'] === '' || props.fields['PADD-A2'][0] === ''}
                        helperText={props.fields['PADD-A2'] === '' || props.fields['PADD-A2'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAAT-A2'
                        onChange={props.handleReport}
                        error={props.fields['PAAT-A2'] === '' || props.fields['PAAT-A2'][0] === ''}
                        helperText={props.fields['PAAT-A2'] === '' || props.fields['PAAT-A2'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PATBI-A2'
                        onChange={props.handleReport}
                        error={props.fields['PATBI-A2'] === '' || props.fields['PATBI-A2'][0] === ''}
                        helperText={props.fields['PATBI-A2'] === '' || props.fields['PATBI-A2'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAVA-A2'
                        onChange={props.handleReport}
                        error={props.fields['PAVA-A2'] === '' || props.fields['PAVA-A2'][0] === ''}
                        helperText={props.fields['PAVA-A2'] === '' || props.fields['PAVA-A2'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PADD-A3'
                        onChange={props.handleReport}
                        error={props.fields['PADD-A3'] === '' || props.fields['PADD-A3'][0] === ''}
                        helperText={props.fields['PADD-A3'] === '' || props.fields['PADD-A3'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAAT-A3'
                        onChange={props.handleReport}
                        error={props.fields['PAAT-A3'] === '' || props.fields['PAAT-A3'][0] === ''}
                        helperText={props.fields['PAAT-A3'] === '' || props.fields['PAAT-A3'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PATBI-A3'
                        onChange={props.handleReport}
                        error={props.fields['PATBI-A3'] === '' || props.fields['PATBI-A3'][0] === ''}
                        helperText={props.fields['PATBI-A3'] === '' || props.fields['PATBI-A3'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAVA-A3'
                        onChange={props.handleReport}
                        error={props.fields['PAVA-A3'] === '' || props.fields['PAVA-A3'][0] === ''}
                        helperText={props.fields['PAVA-A3'] === '' || props.fields['PAVA-A3'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PADD-A4'
                        onChange={props.handleReport}
                        error={props.fields['PADD-A4'] === '' || props.fields['PADD-A4'][0] === ''}
                        helperText={props.fields['PADD-A4'] === '' || props.fields['PADD-A4'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAAT-A4'
                        onChange={props.handleReport}
                        error={props.fields['PAAT-A4'] === '' || props.fields['PAAT-A4'][0] === ''}
                        helperText={props.fields['PAAT-A4'] === '' || props.fields['PAAT-A4'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PATBI-A4'
                        onChange={props.handleReport}
                        error={props.fields['PATBI-A4'] === '' || props.fields['PATBI-A4'][0] === ''}
                        helperText={props.fields['PATBI-A4'] === '' || props.fields['PATBI-A4'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAVA-A4'
                        onChange={props.handleReport}
                        error={props.fields['PAVA-A4'] === '' || props.fields['PAVA-A4'][0] === ''}
                        helperText={props.fields['PAVA-A4'] === '' || props.fields['PAVA-A4'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PADD-A5'
                        onChange={props.handleReport}
                        error={props.fields['PADD-A5'] === '' || props.fields['PADD-A5'][0] === ''}
                        helperText={props.fields['PADD-A5'] === '' || props.fields['PADD-A5'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAAT-A5'
                        onChange={props.handleReport}
                        error={props.fields['PAAT-A5'] === '' || props.fields['PAAT-A5'][0] === ''}
                        helperText={props.fields['PAAT-A5'] === '' || props.fields['PAAT-A5'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PATBI-A5'
                        onChange={props.handleReport}
                        error={props.fields['PATBI-A5'] === '' || props.fields['PATBI-A5'][0] === ''}
                        helperText={props.fields['PATBI-A5'] === '' || props.fields['PATBI-A5'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAVA-A5'
                        onChange={props.handleReport}
                        error={props.fields['PAVA-A5'] === '' || props.fields['PAVA-A5'][0] === ''}
                        helperText={props.fields['PAVA-A5'] === '' || props.fields['PAVA-A5'][0] === '' ? 'Required' : ' '}
                        required />
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
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PADD-I1'
                        onChange={props.handleReport}
                        error={props.fields['PADD-I1'] === '' || props.fields['PADD-I1'][0] === ''}
                        helperText={props.fields['PADD-I1'] === '' || props.fields['PADD-I1'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATT
                    </Typography>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAAT-I1'
                        onChange={props.handleReport}
                        error={props.fields['PAAT-I1'] === '' || props.fields['PAAT-I1'][0] === ''}
                        helperText={props.fields['PAAT-I1'] === '' || props.fields['PAAT-I1'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PATBI
                    </Typography>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PATBI-I1'
                        onChange={props.handleReport}
                        error={props.fields['PATBI-I1'] === '' || props.fields['PATBI-I1'][0] === ''}
                        helperText={props.fields['PATBI-I1'] === '' || props.fields['PATBI-I1'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <Typography
                        className={classes.subheader}
                        gutterBottom
                        variant="h4">
                        PAVA
                    </Typography>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAVA-I1'
                        onChange={props.handleReport}
                        error={props.fields['PAVA-I1'] === '' || props.fields['PAVA-I1'][0] === ''}
                        helperText={props.fields['PAVA-I1'] === '' || props.fields['PAVA-I1'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PADD-I2'
                        onChange={props.handleReport}
                        error={props.fields['PADD-I2'] === '' || props.fields['PADD-I2'][0] === ''}
                        helperText={props.fields['PADD-I2'] === '' || props.fields['PADD-I2'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAAT-I2'
                        onChange={props.handleReport}
                        error={props.fields['PAAT-I2'] === '' || props.fields['PAAT-I2'][0] === ''}
                        helperText={props.fields['PAAT-I2'] === '' || props.fields['PAAT-I2'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PATBI-I2'
                        onChange={props.handleReport}
                        error={props.fields['PATBI-I2'] === '' || props.fields['PATBI-I2'][0] === ''}
                        helperText={props.fields['PATBI-I2'] === '' || props.fields['PATBI-I2'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField
                        type="number"
                        className={classes.input}
                        id="outlined-basic"
                        variant="outlined"
                        name='PAVA-I2'
                        onChange={props.handleReport}
                        error={props.fields['PAVA-I2'] === '' || props.fields['PAVA-I2'][0] === ''}
                        helperText={props.fields['PAVA-I2'] === '' || props.fields['PAVA-I2'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PADD-I3' 
                        onChange={props.handleReport} 
                        error={props.fields['PADD-I3'] === '' || props.fields['PADD-I3'][0] === ''}
                        helperText={props.fields['PADD-I3'] === '' || props.fields['PADD-I3'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PAAT-I3' 
                        onChange={props.handleReport} 
                        error={props.fields['PAAT-I3'] === '' || props.fields['PAAT-I3'][0] === ''}
                        helperText={props.fields['PAAT-I3'] === '' || props.fields['PAAT-I3'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PATBI-I3' 
                        onChange={props.handleReport} 
                        error={props.fields['PATBI-I3'] === '' || props.fields['PATBI-I3'][0] === ''}
                        helperText={props.fields['PATBI-I3'] === '' || props.fields['PATBI-I3'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PAVA-I3' 
                        onChange={props.handleReport} 
                        error={props.fields['PAVA-I3'] === '' || props.fields['PAVA-I3'][0] === ''}
                        helperText={props.fields['PAVA-I3'] === '' || props.fields['PAVA-I3'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PADD-I4' 
                        onChange={props.handleReport} 
                        error={props.fields['PADD-I4'] === '' || props.fields['PADD-I4'][0] === ''}
                        helperText={props.fields['PADD-I4'] === '' || props.fields['PADD-I4'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PAAT-I4' 
                        onChange={props.handleReport} 
                        error={props.fields['PAAT-I4'] === '' || props.fields['PAAT-I4'][0] === ''}
                        helperText={props.fields['PAAT-I4'] === '' || props.fields['PAAT-I4'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PATBI-I4' 
                        onChange={props.handleReport} 
                        error={props.fields['PATBI-I4'] === '' || props.fields['PATBI-I4'][0] === ''}
                        helperText={props.fields['PATBI-I4'] === '' || props.fields['PATBI-I4'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PAVA-I4' 
                        onChange={props.handleReport} 
                        error={props.fields['PAVA-I4'] === '' || props.fields['PAVA-I4'][0] === ''}
                        helperText={props.fields['PAVA-I4'] === '' || props.fields['PAVA-I4'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PADD-I5' 
                        onChange={props.handleReport} 
                        error={props.fields['PADD-I5'] === '' || props.fields['PADD-I5'][0] === ''}
                        helperText={props.fields['PADD-I5'] === '' || props.fields['PADD-I5'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PAAT-I5' 
                        onChange={props.handleReport} 
                        error={props.fields['PAAT-I5'] === '' || props.fields['PAAT-I5'][0] === ''}
                        helperText={props.fields['PAAT-I5'] === '' || props.fields['PAAT-I5'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PATBI-I5' 
                        onChange={props.handleReport} 
                        error={props.fields['PATBI-I5'] === '' || props.fields['PATBI-I5'][0] === ''}
                        helperText={props.fields['PATBI-I5'] === '' || props.fields['PATBI-I5'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PAVA-I5' 
                        onChange={props.handleReport} 
                        error={props.fields['PAVA-I5'] === '' || props.fields['PAVA-I5'][0] === ''}
                        helperText={props.fields['PAVA-I5'] === '' || props.fields['PAVA-I5'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
            >
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PADD-I6' 
                        onChange={props.handleReport} 
                        error={props.fields['PADD-I6'] === '' || props.fields['PADD-I6'][0] === ''}
                        helperText={props.fields['PADD-I6'] === '' || props.fields['PADD-I6'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PAAT-I6' 
                        onChange={props.handleReport} 
                        error={props.fields['PAAT-I6'] === '' || props.fields['PAAT-I6'][0] === ''}
                        helperText={props.fields['PAAT-I6'] === '' || props.fields['PAAT-I6'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PATBI-I6' 
                        onChange={props.handleReport} 
                        error={props.fields['PATBI-I6'] === '' || props.fields['PATBI-I6'][0] === ''}
                        helperText={props.fields['PATBI-I6'] === '' || props.fields['PATBI-I6'][0] === '' ? 'Required' : ' '}
                        required />
                </Grid>
                <Grid item>
                    <TextField 
                        type="number" 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined" 
                        name='PAVA-I6' 
                        onChange={props.handleReport}
                        error={props.fields['PAVA-I6'] === '' || props.fields['PAVA-I6'][0] === ''}
                        helperText={props.fields['PAVA-I6'] === '' || props.fields['PAVA-I6'][0] === '' ? 'Required' : ' '} 
                        required />
                </Grid>
            </Grid>
        </div>
    );
}

export default TextFields;
