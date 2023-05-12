const projectsSection = document.querySelector(".projects");
const interestsSection = document.querySelector(".interests");

const backendDiv = projectsSection.querySelector(".backend");
const frontendDiv = projectsSection.querySelector(".frontend");

const headers = document.getElementsByTagName("header");

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    const tags = header.getElementsByClassName("tag");
    const projectTag = tags[0];
    const interestsTag = tags[1];

    projectsSection.addEventListener("mouseenter", e => {
        projectTag.setAttribute("style", "display : block");
    });
    projectsSection.addEventListener("mouseleave", e => {
        projectTag.setAttribute("style", "display : none");
    });

    interestsSection.addEventListener("mouseenter", e => {
        interestsTag.setAttribute("style", "display : block");
    });
    interestsSection.addEventListener("mouseleave", e => {
        interestsTag.setAttribute("style", "display : none");
    });
}

function Project(link, imageUrl, title, description, skills, period) {
    this.link = link;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.period = period;
}

function addProject(project, targetContainer, imageSize, imagePosition) {
    let container;
    if (targetContainer === "backend") {
        container = backendDiv;
    }
    else {
        container = frontendDiv;
    }

    const article = document.createElement("article");
    const a = document.createElement("a");
    const projectImg = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("h6");
    const skills = document.createElement("div");
    const period = document.createElement("span");
    
    article.setAttribute("class", project.title);
    a.setAttribute("href", project.link);
    a.setAttribute("target", "_blank");
    projectImg.setAttribute("class", "project-img");
    projectImg.setAttribute("style", `background: no-repeat ${imagePosition} url('${project.imageUrl}'); background-size: ${imageSize}`);
    title.setAttribute("class", "title");
    title.innerText = project.title;
    description.className = "description";
    description.innerText = project.description;
    skills.setAttribute("class", "skills");
    period.className = "period";
    period.innerText = `${project.period[0]} ~ ${project.period[1]}`;

    a.append(projectImg);
    article.append(a);
    article.append(title);
    article.append(description);
    project.skills.forEach(str => {
        const skill = document.createElement("span");
        skill.innerText = str;
        skills.append(skill);
    });
    article.append(skills);
    article.append(period);

    container.append(article);
}

// Projects 
/*
const sample = new Project(
    "about:blank",
    "/resources/images/yao.gif",
    "sample",
    "sample sample",
    ['ReactJS','Typescript'],
    ['2023.03.09', "2023.04.30"]
);
addProject(sample, "frontend", "cover", "center");
*/

const icando = new Project(
    "http://icando.store",
    "/resources/images/icando.png",
    "Yes I can Do",
    "A site that matches users and agents to ask for work",
    ['KakaoPay api', 'firebase', 'MySQL', 'JPA','jQuery','Spring Boot','html','css', 'VanilaJS'],
    ['2023.04.23', "2023.05.15"]
);

addProject(icando, "frontend", "contain", "center");


const rentcarSystem = new Project(
    "https://github.com/Alxeoh/RentcarSystem.git",
    "/resources/images/rentcarService.png",
    "RentcarService",
    "Booking Rentcar, Select location and type detail",
    ['VanilaJS', 'Oracle', 'Java','html','css'],
    ['2023.03.13', "2023.03.13"]
);

addProject(rentcarSystem, "frontend", "contain", "center");


const shoppingmall = new Project(
    "https://github.com/Alxeoh/Shoppingmall_Memeber_Managerment.git",
    "/resources/images/shoppingMall.png",
    "ShoppingMall",
    "Management ShoppingMall User",
    ['Oracle', 'Java','html','css', 'js'],
    ['2023.04.01', "2023.04.01"]
);

addProject(shoppingmall, "frontend", "contain", "center");




const bookSearch = new Project(
    "/booksearch",
    "https://em-content.zobj.net/thumbs/240/facebook/65/left-pointing-magnifying-glass_1f50d.png",
    "Book Search",
    "Book Search and Inquiry Service",
    ['VanilaJS', 'jQeury', 'Kakao Search API'],
    ['2023.03.13', "2023.03.13"]
);

addProject(bookSearch, "frontend", "contain", "center");


const Omok = new Project(
    "/omok",
    "https://play-lh.googleusercontent.com/b3YbxE9rDerRe1mnJXcoy2RfppdVUKDkFR0rghzm0dBUETdGhzC5_Vh_DWMboFPC8w",
    "Omok Game",
    "Omok Game",
    ['VanilaJS', 'jQeury', 'Kakao Search API'],
    ['2023.03.16', "2023.03.18"]
);

addProject(Omok, "frontend", "contain", "center");


const PMS  = new Project(
    "http://parkingmanager.store",
    "/resources/images/PMS.png",
    "PMS주차예약매니저",
    "PMS(JSP project)",
    ['KakaoMap api','jsp', 'mySQL', 'css', 'html', 'js'],
    ['2023.04.12',"2023.04.21"]
);

addProject(PMS, "backend", "contain", "center");


const atm  = new Project(
    "https://github.com/Alxeoh/atm.git",
    "/resources/images/은행.jpeg",
    "Alex BANK",
    "Console ATM (Java mini project)",
    ['java'],
    ['2023..03.13',"2023.03.13"]
);

addProject(atm, "backend", "contain", "center");


const zombieGame  = new Project(
    "https://github.com/Alxeoh/Zombie_Game.git",
    "/resources/images/zombieGame.png",
    "Zombie minigame",
    "Console zombie (Java mini project)",
    ['java'],
    ['2023..03.25',"2023.03.29"]
);

addProject(zombieGame, "backend", "contain", "center");


const textRPG  = new Project(
    "https://github.com/Alxeoh/RPG-Game.git",
    "/resources/images/textRPG.png",
    "textRPG minigame",
    "Console RPG-GAME (Java mini project)",
    ['java'],
    ['2023.04.02.',"2023.04.06"]
);

addProject(textRPG, "backend", "contain", "center");
