/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import currencieStore from '../../stores/currencyStore';
import Currency from './currency';

import useInterval from '../../hooks/useInterval';
import { UPDATED_TIME, SORTING_METHODS, ACTION_STATUSES } from '../../utils/constants';
import { formatDateTime } from '../../utils/dateFormatting';

import { FormattedMessage } from 'react-intl';

import { Container, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import SortIcon from '@material-ui/icons/Sort';
import IconButton from '@material-ui/core/IconButton';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Alert from '@material-ui/lab/Alert';

import { useStyles } from './styles';

const Currencies = observer(() => {
  const classes = useStyles();


  const [sort, setSort] = useState<string>(SORTING_METHODS.SORTING_BY_NAME.DESC);

  useInterval(() => {
    currencieStore.getCurrencie();
  }, UPDATED_TIME);

  useEffect(() => {
    currencieStore.getCurrencie();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box m={2}>
        <h3 className="header-currencies">
          <FormattedMessage id="bitcoin_currencie" />
        </h3>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <IconButton
                  size="small"
                  onClick={() =>
                    sort !== SORTING_METHODS.SORTING_BY_NAME.ASC
                      ? setSort(SORTING_METHODS.SORTING_BY_NAME.ASC)
                      : setSort(SORTING_METHODS.SORTING_BY_NAME.DESC)
                  }
                >
                  <SortByAlphaIcon fontSize="small" />
                </IconButton>
                <FormattedMessage id="currency" />
              </TableCell>
              <TableCell align="right">
                <IconButton
                  size="small"
                  onClick={() =>
                    sort !== SORTING_METHODS.SORTING_BY_RATE.DESC
                      ? setSort(SORTING_METHODS.SORTING_BY_RATE.DESC)
                      : setSort(SORTING_METHODS.SORTING_BY_RATE.ASC)
                  }
                >
                  <SortIcon fontSize="small" />
                </IconButton>
                <FormattedMessage id="rate" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencieStore.currentCurrencies && (
              <Currency currencies={currencieStore.currentCurrencies.bpi} sortMethod={sort} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={2}>
        <Typography variant="body1" gutterBottom>
          <FormattedMessage id="last_update" />
          {(currencieStore.currentCurrencies) &&
            formatDateTime(currencieStore.currentCurrencies.time.updated)}
          <FiberManualRecordIcon
            color="primary"
            style={{ fontSize: '1rem' }}
            className={
              currencieStore.status === ACTION_STATUSES.PENDING
                ? classes.loadingBadgeActive
                : classes.loadingBadgeInactive
            }
          />
        </Typography>
      </Box>
      {currencieStore.status === ACTION_STATUSES.REJECTED && (
        <Alert severity="error">
          <FormattedMessage id="page_not_loaded" />
        </Alert>
      )}
    </Container>
  );
});

export default Currencies;