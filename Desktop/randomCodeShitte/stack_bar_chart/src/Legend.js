import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import './Legend.css'

function Legend() {
    return (
        <div className='legendContainer'>
            <div className='legendItem'>
                <FontAwesomeIcon icon={faSquare} size="xs" color="#ff0000" style={{ height: "25px", marginLeft: "20px" }} />
                <div className='description'>0 (Not visible)</div>
            </div>
            <div className='legendItem'>
                <FontAwesomeIcon icon={faSquare} size="xs" color="#ff0000" style={{ height: "25px", marginLeft: "20px" }} />
                <div className='description'>0-25</div>
            </div>
            <div className='legendItem'>
                <FontAwesomeIcon icon={faSquare} size="xs" color="#ffa500" style={{ height: "25px", marginLeft: "20px" }} />
                <div className='description'>26-50</div>
            </div>
            <div className='legendItem'>
                <FontAwesomeIcon icon={faSquare} size="xs" color="#ffd700" style={{ height: "25px", marginLeft: "20px" }} />
                <div className='description'> 51-75</div>
            </div>
            <div className='legendItem'>
                <FontAwesomeIcon icon={faSquare} size="xs" color="#ffff00" style={{ height: "25px", marginLeft: "20px" }} />
                <div className='description'>76-100</div>
            </div>
            <div className='legendItem'>
                <FontAwesomeIcon icon={faSquare} size="xs" color="#008000" style={{ height: "25px", marginLeft: "20px" }} />
                <div className='description'> 101-125</div>
            </div>
            <div className='legendItem'>
                <FontAwesomeIcon icon={faSquare} size="xs" color="#2ca02c" style={{ height: "25px", marginLeft: "20px" }} />
                <div className='description'>126-150</div>
            </div>
            <div className='legendItem'>
                <FontAwesomeIcon icon={faSquare} size="xs" color="#1f77b4" style={{ height: "25px", marginLeft: "20px" }} />
                <div className='description'>151-200</div>
            </div>
            <div className='legendItem'>
                <FontAwesomeIcon icon={faSquare} size="xs" color="#000000" style={{ height: "25px", marginLeft: "20px" }} />
                <div className='description'>{">"} 200</div>
            </div>
        </div>
    )
}

export default Legend