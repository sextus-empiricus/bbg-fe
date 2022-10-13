import React, { ChangeEvent, MouseEvent, useContext } from 'react';
import { TablePagination } from '@mui/material';

import { TableQueryContext } from '../../../../store/table-query.context';
import { useTrades } from '../hooks/useTrades';

const PaginationController = () => {
   const {
      query: { page, limit },
      setQueryObject,
   } = useContext(TableQueryContext);
   const {
      data: { results },
   } = useTrades();

   const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setQueryObject((prev) => ({ ...prev, page: String(newPage + 1) }));
   };

   const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setQueryObject((prev) => ({
         ...prev,
         limit: String(parseInt(event.target.value, 10)),
         page: String(1),
      }));
   };

   const setPage = () => {
      if (limit && page) {
         if (+limit >= +results) {
            return 0;
         }
         return +page - 1;
      }
      return 0;
   };

   return (
      <TablePagination
         component='div'
         count={results}
         page={setPage()}
         onPageChange={handleChangePage}
         rowsPerPage={limit ? +limit : 10}
         labelRowsPerPage='Trades per page'
         rowsPerPageOptions={[5, 10, 20, 50]}
         onRowsPerPageChange={handleChangeRowsPerPage}
      />
   );
};

export { PaginationController };
