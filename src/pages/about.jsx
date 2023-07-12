import React from 'react';
import { NavBarComponent } from '../components/nav-bar/navBar';
import { Title } from '../components/title/title';

function About(){
    let text_1 = "I am a junior front-end web developer with a passion for creating unique and engaging digitalexperiences. My focus is primarily on implementing attractive and efficient designs, using technologies such as HTML, CSS,JavaScript and React."
    let text_2 = "I take pride in my ability to quickly learn and apply new techniques in my work. I am always looking to improve my skills and am willing to take risks and face challenges. My goal is to work in a dynamic and collaborative environment, where I can learn from experienced professionals and contribute my skills to achieve team goals."
    let text_3 = "My front-end development experience includes creating websites, applications, and content management systems. I am excited for the opportunity to apply my skills and knowledge in a challenging environment, where I can significantly contribute to interesting and ambitious projects."
    
    return(
        <>
            <NavBarComponent/>
            <Title title="About"/>
            <article className='about-article'>
                <div>
                    <p>{text_1}</p>
                    <figure>
                        <img src="/src/assets/img_1.png" alt="" />
                    </figure>
                    <p>{text_2}</p>
                    <figure>
                        <img src="/src/assets/img_2.png" alt="" />
                    </figure>
                    <p>{text_3}</p>
                    <figure>
                        <img src="/src/assets/img_3.png" alt="" />
                    </figure>
                </div>
                <p>If you are interested in my work, please do not hesitate to get in touch. I am ready to join your team and take your projects to the next level!</p>
            </article>
            
        </>
    )
}
export {About}