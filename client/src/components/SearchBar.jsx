import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../JS/actions/prodAction';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const prodsList = useSelector(state => state.prodReducer.prodsList);

    const handleSearch = (e) => {
        setKeyword(e.target.value);
        if (e.target.value !== '') {
            dispatch(searchProducts(e.target.value))
        }
    };

    const goToDetails = (id) => {
        navigate(`/product/${id}`);
        setKeyword('')
    };

  return (
    <div style={{ position: 'relative', width: '60%', margin: '0 auto', marginTop: '20px' }}>
      
        <input type='text' value={keyword} onChange={handleSearch} placeholder='Search product...' style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }} />

        {keyword && (
            <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: '#fff',
                border: '1px solid #ccc',
                borderTop: 'none',
                maxHeight: '300px',
                overflowY: 'auto',
                zIndex: 1000,
            }}>
                {prodsList.length > 0 ? (
                    prodsList.map((prod) => (
                        <div key={prod._id} onClick={() => goToDetails(prod._id)} style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            borderBottom: '1px solid #eee',
                            cursor:'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f9f9f9'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                        >
                            <img src={prod.image} alt={prod.name} style={{
                                    width: '70px',
                                    height: '70px',
                                    objectFit: 'cover',
                                    marginRight: '15px',
                                    borderRadius: '5px'
                                }} />
                            <span style={{ flex: 1 }}>{prod.name}</span>
                            <span style={{ fontWeight: 'bold' }}>{prod.price} $</span>
                        </div>
                    ))
                ) : (
                    <div style={{ padding: '10px', color: '#888' }}>No product found 🙁</div>
                )}
            </div>
        )}

    </div>
  )
}

export default SearchBar
