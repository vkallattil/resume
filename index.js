function handleAnchorClick(element) {
    if (element.isCollapsed) {
        element.section.setAttribute("class", "");
    } else {
        element.section.setAttribute("class", "collapsed");
    }

    element.isCollapsed = !element.isCollapsed;
}


const summary = {
    section: document.querySelector("#summary-section"),
    anchor: document.querySelector("#summary-anchor"),
    isCollapsed: false,
}

const experience = {
    section: document.querySelector("#experience-section"),
    anchor: document.querySelector("#experience-anchor"),
    isCollapsed: false,
}

const education = {
    section: document.querySelector("#education-section"),
    anchor: document.querySelector("#education-anchor"),
    isCollapsed: false,
}

const projects = {
    section: document.querySelector("#projects-section"),
    anchor: document.querySelector("#projects-anchor"),
    isCollapsed: false,
}

const details = {
    section: document.querySelector("#details-section"),
    anchor: document.querySelector("#details-anchor"),
    isCollapsed: false,
}

const links = {
    section: document.querySelector("#links-section"),
    anchor: document.querySelector("#links-anchor"),
    isCollapsed: false,
}

const skills = {
    section: document.querySelector("#skills-section"),
    anchor: document.querySelector("#skills-anchor"),
    isCollapsed: false,
}

summary.anchor.addEventListener("click", () => handleAnchorClick(summary));
experience.anchor.addEventListener("click", () => handleAnchorClick(experience));
education.anchor.addEventListener("click", () => handleAnchorClick(education));
projects.anchor.addEventListener("click", () => handleAnchorClick(projects));
details.anchor.addEventListener("click", () => handleAnchorClick(details));
links.anchor.addEventListener("click", () => handleAnchorClick(links));
skills.anchor.addEventListener("click", () => handleAnchorClick(skills));
