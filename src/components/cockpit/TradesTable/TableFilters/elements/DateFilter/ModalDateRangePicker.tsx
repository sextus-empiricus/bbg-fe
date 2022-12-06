import React, { ReactElement } from 'react';
import { Box, Button, Dialog, Typography } from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

interface Props {
   onResetHandler: () => void;
   fromDateValue: Dayjs | null;
   toDateValue: Dayjs | null;
   closeModalHandler: () => void;
   showModalDateRangePicker: boolean;
   updateFromDateHandler: (newValue: Dayjs | null) => void;
   updateToDateHandler: (newValue: Dayjs | null) => void;
}

const ModalDateRangePicker = ({
   onResetHandler,
   closeModalHandler,
   fromDateValue,
   showModalDateRangePicker,
   toDateValue,
   updateFromDateHandler,
   updateToDateHandler,
}: Props): ReactElement => {
   return (
      <Dialog
         open={showModalDateRangePicker}
         onClose={closeModalHandler}
         PaperProps={{
            sx: {
               height: { xs: '100vh', sm: 'auto' },
               maxHeight: { xs: '100vh', sm: 'auto' },
               width: { xs: '100vw', sm: 'auto' },
               maxWidth: { xs: '100vw', sm: 'auto' },
               //
               margin: 0,
               padding: 2,
               background:
                  'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #170f26 91.61%)',
            },
         }}
      >
         <Box display='flex' flexDirection={{ xs: 'column', sm: 'row' }}>
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
         <Button variant='contained' fullWidth sx={{ marginBottom: 2 }} onClick={closeModalHandler}>
            ok
         </Button>
         <Button variant='outlined' fullWidth sx={{ marginBottom: 2 }} onClick={onResetHandler}>
            reset
         </Button>
      </Dialog>
   );
};

export { ModalDateRangePicker };
