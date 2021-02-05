import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  table: {
    table: {
      minWidth: 650,
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  loadingBadgeActive: {
    opacity: 1,
  },
  loadingBadgeInactive: {
    transition: 'opacity 1s ease-out',
    opacity: 0,
  },
});