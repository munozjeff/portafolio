import React from 'react';
import { NavBarComponent } from '../components/nav-bar/navBar';
import { Title } from '../components/title/title';
import {Link} from 'react-router-dom'

function Contact() {
    return(
        <>
            <NavBarComponent/>
            <Title title="Contact"/>
            <div className='contact'>
                <a href="https://www.linkedin.com/in/jefferson-muñoz-dev">
                    <figure>
                        <img src="/src/assets/linked-in.png" alt="" />
                    </figure>
                </a>
                <Link>
                    <figure>
                        <img src="/src/assets/telegram.png" alt="" />
                    </figure>
                </Link>
            </div>
        </>
    )
}
export {Contact}