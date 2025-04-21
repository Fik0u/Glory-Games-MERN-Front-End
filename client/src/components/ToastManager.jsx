import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearToasts } from '../JS/actions/toastAction';


const ToastManager = () => {

    const dispatch = useDispatch();
    const { success, error } = useSelector(state => state.toastReducer);

    useEffect(() => {
        if (success) {
            toast.success(success);
            dispatch(clearToasts())
        }
        if (error) {
            toast.error(error);
            dispatch(clearToasts())
        }
    }, [success, error, dispatch]);

  return null
}

export default ToastManager
