import React, { MouseEvent, ReactElement, useContext } from 'react';

import { TableQueryContext } from '../../../../store/table-query.context';
import { QueryOrder, QuerySortBy } from '../../../../types/enums/QueryParams.enums';

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
            case undefined: {
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
         setQueryObject((prev) => ({
            ...prev,
            sortBy: name as QuerySortBy,
            order: QueryOrder.ASC,
         }));
      } else if (sortBy === name && order === 'desc') {
         setQueryObject((prev) => ({ ...prev, sortBy: undefined, order: undefined }));
      } else if (sortBy === name) {
         setQueryObject((prev) => ({ ...prev, order: QueryOrder.DESC }));
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
