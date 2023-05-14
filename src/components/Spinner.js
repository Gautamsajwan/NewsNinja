import React from 'react'
import spinner from '../assets/spinner.svg'

function Spinner() {
  const styles = {
    width: '70px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    zIndex: '2',
  }
  return (
    <div className='spinner'>
        <img style={styles} src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner