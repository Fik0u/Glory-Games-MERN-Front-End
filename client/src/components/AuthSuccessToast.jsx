import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { clearSuccess } from '../JS/actions/authAction';

const AuthSuccessToast = ({ success }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (Array.isArray(success.success) && success.success.length > 0) {
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
                toastId: elt.msg });

        }
    });
    
    const timer = setTimeout(() => {
        dispatch(clearSuccess())
    }, 5000);
    
    return () => clearTimeout(timer);
}

    }, [success, dispatch]);

  return null
}

export default AuthSuccessToast
