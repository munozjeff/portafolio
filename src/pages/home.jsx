import React from 'react';
import { Avatar } from '../components/avatar/avatar';
import { NavBarComponent } from '../components/nav-bar/navBar';
import "./style.css"
import { FloatingEmojis } from '../components/float/float';


function Home(){
    return(
        <>
            <NavBarComponent/>
            <Avatar/>
            <div className='presentation'>
                <div>
                    <p className='typing_one'>Hy, my name is </p>
                </div>
                <div>
                    <p className='typing_two'>Jefferson</p>
                </div>
                <div>
                    <p className='typing_tree'>I'm FrontEnd developer </p>
                </div>
            </div>
            <FloatingEmojis/>
        </>
    )
}

export {Home}