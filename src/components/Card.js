import React from 'react'
import './Card.css'

function Card(props) {
  const proxyImg = 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

  return (
    <div className="card">
        <span className='source'>{props.source}</span>
        <img src={props.imageUrl? props.imageUrl : `${proxyImg}`} alt="newsImg" />

        <div className="details">
            {props.title && (<h3>{props.title.slice(0, 100)}...</h3>)}
            {props.description && (<p>{props.description.slice(0, 150)}...</p>)}
        </div>

        <p className='author'>posted by <strong>{props.author ? props.author : 'unknown'}</strong> on, <br/> <strong> {new Date(props.date).toUTCString()} </strong></p>
        <a className='open' href={`${props.link}`}>Read More</a>
    </div>
  )
}

export default Card