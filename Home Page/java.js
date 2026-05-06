const clientsData = [
    {
        title: "SquareUp has been Instrumental in Transforming our Online Presence.",
        text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        img: "./assets/Profile.svg",
        name: "John Smith",
        role: "CEO of Chic Boutique"
    },
    {
        title: "Working with SquareUp was a breeze.",
        text: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
        img: "./assets/Profile (1).svg",
        name: "Sarah Johnson",
        role: "Founder of HungryBites."
    },
    {
        title: "SquareUp developed a comprehensive booking and reservation system for our event management company",
        text: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
        img: "./assets/Profile (2).svg",
        name: "Mark Thompson",
        role: "CEO of EventMasters"
    },
    {
        title: "ProTech Solutions turned to SquareUp to automate our workflow",
        text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
        img: "./assets/Profile (3).svg",
        name: "Laura Adams",
        role: "COO of ProTech Solutions."
    },
    {
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        img: "./assets/Profile (4).svg",
        name: "Michael Anderson",
        role: "Founder of Dream Homes Realty."
    },
    {
        title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        text: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        img: "./assets/Profile (5).svg",
        name: "Emily Turner",
        role: "CEO of FitLife Tracker"
    }
];

const container = document.getElementById('testimonials_container');

container.innerHTML = clientsData.map(item => `
    <div class="testi_card">
        <div class="card_inner">
            <div class="text_block">
                <p class="testi_title">${item.title}</p>
                <p class="testi_text">${item.text}</p>
            </div>
            <div class="testi_footer">
                <div class="user_info">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="user_details">
                        <p class="user_name">${item.name}</p>
                        <p class="user_role">${item.role}</p>
                    </div>
                </div>
                <button class="open_btn">Open Website</button>
            </div>
        </div>
    </div>
`).join('');