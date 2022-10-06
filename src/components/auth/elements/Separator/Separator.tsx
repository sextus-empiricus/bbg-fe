import React, { ReactElement, ReactNode } from 'react';

import classes from './Separator.module.scss';

interface Props {
   children: ReactNode;
}

const Separator = ({ children }: Props): ReactElement => {
   return <div className={classes.Separator}>{children}</div>;
};

export { Separator };
