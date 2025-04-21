import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinLoad = () => {
  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Spinner animation="grow" variant="success" />

    </div>
  )
}

export default SpinLoad
