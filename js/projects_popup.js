let popupIsOpen = window.location.hash !== "";
let scrollPosition = null;

let skills = {
    "webdev": ["HTML, CSS, JS", "/img/skills/html5.png"],
    "sass": ["Sass", "/img/skills/sass.svg"],
    "vuejs": ["Vue.js", "/img/skills/vuejs.png"],
    "nodejs": ["Node.js", "/img/skills/nodejs.png"],
    "python": ["Python", "/img/skills/python.png"],
    "mongodb": ["MongoDB", "/img/skills/mongodb.png"],
    "git": ["Git", "/img/skills/git.png"],
    "linux": ["Linux", "/img/skills/linux.png"],
    "sql": ["SQL", "/img/skills/sql.png"],
};

let projects = {
    "bact": {
        class: "bact",
        img: "/img/projects_bigger/bact.png",
        skills: ["mongodb", "nodejs| (ExpressJS)", "webdev| (Media Queries)", "python| (BeautifulSoup)"],
        title: "Bay Area COVID-19 Tracker",
        description: [
            "The Bay Area COVID-19 Tracker was a website I developed with my team at Nize Systems. It automatically scrapes county health offices and Google News to display the latest information about the pandemic's effects in the Bay Area. We used Python's ```requests_html``` and ```BeautifulSoup``` libraries to develop the web scraper. The backend is written in Node.js using ExpressJS, and the frontend uses standard HTML, CSS, and JS (our struggles with developing this project prompted me to learn Vue.js for our next project, ChoreDash). We used MongoDB as the database to store county data to display on our Trends page.",
            "Our work was later featured in various local news sources including KRON4, Pleasanton Patch, and Pleasanton Weekly.",
            "My primary contributions were in writing the ExpressJS backend code, designing and developing the Trends page, and making everything mobile-responsive. I also helped develop the Python web scraper.",
        ],
    },
    "jpl": {
        class: "jpl",
        img: "/img/self_portrait.jpg",
        skills: ["python| (Django)", "sql| (MySQL)", "webdev"],
        title: "NASA Jet Propulsion Lab Internship",
        description: [
            "At JPL, I completely revamped an internal lab inspection process to reduce auditor workload by 75%. After identifying flaws in the existing system, I outlined solutions and presented a proof-of-concept for each; finally, I developed a fully-fledged web application to address each concern, automating menial tasks and eliminating redundant steps in the auditing process.",
        ],
    },
    "choredash": {
        class: "cd",
        img: "/img/projects_bigger/choredash.png",
        skills: ["vuejs", "webdev| (Axios, Google OAuth)", "python| (Falcon API)", "mongodb"],
        title: "ChoreDash",
        description: [
            "ChoreDash was another website I developed with my team at Nize Systems. We created it to help people at high risk from COVID-19 have their needs met by enlisting the help of volunteers offering their services. Those in need could create posts indicating which chores or errands they needed done, and volunteers would offer help directly through our platform. We wrote the backend in Python using the Falcon API framework, and we used Vue.js for the frontend.",
            "My primary contributions were in both the frontend and backend: implementing the various page components with Vue.js for the frontend, setting up Google authentication and using Axios to make the API calls to our backend, and implementing a few necessary API functions.",
        ]
    },
    "studioheartengine": {
        class: "she",
        img: "/img/projects_bigger/she.png",
        skills: ["webdev", "sass", "godot| (currently learning)"],
        title: "Studio Heart Engine",
        description: ["I'm the VP of Events at Studio Heart Engine, Foothill High School's largest game development club with over 40 members. Using the Godot Game Engine, we teach our club members the basics of storytelling, character and game design, music, and game development itself. Our goal is to have club members fully prepared to compete in a Game Jam at the end of the year, one that I'm responsible for planning and hosting.",
        "At the moment, the COVID-19 pandemic has negatively impacted many businesses, so I've put my event-planning and sponsorship-hunting to a halt. Instead, my primary contributions are in developing the club's official website."],
    },
    "gigahacks": {
        class: "gh",
        img: "/img/projects/gigahacks.jpg",
        skills: ["python", "webdev", "java"],
        title: "Gigahacks",
        description: ["I'm one of the lead organizers of Gigahacks, an annual hackathon with over 200 total attendees and 20 international participants. So far, we've held an in-person event in 2019 and a virtual event in 2020. At our events, we've run workshops in Python, Java (at an AP Computer Science level), web development, and machine learning.",
        "My primary contributions were in running the workshops and mentoring the attendees. More specifically, I ran the Java and web development workshops, and I helped various participants come up with ideas, implement them, and make their product as good as it could be."],
    },
    "falconhacks": {
        class: "fh",
        img: "/img/projects/falconhacks.png",
        skills: ["python", "webdev", "java"],
        title: "FalconHacks",
        description: ["I'm one of the lead organizers of FalconHacks, Foothill High School's largest local hackathon. At our virtual event in May 2020, we had over 45 participants. We've run workshops in Python, web development, app development (with Apache Cordova), and machine learning. We also started the FalconHacks Computing Contest, a challenge where contestants can solve computational problems modeled after the USA Computing Olympiad.",
        "My primary contributions were in writing problems for the Contest, running a web development workshop, and developing the hackathon's official website. This was actually my first major web development project; as such, though the website is functional, I have since learned much better practices than those I applied in that site."],
    },
    "trivalleycoderdojo": {
        class: "tvcd",
        img: "/img/projects/tvcd.png",
        skills: ["python", "webdev", "java"],
        title: "Tri-Valley Coder Dojo",
        description: ["Before the COVID-19 pandemic hit, I volunteered weekly as a programming mentor at the Tri-Valley Coder Dojo. The Coder Dojo is a weekly event where kids of all ages can come to work on their own projects and receive guidance from more experienced developers. I went there primarily to help kids with Python and web development, but I also started teaching myself Java to help the kids working on Java projects as well."]
    },
    "presence": {
        class: "pbn",
        img: "/img/projects/nize_presence.png",
        skills: ["python| (RC522, FastAPI)", "nodejs", "vuejs", "sass"],
        title: "Presence by Nize",
        description: ["Presence was the first attendance system I worked on with my startup, Nize Systems. Essentially, it's a small wall-mounted device with an embedded RC522 RFID scanner. Students will have RFID cards, stickers, or keychains with data such as their name and ID number written to them, and they can scan their card on the device to check into class. Our system includes features to handle signing out of class (for example, to use the restroom) and digitized passes for students that arrive to class late or need to be excused, and it's highly customizable to the needs of a school.",
        "My primary contribution was in developing the software that runs on our Presence devices. Originally, I taught myself Node.js and used that to develop the device GUI and a websocket to make it communicate with some Python card-scanning code. However, after running some benchmarks, I determined that Vue.js would be more efficient, so I switched to Vue.js and an API written with Python and FastAPI."]
    },
    "presenceremote": {
        class: "prbn",
        img: "/img/projects/nize_systems_llc.png",
        skills: ["python| (FastAPI)", "vuejs", "sass"],
        title: "Presence Remote by Nize",
        description: ["When the COVID-19 pandemic hit, in-person school became distance learning, and our in-class Presence devices were rendered useless. However, we noticed that teachers were still struggling with attendance, only this time it was through video calls. In order to alleviate that, we developed Presence Remote. When teachers create Zoom meetings through the Presence Remote dashboard, it access the Zoom APIs to monitor attendance automatically. On the Presence Remote dashboard, teachers can view live updates of students leaving and entering the meeting, making the attendance process a lot simpler.",
        "My primary contribution was in the front-end. Using Vue.js and Sass, a styling language I had only just begun to learn, a colleague and I developed the entire web dashboard and implemented the live Zoom attendance roster."]
    },
    "mafiabot": {
        class: "dmb",
        img: "/img/projects/mafiabot.png",
        skills: ["nodejs| (Discord.js)"],
        title: "Town of Mafiaville",
        description: ["Town of Mafiaville was a Discord bot that my friend and I created to manage instances of the party game Mafia. Using Discord.js, a popular and well-documented Node.js library to create Discord bots, we created a bot that assigns roles, manages communication permissions in the Discord server, and handles all the game's functions. I used Pixilart, a free online editor for pixel art graphics, to create all of the images displayed in the bot's messages.",
        "I primarily worked on setting up the general structure of the bot, implementing most of the game's roles, creating a last-will feature, and drawing all of the graphics involved. I also made minor contributions to the voting system and other miscellaneous features."],
    }
};

let currentHash = "";

let loadPopup = function () {
    // remove the # from the hash
    hash = window.location.hash.substring(1).toLowerCase();

    if (hash === "") {
        // if the hash is empty, exit popup
        currentHash = "";
        document.querySelector("header").classList.remove("darkened");
        document.querySelector("main").classList.remove("darkened");
        document.getElementById("popup-container").classList.add("hidden");
        popupIsOpen = false;
        return "Exited popup.";
    } else if (hash === currentHash) {
        // if the hash is the same as before, do nothing
        return "No change.";
    } else if (!Object.keys(projects).includes(hash)) {
        // if the hash isn't in my preset list, do nothing
        return "Hash doesn't exist.";
    }

    scrollPosition = window.scrollY;

    /* 
        set the heading in the popup to the title of the project
        change the background color by applying a class
    */
    let head = document.querySelector("#popup > div:first-child");
    head.classList.remove(...head.classList);
    head.classList.add(projects[hash].class);
    head.innerText = projects[hash].title;

    // set the image in the popup
    document.getElementById("popup-image").src = projects[hash].img;

    /*
        Delete all the P elements from this div
        then loop through my list and add a P element for each element in the list
    */
    let skillsDiv = document.getElementById("skills");
    // console.log(skillsDiv);
    document.querySelectorAll("#skills > p").forEach(el => el.remove());
    
    for (let i of projects[hash].skills) {
        let elTextList = i.split("|");
        // console.log(elTextList);

        let para = document.createElement("p");
        let img = document.createElement("img");

        img.src = skills[elTextList[0]][1];
        para.appendChild(img);
        let text = document.createTextNode(skills[elTextList[0]][0] + elTextList.slice(1).join("|"));
        para.appendChild(text);
        skillsDiv.appendChild(para);
    }
    
    /*
        delete the contents of the description
        then loop through a list of strings, perform some filters/changes on the text, and 
            add P elements with the text
    */
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

    // at the very end of my description DIV, add some text and a link if specified
    if (projects[hash].addLink) {
        let textContent = projects[hash].addLink[0];
        // console.log(textContent);
        let textToLink = textContent.match(/\[(.+)\]/);
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

    /* 
        add a class to make my header and main elements darker (using filter: brightness)
        remove a class to unhide the popup
        set the currentHash variable to hash so that it can do nothing if the hash doesn't change
    */
    document.querySelector("header").classList.add("darkened");
    document.querySelector("main").classList.add("darkened");
    document.getElementById("popup-container").classList.remove("hidden");
    currentHash = hash;
    popupIsOpen = true;
    return "Popup loaded successfully.";
}

window.onload = () => {
    if (window.location.hash !== "") {
        loadPopup();
    }
}

window.onhashchange = () => {
    loadPopup();
}

// hide the popup if they click outside of it
document.addEventListener("click", (event) => {
    let popup = document.getElementById("popup");
    let target = event.target;
    
    do {
        if (target == popup) {
            popupIsOpen = true;
            return;
        }
        target = target.parentNode;
    } while (target);
    
    if (popupIsOpen) {
        window.location.hash = "";
        window.scrollTo(0, scrollPosition);
        scrollPosition = null;
    }
});