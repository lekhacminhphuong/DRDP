/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import HomeIcon from '@material-ui/icons/HomeOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import Apps from '@material-ui/icons/Apps';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default [
  {
    items: [
      {
        title: 'Overview',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: 'Data',
        href: '/data',
        icon: BarChartIcon
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
    ]
  }
];
