import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupportOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  list: {
    marginTop: theme.spacing(6)
  }
}));

const faqs = [
  {
    title: 'Where is the data from?',
    description:
      'The data in its current state is modeled off of data which would be found in the One PPR report, which our pilot organization, NDRN, uses to track their impact. For security reasons, the dataset used for this this project is currently mock data, however the format is the same as what NDRN uses and could easily be filled in with their actual use data.'
  },
  {
    title:
      'What is Report Entry used for?',
    description:
      'Report Entry is a straightforward tool for adding subsequent One PPR yearly reports to the dataset. This allows the visualized data and tables to reflect the most up to date data available. In future iterations we hope to add a quick CSV upload feature, to make the process even easier.'
  }
];

function FAQ({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Container maxWidth="lg">
        <Typography
          align="left"
          variant="h2"
        >
          FAQ
        </Typography>
        <List
          disablePadding
          className={classes.list}
        >
          {faqs.map((faq) => (
            <ListItem
              disableGutters
              key={uuid()}
            >
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              <ListItemText
                primary={faq.title}
                primaryTypographyProps={{ variant: 'h5' }}
                secondary={faq.description}
                secondaryTypographyProps={{ variant: 'body1' }}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}

FAQ.propTypes = {
  className: PropTypes.string
};

export default FAQ;
