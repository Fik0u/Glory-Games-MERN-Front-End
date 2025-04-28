import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProdsList from '../components/ProdsList';
import { getProds } from '../JS/actions/prodAction';
import SearchBar from '../components/SearchBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import './styles/Home.css';

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
    <div className="home-background">
      <SearchBar />
      {/* Video  */}
      <div className='youtube-container'>
        <iframe src="https://www.youtube.com/embed/c0i88t0Kacs?autoplay=1&mute=1&loop=1&playlist=c0i88t0Kacs" title='test' frameBorder="0" width="100%" height= "100%" allow='autoplay' allowFullScreen ></iframe>
        <div className='video-overlay'>
          <h1>Welcome to Glory Games</h1>
          <p>Your one-stop shop for all your gaming needs !</p>
          <button className="cta-button" onClick={() => {
        document.getElementById('new-products').scrollIntoView({ behavior: 'smooth' }) }}>
          Discover Products
          </button>
        <div className="video-bottom-transition"></div>
        </div>
      </div>

      
<br />
      {/* Newest Products Section  */}
      <h1 id='new-products'>Newest Products</h1>
      <div className='new-products-carousel'>
        <Swiper modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          effect='fade'
          breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
        }}>
        
        {newestProds.slice(0, 10).map(prod => (
          <SwiperSlide key={prod._id}>
              <ProdsList products = {[prod]} admin = {user.isAdmin} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>


      {/* Products on Sales Section  */}
      <h1>Products on Sales</h1>
      <ProdsList products = {saleProds} admin = {user.isAdmin} />
    </div>
  )
}

export default Home
