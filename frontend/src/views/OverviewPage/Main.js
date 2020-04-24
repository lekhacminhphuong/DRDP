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
        textAlign: 'right',
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
                            CURRENT REPORT
                        </Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.content}>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                Centralized, consistent data organization, stored in a secure database.
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                Referential integrity provided by a relational structure supports dynamic queries, ease of comparison, and ease of analysis.
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                Our solution centralizes the data and makes it easier to access and investigate.
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
                    flexDirection="row-reverse"
                    spacing={3}
                >.
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
                            VISUALIZATION GALLERY
                        </Typography>
                        <Divider className={classes.divider} />
                        <div className={classes.content}>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                Harnessing the power of data and visual storytelling to bring insight to the questions that NDRN wants to answer.
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                Easy to access and understand visualizations to provide context and insight into NDRN’s raw data.
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="subtitle1"
                            >
                                We are working to provide a library of visualizations ready to go for use by NDRN, so that less time is spent searching the data for answers, and more time is spent understanding the data and making valuable decisions.
                            </Typography>
                        </div>
                    </Grid>

                </Grid>
            </Card>
        </div>
    );
}

export default OverviewPage;
