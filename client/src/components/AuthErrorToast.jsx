import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { clearErrors } from '../JS/actions/authAction';

const AuthErrorToast = ({ errors }) => {

    const dispatch = useDispatch();

    useEffect(() => {
      let timer;
      
      if (Array.isArray(errors) && errors.length > 0) {
      errors.forEach((error, i) => {
        const toastId = `error-${i}-${error.msg.slice(0,20)}`
        if (!toast.isActive(toastId)) {
        toast.error(error.msg, {
          toastId,
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        }
    });

      const timer = setTimeout(() => {
        dispatch(clearErrors())
      }, 5000);
    }
      return () => {
        if (timer) clearTimeout(timer);
  
      }

    }, [errors, dispatch]);

  return (
    <div>
      
      <ToastContainer />

    </div>
  )
}

export default AuthErrorToast
