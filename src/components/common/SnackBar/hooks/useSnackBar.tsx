import { useContext } from 'react';

import { SnackBarContext } from '../../../../store/snackBar.context';

const useSnackBar = () => {
   const { showSnackBar } = useContext(SnackBarContext);
   return { showSnackBar };
};
export { useSnackBar };
