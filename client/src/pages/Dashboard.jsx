import React from 'react';
import AddProd from '../components/AddProd';
import { Link } from 'react-router-dom';
import { ShoppingCart, Users, PackageCheck, DollarSign } from 'lucide-react';



const Dashboard = () => {
  return (
    <div style={{
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh'
    }}>
      {/* Header  */}
        <h1 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '24px'
      }}>Admin Dashboard</h1>

        {/* Stats Cards  */}
        <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollBehavior: 'smooth',
  marginBottom: '40px',
}}>
        <StatCard icon={<ShoppingCart />} label='Orders' value='37' color='#2563eb' />
        <StatCard icon={<Users />} label='Users' value='20' color='#7c3aed' />
        <StatCard icon={<PackageCheck />} label='Products' value='20' color='#16a34a' />
        <StatCard icon={<DollarSign />} label='Sales' value='200$' color='#eab308' />
      </div>

        {/* Quick Actions  */}
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '40px'
      }}>

      <Link to={'/admin/orders'} style={{ padding: "5px 10px", background: "#4CAF50", color: "white", borderRadius: "5px", textDecoration: "none" }}>
          View Orders List
      </Link>

      <Link to={'/admin/users'} style={{ padding: "5px 10px", background: "#4CAF50", color: "white", borderRadius: "5px", textDecoration: "none" }}>
          View Users List
      </Link>
        </div>

{/* Add Product Form  */}
<div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
  <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          marginBottom: '16px'
        }}> Add New Product </h2>
      <AddProd />
</div>
    </div>
  )
}

const StatCard = ({ icon, label, value, color }) => (
  <div style={{
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    minWidth: '250px',
    scrollSnapAlign: 'center'
  }}>
    <div style={{ fontSize: '24px', color }}>{icon}</div>
    <div>
      <h4 style={{
        fontSize: '14px',
        color: '#6b7280'
      }}>{label}</h4>
      <p style={{
        fontSize: '18px',
        fontWeight: '600'
      }}>{value}</p>
    </div>
  </div>
);

export default Dashboard
