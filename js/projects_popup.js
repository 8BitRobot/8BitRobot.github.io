let skills = {
    "webdev": ["HTML, CSS, JS", "/img/skills/html5.png"],
    "sass": ["Sass", "/img/skills/sass.svg"],
    "vuejs": ["Vue.js", "/img/skills/vuejs.png"],
    "nodejs": ["Node.js", "/img/skills/nodejs.png"],
    "python": ["Python", "/img/skills/python.png"],
    "mongodb": ["MongoDB", "/img/skills/mongodb.png"],
    "git": ["Git", "/img/skills/git.png"],
    "godot": ["Godot", "/img/skills/godot.png"],
};


let projects = {
    "bact": {
        class: "bact",
        img: "/img/projects_bigger/bact.png",
        skillsAcquired: ["mongodb"],
        skillsRefined: ["nodejs| (ExpressJS)", "webdev", "python| (BeautifulSoup)"],
        title: "Bay Area COVID-19 Tracker",
        description: [
            "The Bay Area COVID-19 Tracker was a website I developed with my team at Nize Systems. It automatically scrapes county health offices and Google News to display the latest information about the pandemic's effects in the Bay Area. We used Python's ```requests_html``` and ```BeautifulSoup``` libraries to develop the web scraper. The backend is written in Node.js using ExpressJS, and the frontend uses standard HTML, CSS, and JS (our struggles with developing this project prompted me to learn Vue.js for our next project, ChoreDash). We used MongoDB as the database to store county data to display on our Trends page.",
            "Our work was later featured in various local news sources including KRON4, Pleasanton Patch, and Pleasanton Weekly.",
            "My primary contributions were in writing the ExpressJS backend code, designing and developing the Trends page, and making everything mobile-responsive. I also helped develop the Python web scraper.",
        ],
        addLink: ["You can visit the site [here].", "https://bact.nizesystems.com"]
    },
    "choredash": {
        class: "cd",
        img: "/img/projects_bigger/choredash.png",
        skillsAcquired: ["vuejs"],
        skillsRefined: ["webdev| (Axios, Google OAuth)", "python| (Falcon API)"],
        title: "ChoreDash",
        description: [
            "ChoreDash was another website I developed with my team at Nize Systems. We created it to help people at high risk from COVID-19 have their needs met by enlisting the help of volunteers offering their services. Those in need could create posts indicating which chores or errands they needed done, and volunteers would offer help directly through our platform. We wrote the backend in Python using the Falcon API framework, and we used Vue.js for the frontend.",
            "My primary contributions were in both the frontend and backend: implementing the various page components with Vue.js for the frontend, setting up Google authentication and using Axios to make the API calls to our backend, and implementing a few necessary API functions.",
            "Due to financial limitations, this site has been retired."
        ]
    },
    "studioheartengine": {
        class: "she",
        img: "/img/projects_bigger/she.png",
        skillsAcquired: ["godot| (IN PROGRESS)"],
        skillsRefined: ["webdev| (CSS Animations)"],
        title: "Studio Heart Engine",
        description: ["This is tomorrow's task."]
    }
};

let currentHash = "";

let loadPopup = function () {

    hash = window.location.hash.substring(1).toLowerCase();

    if (hash === "") {
        document.querySelector("header").classList.remove("darkened");
        document.querySelector("main").classList.remove("darkened");
        document.getElementById("popup-container").classList.add("hidden");
        return "Exited popup.";
    } else if (hash === currentHash) {
        return "No change.";
    } else if (!Object.keys(projects).includes(hash)) {
        return "Project doesn't exist.";
    }

    let head = document.querySelector("#popup > div:first-child");
    head.classList.remove(...head.classList);
    head.classList.add(projects[hash].class);
    head.innerText = projects[hash].title;

    document.getElementById("popup-image").src = projects[hash].img;

    let skillsAcquired = document.getElementById("acquired-skills");
    document.querySelectorAll("#acquired-skills > p").forEach(el => el.remove());
    
    for (let i of projects[hash].skillsAcquired) {
        let elTextList = i.split("|");

        let para = document.createElement("p");
        let img = document.createElement("img");

        img.src = skills[elTextList[0]][1];
        para.appendChild(img);
        let text = document.createTextNode(skills[elTextList[0]][0] + elTextList.slice(1).join("|"));
        para.appendChild(text);
        skillsAcquired.appendChild(para);
    }

    let skillsRefined = document.getElementById("refined-skills");
    document.querySelectorAll("#refined-skills > p").forEach(el => el.remove());

    for (let i of projects[hash].skillsRefined) {
        let elTextList = i.split("|");

        let para = document.createElement("p");
        let img = document.createElement("img");

        img.src = skills[elTextList[0]][1];
        para.appendChild(img);
        let text = document.createTextNode(skills[elTextList[0]][0] + elTextList.slice(1).join("|"));
        para.appendChild(text);
        skillsRefined.appendChild(para);
    }
    
    let description = document.querySelector("#popup > div:nth-child(3)");
    description.textContent = "";

    let isCode = false;
    for (let i of projects[hash].description) {
        let para = document.createElement("p");
        for (let j of i.split(/```/g)) {
            let text = document.createTextNode(j);
            if (isCode) {
                let el = document.createElement("code");
                el.appendChild(text);
                para.appendChild(el);
            } else {
                para.appendChild(text);
            }
            isCode = !isCode;
        }
        description.appendChild(para);
        isCode = false;
    }

    if (projects[hash].addLink) {
        let textContent = projects[hash].addLink[0];
        console.log(textContent);
        let textToLink = textContent.match(/\[([A-Za-z0-9 _-]+)\]/);
        let textAround = textContent.split(textToLink[0]);

        let para = document.createElement("p");
        let fText = document.createTextNode(textAround[0]);
        let sText = document.createTextNode(textAround[1]);
        let anchor = document.createElement("a");
        anchor.href = projects[hash].addLink[1];
        anchor.appendChild(document.createTextNode(textToLink[1]));

        para.appendChild(fText);
        para.appendChild(anchor);
        para.appendChild(sText);
        description.appendChild(para);
    }

    document.querySelector("header").classList.add("darkened");
    document.querySelector("main").classList.add("darkened");
    document.getElementById("popup-container").classList.remove("hidden");
    return "Popup loaded successfully.";
}

window.onload = () => {
    console.log(loadPopup());
}

window.onhashchange = () => {
    console.log(loadPopup());
}

document.addEventListener("click", (event) => {
    let popup = document.getElementById("popup");
    let target = event.target;
    
    do {
        if (target == popup) {
            return;
        }

        target = target.parentNode;
    } while (target);

    window.location.hash = "";
});