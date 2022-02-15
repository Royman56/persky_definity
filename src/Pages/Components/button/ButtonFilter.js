import React from 'react'
import "../button/button.css"

function Button({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="btn">{cat}</button>
                })
            }
        </div>
    )
}

export default Button;