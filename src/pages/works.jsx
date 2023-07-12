import React from 'react';
import { NavBarComponent } from '../components/nav-bar/navBar';
import { Title } from '../components/title/title';
import { Work } from '../components/work/work';

function Works(){
    let info_1 = ["This project is a website for a tools and construction materials store, developed using the technologies of HTML, CSS, and JavaScript. The site includes a homepage consisting of a presentation section, a section for the most viewed products, and a contact section, a products page, and a services page. You can view the source code of the project on my GitHub profile."]
    let info_2 = [
        "This project consisted of creating a search filter for Bis, a construction company. The main objective was to allow users to filter construction projects according to different options, which would enable them to efficiently find the projects that best fit their needs.",
        "The search filter includes various filtering options, such as project category, use, location, year of construction, and size in square meters. Additionally, it has been designed with an intuitive and user-friendly interface so that users can quickly find the projects they are looking for.",
        "This project has been of great importance to Bis, as it has improved the user experience on their website and made project searching easier. Furthermore, it has allowed the company to obtain valuable information about the projects that are most popular among users, which has helped them make more informed decisions about their business.",
        "In summary, this search filter project has been a success for Bis, a construction company, by improving the user experience and providing valuable information for decision-making.",
    ]
    return(
        <>
            <NavBarComponent/>
            <Title title="Works"/>
            <Work 
                title="Ferroelectrics and Solutions Muñoz website"
                info={info_1}
                image="/src/assets/ferroelectricos.png"
            />
            <Work 
                title="Search filter for BIS company"
                info={info_2}
                image="/src/assets/BIS.jpg"
            />
        </>
    )
}
export {Works}