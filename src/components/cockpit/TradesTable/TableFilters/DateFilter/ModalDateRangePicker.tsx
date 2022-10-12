import React, { ReactElement } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

interface Props {
   fromDateValue: Dayjs | null;
   toDateValue: Dayjs | null;
   closeModalHandler: () => void;
   showModalDateRangePicker: boolean;
   updateFromDateHandler: (newValue: Dayjs | null) => void;
   updateToDateHandler: (newValue: Dayjs | null) => void;
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
         onClose={closeModalHandler}
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
                     minDate={dayjs('2009-01-03')}
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
                     minDate={dayjs('2009-01-03')}
                     maxDate={dayjs()}
                     date={toDateValue}
                     onChange={(newDate) => updateToDateHandler(newDate)}
                  />
               </Box>
            </Box>
         </Box>
         <Typography variant='subtitle2' component='span' textAlign='center' sx={{ opacity: 0.5 }}>
            [ESC]
         </Typography>
      </Dialog>
   );
};

export { ModalDateRangePicker };
