import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { AppRouter } from './routes/AppRouter';
import { theme } from './theme';

import './App.scss';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <div className='App'>
               <AppRouter />
            </div>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export { App };
