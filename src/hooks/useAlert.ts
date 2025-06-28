import { toast } from 'react-hot-toast';

export const useAlert = () => {
  return {
    success: (msg: string) => toast.success(msg),
    error: (msg: string) => toast.error(msg),
    loading: (msg: string) => toast.loading(msg),
    dismiss: (id?: string) => toast.dismiss(id),
  };
};

// import { useCallback } from 'react';

// export const useAlert = () => {
//   const showAlert = useCallback((message: string) => {
//     toast.success(message);
//   }, []);

//   return showAlert;
// };
