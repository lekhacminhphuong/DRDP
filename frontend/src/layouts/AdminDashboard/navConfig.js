/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import StorageIcon from '@material-ui/icons/Storage';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';

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
        icon: StorageIcon
      },
      {
        title: 'Gallery',
        href: '/gallery',
        icon: BarChartIcon
      },
      {
        title: 'Admin',
        href: '/admin',
        icon: BarChartIcon
      },
    ]
  }
];
