import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProdsList from '../components/ProdsList';
import { getProds } from '../JS/actions/prodAction';
import SearchBar from '../components/SearchBar';

const Home = () => {

  const prodsList = useSelector(state => state.prodReducer.prodsList);
  const user = useSelector(state => state.authReducer.user);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getProds())
  }, [dispatch]);

  // Sort products by creation date
  const newestProds = prodsList.filter(prod => !prod.isSale)
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

// Sort products by sales price
  const saleProds = prodsList.filter(prod => prod.isSale === true);


  return (
    <div>
      <SearchBar />
      
      <img src="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg" alt="test" style={{width: '600px', height: '400px', borderRadius: '20px', margin: '20px'}} />
<br />
      {/* Newest Products Section  */}
      <h1>Newest Products</h1>
      <ProdsList products = {newestProds.slice(0,5)} admin = {user.isAdmin} />

      {/* Products on Sales Section  */}
      <h1>Products on Sales</h1>
      <ProdsList products = {saleProds} admin = {user.isAdmin} />
    </div>
  )
}

export default Home
