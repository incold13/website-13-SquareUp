const processData = [
    {
        id: "01",
        title: "Discovery",
        desc: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."
    },
    {
        id: "02",
        title: "Planning and Strategy",
        desc: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision."
    },
    {
        id: "03",
        title: "Design",
        desc: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel."
    },
    {
        id: "04",
        title: "Development",
        desc: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns."
    },
    {
        id: "05",
        title: "Testing and Quality Assurance",
        desc: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability."
    },
    {
        id: "06",
        title: "Deployment and Launch",
        desc: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations."
    },
    {
        id: "07",
        title: "Post-Launch Support",
        desc: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support."
    },
    {
        id: "08",
        title: "Continuous Improvement",
        desc: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve."
    }
];

const processContainer = document.getElementById('process_grid_container');

processContainer.innerHTML = processData.map(item => `
    <div class="process_item">
        <div class="inner_wrapper">
            
            <div class="top_row">
                <span class="step_number">${item.id}</span>
                <div class="spacer_x_large"></div> <h3 class="step_title">${item.title}</h3>
            </div>
            
            <div class="divider_line"></div>
            
            <div class="bottom_row">
                <p class="step_desc">${item.desc}</p>
            </div>
            
        </div>
    </div>
`).join('');