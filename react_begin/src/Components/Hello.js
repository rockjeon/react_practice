import React from 'react'
import './Hello.css'

function Hello({ name }) {
    return (
        <div className="Hearder">
            <div className="text">안녕하세요. {name}님....</div>
        </div>
    )
}

export default Hello
