import { UseFormReturn } from 'react-hook-form';

interface UseFormError {
   setFieldError: (name: string, message: string) => void;
   setAllErrors: (message?: string) => void;
}
/*eslint-disable*/
const useFormError = (methods: UseFormReturn<any>): UseFormError => {
   const keys = Object.keys(methods.control._fields);

   const setFieldError = (name: string, message: string): void => {
      methods.setError(name, {
         type: 'string',
         message,
      });
   };

   const setAllErrors = (message?: string): void => {
      keys.forEach((key) => {
         setFieldError(key, message ?? ' ');
      });
   };

   return { setFieldError, setAllErrors };
};

export { useFormError };
