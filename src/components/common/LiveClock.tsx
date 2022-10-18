import React, { CSSProperties, ReactElement } from 'react';
import ReactLiveClock from 'react-live-clock';

interface Props {
   style?: CSSProperties;
   className?: string;
}

const LiveClock = ({ style = {}, className }: Props): ReactElement => {
   return (
      <ReactLiveClock
         format='HH:mm:ss'
         ticking={true}
         className={className}
         style={{ ...style, fontFamily: 'Roboto Mono, monospace' }}
      />
   );
};

export { LiveClock };
