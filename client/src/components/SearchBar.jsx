import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {

    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();

    const prodsList = useSelector(state => state.prodReducer.prodsList);

    const filteredProds = prodsList.length > 0
    ? prodsList.filter(prod => prod.name.toLowerCase().includes(keyword.toLowerCase()))
    : [];

    const handleSearch = (e) => {
        setKeyword(e.target.value);
    };

    const goToDetails = (id) => {
        navigate(`/product/${id}`);
        setKeyword('')
    };

  return (
    <div style={{ position: 'relative', width: '40%', margin: '0 auto', marginTop: '20px', marginBottom: '40px' }}>
      
        <input type='text' value={keyword} onChange={handleSearch} placeholder='Search product...' style={{
                    width: '100%',
                    padding: '12px 15px 12px 40px',
                    fontSize: '16px',
                    borderRadius: '25px',
                    border: '1px solid #ccc',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#fff',
                    outline: 'none',
                    boxShadow: keyword ?'0 0px 5px rgba(0, 212, 255, 0.5)' : 'none'
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 5px rgba(0, 212, 255, 0.5)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
                />

        <FaSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#ccc' }} />

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
                {filteredProds.length > 0 ? (
                    filteredProds.map((prod) => (
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
