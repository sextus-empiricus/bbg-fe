import React, { ChangeEvent, MouseEvent, useContext } from 'react';
import { Box, TablePagination } from '@mui/material';

import { TableQueryContext } from '../../../../store/table-query.context';
import { useTrades } from '../hooks/useTrades';

const paginationControllerH = 60;

const PaginationController = () => {
   const {
      query: { page, limit },
      setQueryObject,
   } = useContext(TableQueryContext);
   const {
      data: { results },
   } = useTrades();

   const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setQueryObject((prev) => ({ ...prev, page: newPage + 1 }));
   };

   const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setQueryObject((prev) => ({
         ...prev,
         limit: parseInt(event.target.value, 10),
         page: 1,
      }));
   };

   const setPage = () => {
      if (limit && page) {
         if (limit >= results) {
            return 0;
         }
         return page - 1;
      }
      return 0;
   };

   return (
      <Box
         height={paginationControllerH}
         display='flex'
         justifyContent='center'
         alignItems='center'
      >
         <TablePagination
            component='div'
            count={results}
            page={setPage()}
            onPageChange={handleChangePage}
            rowsPerPage={limit ? +limit : 10}
            labelRowsPerPage='per page'
            rowsPerPageOptions={[5, 10, 20, 50]}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Box>
   );
};

export { PaginationController, paginationControllerH };
