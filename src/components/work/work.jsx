import React from 'react';
import "./style.css"


function Work({title,info,image}){
    return(
        <section className="works">
            {title && <h3 className="work-title">{title}</h3>}
            {info.map((text,index)=><p key={index} className="work-info">{text}</p>)}
            <div className='laptop-container'>
                <figure className="laptop">
                    <img src="/assets/laptop.png"></img>
                </figure>
                <div className="screen">
                    <figure>
                        <img src={image}></img>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export {Work}