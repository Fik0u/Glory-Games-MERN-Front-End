import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { clearErrors } from '../JS/actions/authAction';

const ErrorToast = ({ errors }) => {

    const dispatch = useDispatch();

    useEffect(() => {
      if (Array.isArray(errors) && errors.length > 0) {
      errors.forEach(error => {
        if (!toast.isActive(error.msg)) {
        toast.error(error.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          toastId: error.msg });
        }
    });

      const timer = setTimeout(() => {
        dispatch(clearErrors())
      }, 5000);

      return () => clearTimeout(timer);
  }
  
    }, [errors, dispatch]);

  return (
    <div>
      
      <ToastContainer />

    </div>
  )
}

export default ErrorToast
