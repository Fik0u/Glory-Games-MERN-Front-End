import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProdsList from '../components/ProdsList';
import { getProds } from '../JS/actions/prodAction';

const Home = () => {

  const prodsList = useSelector(state => state.prodReducer.prodsList);
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProds())
  }, [dispatch])

  return (
    <div>

      <img src="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg" alt="test" style={{width: '600px', height: '400px', borderRadius: '20px', margin: '20px'}} />

      <ProdsList products = {prodsList} admin = {user.isAdmin} />
    </div>
  )
}

export default Home
