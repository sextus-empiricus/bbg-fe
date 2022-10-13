import React, { MouseEvent, ReactElement, useContext } from 'react';

import { TableQueryContext } from '../../../../store/table-query.context';

import classes from './ThActive.module.scss';

interface Props {
   datasetName?: string;
   isDynamic: boolean;
   widthPerc: number;
   title: string;
}

const ThActive = ({ datasetName, isDynamic, title, widthPerc }: Props): ReactElement => {
   const {
      query: { sortBy, order },
      setQueryObject,
   } = useContext(TableQueryContext);

   const orderSymbol = () => {
      if (datasetName === sortBy) {
         switch (order) {
            case 'asc': {
               return '▲';
            }
            case 'desc': {
               return '▼';
            }
            case '': {
               return '';
            }
            default:
               return '';
         }
      }
      return '';
   };

   const onClickHandler = (e: MouseEvent<HTMLTableHeaderCellElement>) => {
      const { name } = e.currentTarget.dataset;
      if (sortBy !== name) {
         setQueryObject((prev) => ({ ...prev, sortBy: name, order: 'asc' }));
      } else if (sortBy === name && order === 'desc') {
         setQueryObject((prev) => ({ ...prev, sortBy: '', order: '' }));
      } else if (sortBy === name) {
         setQueryObject((prev) => ({ ...prev, order: 'desc' }));
      } else {
         setQueryObject((prev) => ({ ...prev, sortBy: name }));
      }
   };

   return (
      <th
         className={`${classes.ThActive} ${isDynamic && classes.dynamic}`}
         data-name={datasetName}
         style={{ width: `${widthPerc}%` }}
         onClick={isDynamic ? onClickHandler : undefined}
      >
         {title}
         {isDynamic && (
            <span style={{ marginLeft: '2px', fontSize: '0.6rem' }}>{orderSymbol()}</span>
         )}
      </th>
   );
};

export { ThActive };
