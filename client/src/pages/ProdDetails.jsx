import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProd } from '../JS/actions/prodAction';
import { addToCart } from '../JS/actions/cartAction';
import '../components/styles/productDetails.css';




const ProdDetails = () => {


    const params = useParams();
    const dispatch = useDispatch();
    const prod = useSelector(state => state.prodReducer.prod);

    const handleAddToCart = () => {
      dispatch(addToCart(prod, 1))
    };
  
    useEffect(() => {
        dispatch(getOneProd(params.id))
    }, [dispatch, params.id]);

    return (
<div style={{
  marginTop: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  padding: "20px",
  margin: "80px",
  backgroundColor: "#fff",
  // Ajouts responsive:
  flexDirection: "row", // Par défaut
  "@media (max-width: 768px)": { // Mobile
    flexDirection: "column",
    margin: "20px",
    marginTop: "40px"
  }
}}>
  <img
    src={prod.image}
    alt={prod.name}
    style={{
      width: "500px",
      height: "auto",
      borderRadius: "8px",
      // Ajouts responsive:
      "@media (max-width: 768px)": {
        width: "100%",
        maxWidth: "400px"
      }
    }}
  />
  
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    // Ajouts responsive:
    "@media (max-width: 768px)": {
      alignItems: "center",
      width: "100%"
    }
  }}>
    <h3 style={{
      fontSize: "35px",
      marginBottom: "10px",
      marginLeft: "90px",
      color: "#555",
      // Ajouts responsive:
      "@media (max-width: 768px)": {
        fontSize: "28px",
        marginLeft: "0",
        textAlign: "center"
      }
    }}>
      {prod.name}
    </h3>

    <p style={{
      fontSize: "20px",
      color: "#666",
      marginLeft: "90px",
      marginTop: "70px",
      // Ajouts responsive:
      "@media (max-width: 768px)": {
        fontSize: "16px",
        marginLeft: "0",
        marginTop: "30px",
        textAlign: "center",
        padding: "0 10px"
      }
    }}>
      {prod.description}
    </p>

    <p style={{
      fontSize: "16px",
      color: "#666",
      marginTop: "57px",
      margin: "5px 0",
      // Ajouts responsive:
      "@media (max-width: 768px)": {
        marginTop: "20px"
      }
    }}>
      <strong style={{
        fontSize: "28px",
        marginLeft: "100px",
        color: "#000",
        // Ajouts responsive:
        "@media (max-width: 768px)": {
          fontSize: "24px",
          marginLeft: "0",
          display: "block",
          textAlign: "center"
        }
      }}>
        {prod.price} $
      </strong>
    </p>

    <button
      onClick={handleAddToCart}
      style={{
        marginTop: "10px",
        marginLeft: "90px",
        padding: "10px 20px",
        fontSize: "15px",
        fontWeight: "bold",
        background: "linear-gradient(45deg, #041361, #0003c4)",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.4s ease",
        // Ajouts responsive:
        "@media (max-width: 768px)": {
          marginLeft: "0",
          width: "100%",
          maxWidth: "300px"
        }
      }}
      onMouseOver={(e) => {
        e.target.style.background = "linear-gradient(45deg,rgb(0, 26, 255),rgb(0, 102, 255))";
        e.target.style.boxShadow = "0 0 10px #00f2ff, 0 0 20px #00f2ff";
      }}
      onMouseOut={(e) => {
        e.target.style.background = "linear-gradient(45deg, #041361, #0003c4)";
        e.target.style.boxShadow = "0 0 0px #0003c4";
      }}
    >
      Add to Cart
    </button>
  </div>
</div>
      
  )
}

export default ProdDetails
