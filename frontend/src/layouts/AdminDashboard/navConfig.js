/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Apps from '@material-ui/icons/Apps';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import GroupIcon from '@material-ui/icons/Group';

export default [
  {
    items: [
      {
        title: 'Overview',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: 'Gallery',
        href: '/gallery',
        icon: Apps
      },
      {
        title: 'Favorites',
        href: '/favorites',
        icon: FavoriteBorderIcon
      },
      {
        title: 'Report Entry',
        href: '/reportentry',
        icon: AddCircleOutlineIcon
      },
      {
        title: 'About Us',
        href: '/aboutus',
        icon: GroupIcon
      },
      {
        title: 'Admin',
        href: '/admin',
        icon: SupervisorAccountIcon
      },
    ]
  }
];
