import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


export interface Props {
  currencies: Array<Currencie>;
  sortMethod?: string;
}

const Currency: React.FC<Props> = ({ currencies }) => {
  const filteredCurrencies = currencies;

  return (
    <>
      {filteredCurrencies.map(currencie => (
        <TableRow key={currencie.code}>
          <TableCell component="th" scope="row">
            {currencie.code}
          </TableCell>
          <TableCell align="right">
            <span dangerouslySetInnerHTML={{ __html: `${currencie.symbol}` }} />
            {' ' + currencie.rate}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default Currency;