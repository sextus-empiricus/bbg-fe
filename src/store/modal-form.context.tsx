import React, {
   Context,
   createContext,
   Dispatch,
   ReactNode,
   SetStateAction,
   useState,
} from 'react';
import { SubmitHandler } from 'react-hook-form';

import { axiosInstance, getJWTHeader } from '../axios';
import { AddEditTradeDtoInterface } from '../components/cockpit/ModalForm/dto/AddNewTrade.dto';
import { useTrades } from '../components/cockpit/TradesTable/hooks/useTrades';
import { useSnackBar } from '../components/common/SnackBar/hooks/useSnackBar';
import { ModalFormMode } from '../types/enums';

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
   deleteHandler: () => {},
});

const ModalFormContextProvider = ({ children }: Props) => {
   const [open, setOpen] = useState<boolean>(false);
   const [tradeId, setTradeId] = useState<string>('');
   const [modalFormMode, setModalFormMode] = useState<ModalFormMode>(ModalFormMode.ADD);
   const { showSnackBar } = useSnackBar();
   const { refetch } = useTrades();

   const openModalFormHandler = (mode: ModalFormMode) => {
      setModalFormMode(mode);
      setOpen(true);
   };
   const closeModalFormHandler = () => {
      setOpen(false);
   };

   const onSubmitHandler: SubmitHandler<AddEditTradeDtoInterface> = async (
      dto: AddEditTradeDtoInterface,
   ) => {
      try {
         if (modalFormMode === ModalFormMode.ADD) {
            await axiosInstance.post('/trades', dto, { headers: getJWTHeader() });
            showSnackBar('New trade correctly added', 'success');
         } else {
            await axiosInstance.patch(`/trades/my/${tradeId}`, dto, {
               headers: getJWTHeader(),
            });
            showSnackBar('Trade correctly updated', 'success');
         }
         await refetch();
         closeModalFormHandler();
      } catch (e) {
         showSnackBar('Please try again', 'error');
      }
   };

   const onDeleteHandler = async (tradeId: string) => {
      try {
         await axiosInstance.delete(`/trades/my/${tradeId}`, { headers: getJWTHeader() });
         showSnackBar('Trade correctly deleted', 'success');
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
      submitHandler: onSubmitHandler,
      deleteHandler: onDeleteHandler,
   };

   return <ModalFormContext.Provider value={contextValue}>{children}</ModalFormContext.Provider>;
};

export { ModalFormContext, ModalFormContextProvider };
