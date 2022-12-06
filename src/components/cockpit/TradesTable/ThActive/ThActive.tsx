import React, { CSSProperties, ReactElement, useContext, useEffect, useState } from 'react';
import { AttachMoney, CurrencyExchange, DateRange, Percent } from '@mui/icons-material';
import { SxProps } from '@mui/material';

import { CockpitContext } from '../../../../store/cockpit.context';
import { TableQueryContext } from '../../../../store/table-query.context';
import { CockpitContextMode, ColumnType, QueryOrder, QuerySortBy } from '../../../../types';

import { getMaxSteps, getSortByValues } from './utils';

import classes from './ThActive.module.scss';

interface Props {
   columnType: ColumnType;
   isDynamic?: boolean;
   widthPerc: number;
   title: string;
}

const ThActive = ({ columnType, isDynamic, title, widthPerc }: Props): ReactElement => {
   const {
      mode: { value: mode },
   } = useContext(CockpitContext);
   const { setQueryObject, activeColumn, setActiveColumn } = useContext(TableQueryContext);
   const maxSteps = getMaxSteps(mode, columnType);
   const [step, setStep] = useState<number>(0);

   // --- SORTING LOGIC ---
   const onClickHandler = () => {
      setActiveColumn(columnType);
      if (mode === CockpitContextMode.trades) {
         if (step >= maxSteps) {
            setStep(0);
            return;
         }
         setStep((prev) => prev + 1);
      }
      if (mode === CockpitContextMode.history) {
         if (step >= maxSteps) {
            setStep(0);
            return;
         }
         setStep((prev) => prev + 1);
      }
   };

   const setQueryObjShorted = (
      sortBy: QuerySortBy | undefined,
      order: QueryOrder | undefined,
   ): void => {
      setQueryObject((prev) => ({ ...prev, sortBy, order }));
   };

   const declareSteps = (mode: CockpitContextMode, columnType: ColumnType) => {
      const querySortBy = getSortByValues(mode, columnType);
      if (maxSteps === 4) {
         if (step === 0) setQueryObjShorted(undefined, undefined);
         if (step === 1) setQueryObjShorted(querySortBy[0], QueryOrder.ASC);
         if (step === 2) setQueryObjShorted(querySortBy[0], QueryOrder.DESC);
         if (step === 3) setQueryObjShorted(querySortBy[1], QueryOrder.ASC);
         if (step === 4) setQueryObjShorted(querySortBy[1], QueryOrder.DESC);
      } else {
         if (step === 0) setQueryObjShorted(undefined, undefined);
         if (step === 1) setQueryObjShorted(querySortBy[0], QueryOrder.ASC);
         if (step === 2) setQueryObjShorted(querySortBy[0], QueryOrder.DESC);
      }
   };

   // reset on mode change
   useEffect(() => {
      setStep(0);
   }, [mode]);

   // action on step change
   useEffect(() => {
      if (columnType === ColumnType.DATE) declareSteps(mode, columnType);
      if (columnType === ColumnType.CURRENCY) declareSteps(mode, columnType);
      if (columnType === ColumnType.AMOUNT) declareSteps(mode, columnType);
      if (columnType === ColumnType.INVESTS) declareSteps(mode, columnType);
      if (columnType === ColumnType.PRICE) declareSteps(mode, columnType);
      if (mode === CockpitContextMode.history) {
         if (columnType === ColumnType.PROFIT) declareSteps(mode, columnType);
      }
   }, [step]);

   // --- VIEW ---
   const renderArrow = () => {
      const arrowStyle: CSSProperties = {
         marginLeft: '5px',
         fontSize: '0.6rem',
      };
      if (step === 1 || step === 3) {
         return <span style={arrowStyle}>▲</span>;
      }
      if (step === 2 || step === 4) {
         return <span style={arrowStyle}>▼</span>;
      }
   };

   const renderIcon = () => {
      const iconStyle: SxProps = {
         height: '12px',
      };
      if (mode === CockpitContextMode.history && maxSteps === 4) {
         if (step === 1 || step === 2) {
            return columnType === ColumnType.PROFIT ? (
               <Percent sx={iconStyle} />
            ) : (
               <DateRange sx={iconStyle} />
            );
         }
         if (step === 3 || step === 4) {
            return columnType === ColumnType.PROFIT ? (
               <AttachMoney sx={iconStyle} />
            ) : (
               <CurrencyExchange sx={iconStyle} />
            );
         }
      }
   };

   return (
      <th
         className={`${classes.ThActive} ${isDynamic && classes.dynamic}`}
         style={{ width: `${widthPerc}%` }}
         onClick={isDynamic ? onClickHandler : undefined}
      >
         <div className={classes.wrapper}>
            {activeColumn === columnType && renderIcon()}
            <span>{title}</span>
            {activeColumn === columnType && renderArrow()}
         </div>
      </th>
   );
};
export { ThActive };
