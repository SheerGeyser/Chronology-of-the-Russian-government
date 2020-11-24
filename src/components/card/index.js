import React from 'react'
import './Card.scss'

export function Card({ logoSrc, name, bg }) {
    return (
        <div className='cardWrapper'>
            <h3>{name}</h3>
            <div style={{ background: bg }}>
                <img src={logoSrc} alt={name + ' logo'} />
            </div>
        </div>
    )
}
