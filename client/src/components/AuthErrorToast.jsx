import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors } from '../JS/actions/authAction';


const AuthErrorToast = ({ errors }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;

    if (Array.isArray(errors) && errors.length > 0) {
      errors.forEach((error, index) => {
        const toastId = `auth-error-${index}-${error.msg.slice(0, 20)}`;

        if (!toast.isActive(toastId)) {
          toast.error(error.msg, {
            toastId,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        }
      });

      timer = setTimeout(() => {
        dispatch(clearErrors());
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [errors, dispatch]);

  return null
};

export default AuthErrorToast;
