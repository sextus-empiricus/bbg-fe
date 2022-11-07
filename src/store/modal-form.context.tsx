import React, {
   Context,
   createContext,
   Dispatch,
   ReactNode,
   SetStateAction,
   useState,
} from 'react';
import { SubmitHandler } from 'react-hook-form';
import dayjs from 'dayjs';

import { axiosInstance, getJWTHeader } from '../axios';
import {
   AddEditTradeDtoInterface,
   SellTradeDto,
   UpdateTradeHistoryDto,
} from '../components/cockpit/ModalForm/dto';
import { useTrades } from '../components/cockpit/TradesTable/hooks/useTrades';
import { useSnackBar } from '../components/common/SnackBar/hooks/useSnackBar';
import { ModalFormMode } from '../types';

interface ModalFormContextInterface {
   tradeId: {
      value: string;
      set: Dispatch<SetStateAction<string>>;
   };
   open: {
      value: boolean;
      open: (mode: ModalFormMode) => void;
      close: () => void;
   };
   mode: {
      value: ModalFormMode;
      set: Dispatch<SetStateAction<ModalFormMode>>;
   };
   submitHandler: (dto: AddEditTradeDtoInterface) => void;
   submitHandlerHistory: (dto: UpdateTradeHistoryDto) => void;
   sellHandler: (dto: SellTradeDto) => void;
   deleteHandler: (tradeId: string) => void;
}

interface Props {
   children: ReactNode;
}

/*eslint-disable*/
/*@ts-ignore*/
const ModalFormContext: Context<ModalFormContextInterface> = createContext({
   tradeId: {
      value: '',
      set: () => {},
   },
   open: {
      value: false,
      open: () => {},
      close: () => {},
   },
   mode: {
      value: ModalFormMode.ADD,
      set: () => {},
   },
   submitHandler: () => {},
   submitHandlerHistory: () => {},
   sellHandler: () => {},
   deleteHandler: () => {},
});

const ModalFormContextProvider = ({ children }: Props) => {
   const [open, setOpen] = useState<boolean>(false);
   const [tradeId, setTradeId] = useState<string>('');
   const [modalFormMode, setModalFormMode] = useState<ModalFormMode>(ModalFormMode.ADD);
   const { showSnackBar } = useSnackBar();
   const {
      refetch,
      data: { tradesList },
   } = useTrades();
   const trade = tradesList.filter((el) => el.id === tradeId)[0];

   const openModalFormHandler = (mode: ModalFormMode) => {
      setModalFormMode(mode);
      setOpen(true);
   };

   const closeModalFormHandler = () => {
      setOpen(false);
   };

   const submitHandler: SubmitHandler<AddEditTradeDtoInterface> = async (
      dto: AddEditTradeDtoInterface,
   ) => {
      try {
         if (modalFormMode === ModalFormMode.ADD) {
            await axiosInstance.post('/trades', dto, { headers: getJWTHeader() });
            showSnackBar('New trade added', 'success');
         } else if (modalFormMode === ModalFormMode.EDIT) {
            await axiosInstance.patch(`/trades/my/${tradeId}`, dto, {
               headers: getJWTHeader(),
            });
            showSnackBar('Trade updated', 'success');
         }
         await refetch();
         closeModalFormHandler();
      } catch (e) {
         showSnackBar('Please try again', 'error');
      }
   };

   const submitHandlerHistory: SubmitHandler<UpdateTradeHistoryDto> = async (
      dto: UpdateTradeHistoryDto,
   ) => {
      const { currency, soldAt, sellPrice, buyPrice, profitPerc, profitCash, soldFor, ...trade } =
         dto;
      const buildDtoTrade = {
         currency: currency.toLowerCase(),
         ...trade,
         price: buyPrice,
      };
      const buildDtoTradeHistory = {
         soldAt,
         price: sellPrice,
         profitPerc,
         profitCash,
         soldFor,
      };
      try {
         // updateTrade:
         await axiosInstance.patch(`/trades/my/${tradeId}`, buildDtoTrade, {
            headers: getJWTHeader(),
         });
         // update tradeHistory:
         await axiosInstance.patch(`/trade-history/trade/${tradeId}`, buildDtoTradeHistory, {
            headers: getJWTHeader(),
         });
         await refetch();
         showSnackBar('Trade updated', 'success');
         closeModalFormHandler();
      } catch (e) {
         showSnackBar('Please try again', 'error');
      }
   };

   const sellHandler = async (formData: SellTradeDto) => {
      const { sellPrice } = formData;
      const dataBuilder = {
         soldAt: dayjs(),
         price: sellPrice,
         soldFor: trade.amount * sellPrice,
         profitCash: trade.amount * sellPrice - trade.boughtFor,
         profitPerc: (sellPrice * 100) / trade.price - 100,
      };
      try {
         await axiosInstance.post(`/trade-history/trade/${tradeId}`, dataBuilder, {
            headers: getJWTHeader(),
         });
         showSnackBar('Trade moved to history', 'success');
         await refetch();
         closeModalFormHandler();
      } catch (e) {
         showSnackBar('Please try again', 'error');
      }
   };

   const deleteHandler = async (tradeId: string) => {
      try {
         await axiosInstance.delete(`/trades/my/${tradeId}`, { headers: getJWTHeader() });
         showSnackBar('Trade deleted', 'success');
         await refetch();
         closeModalFormHandler();
      } catch (e) {
         showSnackBar('Please try again', 'error');
      }
   };

   const contextValue: ModalFormContextInterface = {
      tradeId: {
         value: tradeId,
         set: setTradeId,
      },
      open: {
         value: open,
         open: openModalFormHandler,
         close: closeModalFormHandler,
      },
      mode: {
         value: modalFormMode,
         set: setModalFormMode,
      },
      submitHandler,
      submitHandlerHistory,
      sellHandler,
      deleteHandler,
   };

   return <ModalFormContext.Provider value={contextValue}>{children}</ModalFormContext.Provider>;
};

export { ModalFormContext, ModalFormContextProvider };
