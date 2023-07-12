import React from 'react';
import "./style.css"

function Title({title}) {
    return(
        <div className="title_section">
            <div>
                <h2>{title}</h2>
                <hr></hr>
            </div>
        </div>
    ) 
}

export {Title}