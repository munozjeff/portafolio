import React from 'react';
import { NavBarComponent } from '../components/nav-bar/navBar';
import { Title } from '../components/title/title';
import { Work } from '../components/work/work';
import ferroelectricos_landing_page from "../assets/LandingPage_ferroelectricos_y_soluciones_muñoz.jpeg"
import ferroelectricos from "../assets/ferroelectricos.png"
import bis from "../assets/BIS.jpg"
import realstar from "../assets/Landing_page_realstar.jpeg"

function Works(){
    let info_1 = ["This project is a website for a tools and construction materials store, developed using the technologies of HTML, CSS, and JavaScript. The site includes a homepage consisting of a presentation section, a section for the most viewed products, and a contact section, a products page, and a services page. You can view the source code of the project on my GitHub profile."]
    let info_2 = [
        "This project consisted of creating a search filter for Bis, a construction company. The main objective was to allow users to filter construction projects according to different options, which would enable them to efficiently find the projects that best fit their needs.",
        "The search filter includes various filtering options, such as project category, use, location, year of construction, and size in square meters. Additionally, it has been designed with an intuitive and user-friendly interface so that users can quickly find the projects they are looking for.",
        "This project has been of great importance to Bis, as it has improved the user experience on their website and made project searching easier. Furthermore, it has allowed the company to obtain valuable information about the projects that are most popular among users, which has helped them make more informed decisions about their business.",
        "In summary, this search filter project has been a success for Bis, a construction company, by improving the user experience and providing valuable information for decision-making.",
    ]
    const info_3 = [
        "Landing page for a construction tools and materials store, developed using HTML, CSS, JavaScript, and the React framework with Vite, featuring a simple design. The source code is available in the GitHub repository. The project includes sections for 'About Us', information about the main headquarters, and what the store offers to its customers."
    ]
    const info_4 = [
        "Realstar is a landing page project developed with HTML, CSS, JavaScript, and React library using Vite. The project's source code is available in the repository. It comprises sections such as 'Corporate Information', 'About Us', 'Mission Vision', programs, and a contact section. Explore Realstar for a comprehensive insight into our services and values."
    ]
    return(
        <>
            <NavBarComponent/>
            <Title title="Works"/>
            <Work 
                title="Landing page Ferroelectrics and Solutions Muñoz website"
                info={info_3}
                image={ferroelectricos_landing_page}
            />
            <Work 
                title="Ferroelectrics and Solutions Muñoz website"
                info={info_1}
                image={ferroelectricos}
            />
            <Work 
                title="Search filter for BIS company"
                info={info_2}
                image={bis}
            />
            <Work 
                title="Landing page corporación REALSTAR"
                info={info_4}
                image={realstar}
            />
        </>
    )
}
export {Works}