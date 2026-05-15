const portfolioData = [
    {
        category: "E-Commerce Platform for Fashion Hub",
        title: "Chic Boutique",
        url: "https://www.chicboutique.com",
        description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
        imgPath: "./assets/Image.png"
    },
    {
        category: "Mobile App for Food Delivery Service",
        title: "HungryBites",
        url: "https://www.hungrybites.com",
        description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
        imgPath: "./assets/Image-1.png"
    },
    {
        category: "Booking and Reservation System for Event Management",
        title: "EventMasters",
        url: "https://www.eventmasters.com",
        description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
        imgPath: "./assets/Image-2.png"
    },
    {
        category: "Custom Software for Workflow Automation",
        title: "ProTech Solutions",
        url: "https://www.protechsolutions.com",
        description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
        imgPath: "./assets/Image-3.png"
    },
    {
        category: "Web Portal for Real Estate Listings",
        title: "Dream Homes Realty",
        url: "https://www.dreamhomesrealty.com",
        description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
        imgPath: "./assets/Image-4.png"
    },
    {
        category: "Mobile App for Fitness Tracking",
        title: "FitLife Tracker",
        url: "https://www.fitlifetracker.com",
        description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
        imgPath: "./assets/Image-5.png"
    },
    {
        category: "Custom Software for Supply Chain Management",
        title: "Global Logistics Solutions",
        url: "https://www.globallogisticssolutions.com",
        description: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
        imgPath: "./assets/Image-6.png"
    },
    {
        category: "Educational Platform for Online Learning",
        title: "EduConnect",
        url: "https://www.educonnect.com",
        description: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
        imgPath: "./assets/Image-7.png"
    },
    {
        category: "Mobile App for Travel Planning",
        title: "WanderWise",
        url: "https://www.wanderwise.com",
        description: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
        imgPath: "./assets/Image-8.png"
    },
    {
        category: "Web Application for Customer Relationship Management",
        title: "ConnectCRM",
        url: "https://www.connectcrm.com",
        description: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
        imgPath: "./assets/Image-9.png"
    }
];

const portfolioContainer = document.getElementById('portfolio_grid_container');

portfolioContainer.innerHTML = portfolioData.map(item => `
    <div class="portfolio_item">
        <div class="inner_wrapper">
            <div class="category_header">
                <p>${item.category}</p>
            </div>
            
            <div class="image_box">
                <img src="${item.imgPath}" alt="${item.title}" class="project_image" style="${item.imgPath ? 'display: block;' : 'display: none;'}">
            </div>
            
            <div class="info_box">
                <div class="title_row">
                    <h3 class="project_title">${item.title}</h3>
                    <a href="${item.url}" class="arrow_btn">↗</a>
                </div>
                
                <div class="url_box">
                    <div class="spacer_x"></div> <span class="url_text">${item.url}</span>
                    <div class="spacer_x"></div>
                </div>
                
                <p class="desc_text">${item.description}</p>
            </div>
        </div>
    </div>
`).join('');