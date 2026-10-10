import "../css/home-page.css";
import aestheticambience from "../assests/images/aestheticambience.jpeg";
import goodservice from "../assests/images/goodservice.png";
import qualityfood from "../assests/images/qualityfood.jpeg";

function renderHomePage () {
    const content = document.querySelector("#content");

    const aboutVisionSection = document.createElement('div');
    aboutVisionSection.classList.add("about-vision-section");

    const aboutVision = document.createElement('div');
    aboutVision.classList.add('about-vision');

    const visionHeader = document.createElement('h1');
    visionHeader.textContent = 'ABOUT OUT VISION';
    const visionPara = document.createElement('p');
    visionPara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ratione deserunt veritatis recusandae, eos omnis libero sapiente! Placeat eos dicta fugit odit sequi reprehenderit ex? At iusto commodi totam praesentium modi quis possimus ea nisi qui ullam quisquam, eveniet deleniti in molestias assumenda ducimus atque esse sint similique facilis voluptates aspernatur harum! Dolor exercitationem non ullam, velit animi modi voluptatibus ipsum similique saepe iste cumque doloribus nulla perspiciatis dignissimos aspernatur, voluptas, aut expedita inventore dicta ea voluptatum nesciunt fuga deleniti! Esse commodi velit vero beatae nihil libero reprehenderit laudantium doloremque magnam quidem deserunt repellat eius amet assumenda perferendis, quod veritatis!';
    aboutVision.appendChild(visionHeader);
    aboutVision.appendChild(visionPara);
    aboutVisionSection.appendChild(aboutVision);
    content.appendChild(aboutVisionSection);

    const aboutExperienceSection = document.createElement('div');
    aboutExperienceSection.classList.add('about-experience-section');

    const experienceHeader = document.createElement('h1');
    experienceHeader.textContent = 'DINING EXPERIENCE';
    aboutExperienceSection.appendChild(experienceHeader);

    const experienceCardContainer = document.createElement('div');
    experienceCardContainer.classList.add('experience-card-container');

    const qualityFoodCard = document.createElement('div');
    qualityFoodCard.classList.add('experience-card');
    const qualityFoodImg = document.createElement('img');
    qualityFoodImg.src = qualityfood;
    const qualityFoodHeader = document.createElement('h1');
    qualityFoodHeader.textContent = 'Good Quality Food';
    const qualityFoodPara = document.createElement('p');
    qualityFoodPara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odit. Laudantium recusandae qui culpa quis, nihil assumenda incidunt deleniti minima.';
    qualityFoodCard.appendChild(qualityFoodImg);
    qualityFoodCard.appendChild(qualityFoodHeader);
    qualityFoodCard.appendChild(qualityFoodPara);
    experienceCardContainer.appendChild(qualityFoodCard);

    const goodServiceCard = document.createElement('div');
    goodServiceCard.classList.add('experience-card');
    const goodServiceImg = document.createElement('img');
    goodServiceImg.src = goodservice;
    const goodServiceHeader = document.createElement('h1');
    goodServiceHeader.textContent = 'Good Service';
    const goodServicePara = document.createElement('p');
    goodServicePara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odit. Laudantium recusandae qui culpa quis, nihil assumenda incidunt deleniti minima.';
    goodServiceCard.appendChild(goodServiceImg);
    goodServiceCard.appendChild(goodServiceHeader);
    goodServiceCard.appendChild(goodServicePara);
    experienceCardContainer.appendChild(goodServiceCard);

    const aestheticAmbienceCard = document.createElement('div');
    aestheticAmbienceCard.classList.add('experience-card');
    const aestheticAmbienceImg = document.createElement('img');
    aestheticAmbienceImg.src = aestheticambience;
    const aestheticAmbienceHeader = document.createElement('h1');
    aestheticAmbienceHeader.textContent = 'Good Ambience';
    const aestheticAmbiencePara = document.createElement('p');
    aestheticAmbiencePara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odit. Laudantium recusandae qui culpa quis, nihil assumenda incidunt deleniti minima.';
    aestheticAmbienceCard.appendChild(aestheticAmbienceImg);
    aestheticAmbienceCard.appendChild(aestheticAmbienceHeader);
    aestheticAmbienceCard.appendChild(aestheticAmbiencePara);
    experienceCardContainer.appendChild(aestheticAmbienceCard);

    aboutExperienceSection.appendChild(experienceCardContainer);
    content.appendChild(aboutExperienceSection);
}

export {renderHomePage};