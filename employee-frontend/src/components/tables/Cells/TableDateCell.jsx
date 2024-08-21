import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';

const TableDateCell = ({ value }) => {
  const convertedDate = useMemo(() => {
    try {
      return format(parseISO(value), 'dd-MM-yyyy');
    } catch (error) {
      return 'Invalid Date';
    }
  }, []);
  return <span>{convertedDate}</span>;
};

export default TableDateCell;
