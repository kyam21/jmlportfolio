console.log("Portfolio loaded successfully.");


/* ========================================
   PROJECT DATA
======================================== */

const projects = {

    pawtect: {

        label: "FEATURED PROJECT · CAPSTONE",

        title: "PAWTECT",

        subtitle:
            "Community-Based Wireless Dog Detection and Alert System",

        description:
            "A community-based dog detection and alert system designed to register local dogs and identify roaming registered or stray dogs using computer vision and wireless communication.",

        contribution:
            "Developed the system components involving the web application, database management, computer vision workflow, and system integration.",

        technologies: [
            "Python",
            "Flask",
            "SQL",
            "API",
            "Raspberry Pi",
            "Computer Vision",
            "LoRa",
            "Telegram"
        ],

        images: [
            "assets/projects/pawtect/dashboard.jpg",
            "assets/projects/pawtect/register.png",
            "assets/projects/pawtect/hardware.jfif",
            "assets/projects/pawtect/conceptual.jpg"
        ], 

        resources: [
            {
                icon: "📄",
                title: "Project Paper",
                url: "assets/projects/pawtect/pawtect-manuscript.pdf"
            },
            {
                icon: "📄",
                title: "IMRAD",
                url: "assets/projects/pawtect/imrad.pdf"
            },
            {
                icon: "📄",
                title: "User Manual",
                url: "assets/projects/pawtect/user-manual.pdf"
            }
        ]

    },


    "smart-safety-bag": {

        label: "ACADEMIC PROJECT",

        title: "Smart Reflective Safety Bag",

        subtitle:
            "Smart wearable safety system for cyclists",

        description:
            "A wearable cyclist safety system designed to improve visibility using automated light indicators, ambient-light detection, and braking detection.",

        contribution:
            "Worked on the development and integration of the embedded system components and supporting hardware.",

        technologies: [
            "ESP32",
            "MPU6050",
            "LDR",
            "BLE",
            "ESP-NOW"
        ],

        images: [
            "assets/projects/smart-safety-bag/main.jpg"
        ],

        resources: [
            {
                icon: "↗",
                title: "View Project / Publication",
                url: "https://rsisinternational.org/journals/ijriss/view/enhancing-cyclist-visibility-using-a-smart-reflective-safety-bag-with-automated-light-indicators"
            }
        ]

    },


    "item-tracker": {

        label:
            "INTERNSHIP · QUIKZLE MARKETING CORP.",

        title: "Item Tracker",

        subtitle:
            "Web-based item tracking and management system",

        description:
            "A web-based item tracking and management system developed during my IT internship.",

        contribution:
            "Developed and deployed the Item Tracker as part of my IT internship work.",

        technologies: [
            "Python",
            "Flask",
            "SQL"
        ],

        images: [
            "assets/projects/item-tracker/main.jpg"
        ],

        resources: []

    },


    "leave-system": {

        label:
            "INTERNSHIP · QUIKZLE MARKETING CORP.",

        title: "Leave System Management",

        subtitle:
            "Web-based employee leave management system",

        description:
            "A web-based system developed during my IT internship to support employee leave management and record keeping.",

        contribution:
            "Developed and deployed the Leave System Management application as part of my IT internship work.",

        technologies: [
            "Python",
            "Flask",
            "SQL"
        ],

        images: [
            "assets/projects/leave-system/main.jpg"
        ],

        resources: []

    },


    "barangay-census": {

        label: "ACADEMIC PROJECT",

        title: "Barangay Population Census System",

        subtitle:
            "Population and household information system",

        description:
            "A population census system developed to organize resident and household information.",

        contribution:
            "Developed the system as an academic software project.",

        technologies: [
            "Python",
            "SQL",
            "Database"
        ],

        images: [
            "assets/projects/barangay-census/main.png"
        ],

        resources: []

    },


    "smart-touch-mouse": {

        label: "ACADEMIC PROJECT",

        title: "Smart Touch Mouse",

        subtitle:
            "Custom touchpad-based human interface device",

        description:
            "A custom mouse prototype integrating a laptop touchpad to support touch and gesture-based interaction.",

        contribution:
            "Worked on the hardware integration and implementation of the touchpad-based interaction system.",

        technologies: [
            "Arduino",
            "Touchpad",
            "HID",
            "Embedded Systems"
        ],

        images: [
            "assets/projects/smart-touch-mouse/main.jpg"
        ],

        resources: [
            {
                icon: "📄",
                title: "Technical Paper",
                url: "assets/projects/smart-touch-mouse/smart-touch-mouse.pdf"
            }
        ]

    },


    "air-cooling": {

        label: "ACADEMIC PROJECT",

        title: "Automatic Air Cooling System",

        subtitle:
            "Automated temperature and humidity monitoring system",

        description:
            "An automated temperature and humidity monitoring and cooling system using sensors and threshold-based control.",

        contribution:
            "Developed the embedded system and implemented sensor-based control logic.",

        technologies: [
            "Arduino Nano",
            "DHT11",
            "LCD",
            "Embedded Systems"
        ],

        images: [],

        resources: [
            {
                icon: "📄",
                title: "Technical Paper",
                url: "assets/projects/automatic-air-cooling/air-cooling-system.pdf"
            }
        ]

    }

};


/* ========================================
   DOM ELEMENTS
======================================== */

const projectModal =
    document.getElementById("project-modal");

const modalClose =
    document.getElementById("modal-close");

const modalTitle =
    document.getElementById("modal-title");

const modalLabel =
    document.getElementById("modal-label");

const modalSubtitle =
    document.getElementById("modal-subtitle");

const modalDescription =
    document.getElementById("modal-description");

const modalContribution =
    document.getElementById("modal-contribution");

const modalGallery =
    document.getElementById("modal-gallery");

const modalTechnologies =
    document.getElementById("modal-technologies");

const modalResources =
    document.getElementById("modal-resources");

const modalResourcesSection =
    document.getElementById("modal-resources-section");

const modalContributionSection =
    document.getElementById("modal-contribution-section");


/* ========================================
   CHECK MODAL
======================================== */

if (!projectModal) {

    console.error(
        "ERROR: #project-modal was not found in index.html."
    );

}

if (!modalClose) {

    console.error(
        "ERROR: #modal-close was not found in index.html."
    );
}


/* ========================================
   OPEN PROJECT
======================================== */

function openProject(projectId) {

    console.log(
        "Opening project:",
        projectId
    );

    const project =
        projects[projectId];

    if (!project) {

        console.error(
            "Project not found:",
            projectId
        );

        return;
    }


    /* ------------------------------------
       HEADER
    ------------------------------------ */

    if (modalLabel) {

        modalLabel.textContent =
            project.label;

    }

    if (modalTitle) {

        modalTitle.textContent =
            project.title;

    }

    if (modalSubtitle) {

        modalSubtitle.textContent =
            project.subtitle;

    }


    /* ------------------------------------
       DESCRIPTION
    ------------------------------------ */

    if (modalDescription) {

        modalDescription.textContent =
            project.description;

    }


    /* ------------------------------------
       CONTRIBUTION
    ------------------------------------ */

    if (
        modalContribution &&
        modalContributionSection
    ) {

        if (project.contribution) {

            modalContribution.textContent =
                project.contribution;

            modalContributionSection.style.display =
                "block";

        } else {

            modalContributionSection.style.display =
                "none";

        }

    }


    /* ------------------------------------
       TECHNOLOGIES
    ------------------------------------ */

    if (modalTechnologies) {

        modalTechnologies.innerHTML = "";

        project.technologies.forEach(
            technology => {

                const tag =
                    document.createElement("span");

                tag.textContent =
                    technology;

                modalTechnologies.appendChild(
                    tag
                );

            }
        );

    }


    /* ------------------------------------
       GALLERY
    ------------------------------------ */

    if (modalGallery) {

        modalGallery.innerHTML = "";

        project.images.forEach(
            image => {

                const img =
                    document.createElement("img");

                img.src = image;

                img.alt =
                    project.title;

                img.loading = "lazy";

                modalGallery.appendChild(
                    img
                );

            }
        );

    }


    /* ------------------------------------
       RESOURCES
    ------------------------------------ */

    if (
        modalResources &&
        modalResourcesSection
    ) {

        modalResources.innerHTML = "";

        if (
            project.resources &&
            project.resources.length > 0
        ) {

            modalResourcesSection.style.display =
                "block";


            project.resources.forEach(
                resource => {

                    const link =
                        document.createElement("a");

                    link.href =
                        resource.url;

                    link.target =
                        "_blank";

                    link.rel =
                        "noopener noreferrer";

                    link.className =
                        "resource-link";


                    link.innerHTML = `
                        <span>${resource.icon}</span>
                        <span>${resource.title}</span>
                        <span class="resource-arrow">↗</span>
                    `;


                    modalResources.appendChild(
                        link
                    );

                }
            );

        } else {

            modalResourcesSection.style.display =
                "none";

        }

    }


    /* ------------------------------------
       SHOW MODAL
    ------------------------------------ */

    if (projectModal) {

        projectModal.classList.add(
            "active"
        );

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    }

}


/* ========================================
   CLOSE PROJECT
======================================== */

function closeProject() {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove(
        "active"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* ========================================
   PROJECT BUTTONS
======================================== */

const projectButtons =
    document.querySelectorAll(
        "[data-project]"
    );

console.log(
    "Project buttons found:",
    projectButtons.length
);


projectButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const projectId =
                    button.getAttribute(
                        "data-project"
                    );

                console.log(
                    "Project button clicked:",
                    projectId
                );

                openProject(
                    projectId
                );

            }
        );

    }
);


/* ========================================
   CLOSE BUTTON
======================================== */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProject
    );

}


/* ========================================
   CLICK OUTSIDE MODAL
======================================== */

if (projectModal) {

    const overlay =
        projectModal.querySelector(
            ".project-modal-overlay"
        );

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeProject
        );

    }

}


/* ========================================
   ESCAPE KEY
======================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.classList.contains(
                "active"
            )
        ) {

            closeProject();

        }

    }
);