import React from 'react';
import AddProd from '../components/AddProd';
import { Link } from 'react-router-dom';



const Dashboard = () => {
  return (
    <div>
        <h1>Admin's Dashboard</h1>
      <AddProd />
      <Link to={'/admin/orders'} style={{ padding: "5px 10px", background: "#4CAF50", color: "white", borderRadius: "5px", textDecoration: "none" }}>
          View Orders List
      </Link>
    </div>
  )
}

export default Dashboard
