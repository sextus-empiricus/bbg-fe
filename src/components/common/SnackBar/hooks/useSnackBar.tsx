import { useContext } from 'react';

import { SnackBarContext } from '../../../../store/snack-bar.context';

const useSnackBar = () => {
   const { showSnackBar } = useContext(SnackBarContext);
   return { showSnackBar };
};
export { useSnackBar };
