import React, { ReactElement } from 'react';
import { Box, Link } from '@mui/material';

import { homeNavigationLinks } from '../constants';

const HomeNav = (): ReactElement => {
   return (
      <Box display={{ xs: 'none', sm: 'block' }}>
         <nav style={{ height: '100%' }}>
            <ul
               style={{
                  marginRight: '20px',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  listStyle: 'none',
               }}
            >
               {homeNavigationLinks.map((el) => (
                  <li key={el.id}>
                     <Link
                        href={el.href}
                        fontSize={16}
                        marginRight={2}
                        sx={{ color: '#97b5d4', fontWeight: 500 }}
                     >
                        {el.title}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </Box>
   );
};

export { HomeNav };
