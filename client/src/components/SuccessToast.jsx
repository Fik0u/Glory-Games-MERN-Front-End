import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify';
import { clearSuccess } from '../JS/actions/authAction';

const SuccessToast = ({ success }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (Array.isArray(success.success)) {
            success.success.forEach(elt => {
                if (!toast.isActive(elt.msg)) {
            toast.success(elt.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                toastId: elt.msg })

        }
    });
}
        const timer = setTimeout(() => {
            dispatch(clearSuccess())
        }, 5000);
        return () => clearTimeout(timer);

    }, [success, dispatch]);

  return (
    <div>
      
        <ToastContainer />

    </div>
  )
}

export default SuccessToast
