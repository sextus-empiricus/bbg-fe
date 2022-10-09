import React, { ReactElement } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

interface Props {
   closeModalHandler: any;
   fromDateValue: any;
   showModalDateRangePicker: any;
   toDateValue: any;
   updateFromDateHandler: any;
   updateToDateHandler: any;
}

const ModalDateRangePicker = ({
   closeModalHandler,
   fromDateValue,
   showModalDateRangePicker,
   toDateValue,
   updateFromDateHandler,
   updateToDateHandler,
}: Props): ReactElement => {
   return (
      <Dialog
         maxWidth='lg'
         open={showModalDateRangePicker}
         onClose={() => closeModalHandler()}
         PaperProps={{
            sx: {
               bgcolor: 'rgba(47, 47, 47, 0.5)',
               backdropFilter: 'blur(5px)',
               padding: 2,
            },
         }}
      >
         <Box display='flex'>
            <Box display='flex' flexDirection='column'>
               <Typography variant='body1' component='span' textAlign='center'>
                  From
               </Typography>
               <Box minHeight={360}>
                  <CalendarPicker
                     minDate={dayjs('2022-01-01')}
                     maxDate={dayjs()}
                     date={fromDateValue}
                     onChange={(newDate) => updateFromDateHandler(newDate)}
                  />
               </Box>
            </Box>
            <Box display='flex' flexDirection='column'>
               <Typography variant='body1' component='span' textAlign='center'>
                  To
               </Typography>
               <Box minHeight={360}>
                  <CalendarPicker
                     minDate={dayjs('2022-01-01')}
                     maxDate={dayjs()}
                     date={toDateValue}
                     onChange={(newDate) => updateToDateHandler(newDate)}
                  />
               </Box>
            </Box>
         </Box>
      </Dialog>
   );
};

export { ModalDateRangePicker };
