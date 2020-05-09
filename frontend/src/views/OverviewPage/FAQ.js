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
    title: 'What is data from?',
    description:
      'Data is from ...'
  },
  {
    title:
      'What is Report Entry used for?',
    description:
      'Report Entry is ...'
  },
  {
    title: 'Can I change password?',
    description:
      'Yes, you can change password in the Profile page.'
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
