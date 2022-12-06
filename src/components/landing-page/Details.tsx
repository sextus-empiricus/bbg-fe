import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

import { detailsData } from './constants';
import { Paragraph, Title } from './elements';

const Details = (): ReactElement => {
   return (
      <Box>
         {detailsData.map((el, index) => {
            const isEven = index % 2 === 0;

            return (
               <Box
                  key={el.id}
                  marginTop={isEven ? 0 : 12}
                  width='100%'
                  display='flex'
                  flexDirection={{ xs: 'column', md: isEven ? 'row' : 'row-reverse' }}
                  justifyContent='flex-start'
               >
                  <Box>
                     <img
                        src={el.img}
                        alt='cockpit'
                        style={{
                           width: '100%',
                           borderRadius: 10,
                           boxShadow: '0px 0px 10px rgb(0 0 0 / 50%)',
                        }}
                     />
                  </Box>
                  <Box
                     marginTop={{ xs: 4, md: 0 }}
                     paddingLeft={{ xs: 0, md: isEven ? 5 : 0 }}
                     paddingRight={{ xs: 0, md: !isEven ? 5 : 0 }}
                     display='flex'
                     flexDirection='column'
                     justifyContent='center'
                     textAlign={isEven ? 'left' : 'right'}
                  >
                     <Title sx={{ marginBottom: 2 }}>{el.title}</Title>
                     <Box
                        sx={{
                           padding: '10px 20px',
                           background: `linear-gradient(${
                              isEven ? '90' : '270'
                           }deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)`,
                           borderRadius: '10px',
                           backdropFilter: 'blur(10px)',
                        }}
                     >
                        <Paragraph noMarginTop>{el.description}</Paragraph>
                     </Box>
                  </Box>
               </Box>
            );
         })}
      </Box>
   );
};

export { Details };
