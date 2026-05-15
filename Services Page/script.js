const allServicesData = [
    {
        title: "Design",
        description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        badge: "Our design services include:",
        categories: [
            {
                categoryTitle: "User Experience (UX) Design",
                cards: [
                    { icon: "./assets/Icon1.svg", text: "User Research and Persona Development" },
                    { icon: "./assets/Icon2.svg", text: "Information Architecture and Wireframing" },
                    { icon: "./assets/Icon3.svg", text: "Interactive Prototyping and User Testing" },
                    { icon: "./assets/Icon4.svg", text: "UI Design and Visual Branding" }
                ]
            },
            {
                categoryTitle: "User Interface (UI) Design",
                cards: [
                    { icon: "./assets/Icon5.svg", text: "Intuitive and Visually Appealing Interface Design" },
                    { icon: "./assets/Icon6.svg", text: "Custom Iconography and Illustration" },
                    { icon: "./assets/Icon7.svg", text: "Typography and Color Palette Selection" },
                    { icon: "./assets/Icon8.svg", text: "Responsive Design for Various Devices" }
                ]
            },
            {
                categoryTitle: "Branding and Identity",
                cards: [
                    { icon: "./assets/Icon9.svg", text: "Logo Design and Visual Identity Development" },
                    { icon: "./assets/Icon10.svg", text: "Brand Strategy and Positioning" },
                    { icon: "./assets/Icon11.svg", text: "Brand Guidelines and Style Guides" },
                    { icon: "./assets/Icon12.svg", text: "Marketing Collateral Design (Brochures, Business Cards, etc.)" }
                ]
            }
        ]
    },

    {
        title: "Engineering",
        description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        badge: "Our engineering services include:",
        categories: [
            {
                categoryTitle: "Web Development",
                cards: [
                    { icon: "./assets/Icon.svg", text: "Front-End Development (HTML, CSS, JavaScript)" },
                    { icon: "./assets/Icon-1.svg",  text: "Back-End Development (PHP, Python, Ruby)" },
                    { icon: "./assets/Icon-2.svg",  text: "Content Management System (CMS) Development (WordPress, Drupal)" },
                    { icon: "./assets/Icon-3.svg",  text: "E-Commerce Platform Development (Magento, Shopify)" }
                ]
            },
            {
                categoryTitle: "Mobile App Development",
                cards: [
                    { icon: "./assets/Icon-4.svg", text: "Native iOS and Android App Development" },
                    { icon: "./assets/Icon-5.svg", text: "Cross-Platform App Development (React Native, Flutter)" },
                    { icon: "./assets/Icon-6.svg", text: "App Prototyping and UI/UX Design Integration" },
                    { icon: "./assets/Icon-7.svg", text: "App Testing, Deployment, and Maintenance" }
                ]
            },
            {
                categoryTitle: "Custom Software Development",
                cards: [
                    { icon: "./assets/Icon-8.svg", text: "Enterprise Software Development" },
                    { icon: "./assets/Icon-9.svg", text: "Custom Web Application Development" },
                    { icon: "./assets/Icon-10.svg", text: "Integration with Third-Party APIs and Systems" },
                    { icon: "./assets/Icon-11.svg", text: "Legacy System Modernization and Migration" }
                ]
            }
        ]
    },

    {
        title: "Project Management",
        description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        badge: "Our project management services include:",
        categories: [
            {
                categoryTitle: "Project Planning and Scoping",
                cards: [
                    { icon: "./assets/Icon-12.svg", text: "Requirements Gathering and Analysis" },
                    { icon: "./assets/Icon-13.svg", text: "Project Roadmap and Timeline Development" },
                    { icon: "./assets/Icon-14.svg", text: "Resource Allocation and Task Assignment" },
                    { icon: "./assets/Icon-15.svg", text: "Risk Assessment and Mitigation Strategies" }
                ]
            },
            {
                categoryTitle: "Agile Development",
                cards: [
                    { icon: "./assets/Icon-16.svg", text: "Iterative Development and Sprints" },
                    { icon: "./assets/Icon-17.svg", text: "Scrum or Kanban Methodology Implementation" },
                    { icon: "./assets/Icon-18.svg", text: "Regular Progress Updates and Demos" },
                    { icon: "./assets/Icon-19.svg", text: "Continuous Improvement and Feedback Incorporation" }
                ]
            },
            {
                categoryTitle: "Quality Assurance and Testing",
                cards: [
                    { icon: "./assets/Icon-20.svg", text: "Test Planning and Execution" },
                    { icon: "./assets/Icon-21.svg", text: "Functional and Usability Testing" },
                    { icon: "./assets/Icon-22.svg", text: "Performance and Security Testing" },
                    { icon: "./assets/Icon-23.svg", text: "Bug Tracking and Issue Resolution" }
                ]
            }
        ]
    }
];

const mainContainer = document.getElementById('all_services_container');

mainContainer.innerHTML = allServicesData.map(section => `
    <div class="service_section_wrapper">
        <div class="service_section">
            <div class="section_header">
                <h2 class="title">${section.title}</h2>
                <p class="description">${section.description}</p>
                <div class="badge">
                    <span>${section.badge}</span>
                </div>
            </div>

            <div class="categories_container">
                ${section.categories.map(category => `
                    <div class="category_row">
                        <h3 class="category_title">${category.categoryTitle}</h3>
                        <div class="cards_grid">
                            ${category.cards.map(card => `
                                <div class="service_card">
                                    <div class="icon_box">
                                        <img class="emoji" src = "${card.icon}">
                                    </div>
                                    <p class="card_text">${card.text}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
`).join('');