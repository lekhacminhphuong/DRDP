import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Typography,
    Grid,
    Card,
    Divider
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: theme.spacing(3)
    },
    item1: {
        margin: theme.spacing(3),
        textAlign: 'left',
    },
    item2: {
        margin: theme.spacing(3),
        textAlign: 'left',
    },
    content: {
        marginTop: theme.spacing(4)
    },
    divider: {
        height: "4px",
        backgroundColor: "#FFD171"
    }
}));

function OverviewPage(className) {
    const classes = useStyles();

    return (
        <div>
            <Card>
                <Grid
                    alignItems="center"
                    container
                    justify="space-between"
                    flexDirection="row"
                    spacing={3}
                >
                    <Grid
                        className={classes.item1}
                        item
                        md={6}
                        xs={12}
                    >
                        <Typography
                            component="h1"
                            gutterBottom
                            variant="h3"
                        >
                            CHALLENGE
                        </Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.content}>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                People want to answer questions with data, but they don’t have the skills to process or harness the data themselves.
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Card>
            <Card className={classes.card}>
                <Grid
                    alignItems="center"
                    container
                    justify="space-between"
                    flexDirection="row"
                    spacing={3}
                >
                    <Grid
                        className={classes.item2}
                        item
                        md={6}
                        xs={12}
                    >
                        <Typography
                            component="h1"
                            gutterBottom
                            variant="h3"
                        >
                            APPROACH
                        </Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.content}>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                Pilot the format with data and users from the National Disability Rights Network (NDRN)
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Card>
            <Card className={classes.card}>
                <Grid
                    alignItems="center"
                    container
                    justify="space-between"
                    flexDirection="row"
                    spacing={3}
                >
                    <Grid
                        className={classes.item2}
                        item
                        md={6}
                        xs={12}
                    >
                        <Typography
                            component="h1"
                            gutterBottom
                            variant="h3"
                        >
                            SOLUTION
                        </Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.content}>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                An easy to use format with a tailored interface for answering specific questions, without data skills. Any question we’ve built into the website can be answered in less than three mouse clicks. 
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default OverviewPage;
