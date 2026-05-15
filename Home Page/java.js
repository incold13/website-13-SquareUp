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
                <div class="user_info_all">
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
    </div>
`).join('');


const faqData = [
    { id: "01", q: "What services does SquareUp provide?", a: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
    { id: "02", q: "How can SquareUp help my business?", a: "We provide tailored digital solutions that streamline your operations, enhance customer engagement, and build a strong online presence to drive your revenue growth." },
    { id: "03", q: "What industries does SquareUp work with?", a: "We work with a diverse range of industries including healthcare, finance, e-commerce, real estate, and education, adapting our expertise to your specific needs." },
    { id: "04", q: "How long does it take to complete a project with SquareUp?", a: "Project timelines vary depending on complexity, but a standard web application usually takes between 3 to 6 months from initial discovery to final launch." },
    { id: "05", q: "Do you offer ongoing support and maintenance after the project is completed?", a: "Yes, we offer comprehensive maintenance packages to ensure your software remains secure, up-to-date, and fully functional after launch." },
    { id: "06", q: "Can you work with existing design or development frameworks?", a: "Absolutely. Our team is highly adaptable and can seamlessly integrate with your existing codebase, design systems, and preferred tech stacks." },
    { id: "07", q: "How involved will I be in the project development process?", a: "You will be highly involved. We use agile methodologies, providing regular updates, sprint reviews, and continuous communication to ensure alignment." },
    { id: "08", q: "Can you help with website or app maintenance and updates?", a: "Yes, our dedicated support team can handle routine updates, feature additions, and performance optimization for your existing platforms." }
];

const leftData = faqData.slice(0, 4);
const rightData = faqData.slice(4, 8);

const generateCard = (item) => `
    <div class="faq_card">
        <div class="card_header">
            <div class="num_box">${item.id}</div>
            <p class="question_text">${item.q}</p>
            <div class="icon_box">+</div>
        </div>
        <div class="card_body">
            <div class="answer_wrapper">
                <p class="answer_text">${item.a}</p>
                <div class="spacer"></div> 
            </div>
        </div>
    </div>
`;

document.getElementById('col_left').innerHTML = leftData.map(generateCard).join('');
document.getElementById('col_right').innerHTML = rightData.map(generateCard).join('');

document.querySelectorAll('.faq_card').forEach(card => {
    const header = card.querySelector('.card_header');
    
    header.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

document.querySelector('.faq_card').classList.add('active');

// --- ЛОГИКА ПОЛЗУНКА (Range Slider) ---
const track = document.getElementById('slider_track');
const fill = document.getElementById('slider_fill');
const thumb1 = document.getElementById('thumb1');
const thumb2 = document.getElementById('thumb2');
const val1 = document.getElementById('val1');
const val2 = document.getElementById('val2');

let minVal = 10; // %
let maxVal = 50; // %

function updateSlider() {
    if (minVal > maxVal - 5) minVal = maxVal - 5;
    if (maxVal < minVal + 5) maxVal = minVal + 5;

    thumb1.style.left = `${minVal}%`;
    thumb2.style.left = `${maxVal}%`;
    
    fill.style.left = `${minVal}%`;
    fill.style.width = `${maxVal - minVal}%`;

    val1.innerText = `$${Math.round(minVal * 100)}`;
    val2.innerText = `$${Math.round(maxVal * 100)}`;
    
    val1.style.left = `${minVal}%`;
    val2.style.left = `${maxVal}%`;
}

function makeDraggable(thumb, isMin) {
    let isDragging = false;
    thumb.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let rect = track.getBoundingClientRect();
        let percent = ((e.clientX - rect.left) / rect.width) * 100;
        if (percent < 0) percent = 0;
        if (percent > 100) percent = 100;
        
        if (isMin) minVal = percent;
        else maxVal = percent;
        updateSlider();
    });
}

makeDraggable(thumb1, true);
makeDraggable(thumb2, false);
updateSlider();

// --- ЛОГИКА КНОПКИ SUBMIT ---
const submitButton = document.getElementById('submit_button');
submitButton.addEventListener('click', () => {
    alert("Данные успешно отправлены!");
});