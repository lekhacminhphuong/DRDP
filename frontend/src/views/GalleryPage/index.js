import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Hidden,
  Input,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  ClickAwayListener,
  Select
} from '@material-ui/core';
import Page from 'src/components/Page';
import img1 from 'src/imgs/barchart.png';
import img2 from 'src/imgs/linechart.png';
import { GalleryCard } from './GalleryCard';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';

const popularSearches = [
  'Total Served',
  'Ethnicity Ratios',
];

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  search: {
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit'
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100,
    flexDirection: 'row',

  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  }
}));

function GalleryPage() {
  const classes = useStyles();
  const descriptions = ["Total Served from 2011-2018 (by jurisdiction)", "Ethnicity Ratios for CAP (all years)", "No description"];
  const titles = ["Total Served", "Ethnicity Ratios", "No Name"];
  const imgs = [img2, img1]
  const searchRef = useRef(null);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [mode] = useState('grid');


  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  return (
    <Page className={classes.root} title="DRDP - Gallery">
      <Container maxWidth="lg">

        <Grid 
          container         
          justify="space-between"
        > 
          <Grid item>
            <Hidden smDown>
              <div
                className={classes.search}
                ref={searchRef}
              >
                <SearchIcon className={classes.searchIcon} />
                <Input
                  className={classes.searchInput}
                  disableUnderline
                  onChange={handleSearchChange}
                  placeholder="Search visualization"
                  value={searchValue}
                />
              </div>
              <Popper
                anchorEl={searchRef.current}
                className={classes.searchPopper}
                open={openSearchPopover}
                placement="bottom-start"
                transition
              >
                <ClickAwayListener onClickAway={handleSearchPopverClose}>
                  <Paper
                    className={classes.searchPopperContent}
                    elevation={3}
                  >
                    <List>
                      {popularSearches.map((search) => (
                        <ListItem
                          button
                          key={search}
                          onClick={handleSearchPopverClose}
                        >
                          <ListItemIcon>
                            <SearchIcon />
                          </ListItemIcon>
                          <ListItemText primary={search} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </ClickAwayListener>
              </Popper>
            </Hidden>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select
                native
              >
                <option value={'Most Recent'}>Most Recent</option>
                <option value={'Most Views'}>Most Views</option>
                <option value={'A-Z'}>A-Z</option>
                <option value={'Z-A'}>Z-A</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[0]} desc={descriptions[0]} img={imgs[0]} />
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[1]} desc={descriptions[1]} img={imgs[1]} />
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[2]} desc={descriptions[2]} />
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[2]} desc={descriptions[2]} />
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[2]} desc={descriptions[2]} />
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[2]} desc={descriptions[2]} />
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[2]} desc={descriptions[2]} />
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[2]} desc={descriptions[2]} />
          </Grid>
          <Grid item md={mode === 'grid' ? 4 : 12} sm={mode === 'grid' ? 6 : 12} xs={12}>
            <GalleryCard title={titles[2]} desc={descriptions[2]} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default GalleryPage;
