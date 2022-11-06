import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { queryClient } from './react-query/queryClient';
import { AppRouter } from './routes/AppRouter';
import { SnackBarProvider } from './store/snack-bar.context';
import { theme } from './theme';

import './App.scss';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <QueryClientProvider client={queryClient}>
            <BrowserRouter>
               <SnackBarProvider>
                  <div className='App'>
                     <AppRouter />
                  </div>
               </SnackBarProvider>
            </BrowserRouter>
            <ReactQueryDevtools />
         </QueryClientProvider>
      </ThemeProvider>
   );
}

export { App };
