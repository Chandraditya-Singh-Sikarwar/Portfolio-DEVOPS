document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const navButtons = document.createElement('div');
    navButtons.className = 'nav-buttons';

    slides.forEach((slide, index) => {
        const button = document.createElement('button');
        button.textContent = `Slide ${index + 1}`;
        button.className = 'nav-button';
        button.onclick = () => showSlide(index);
        navButtons.appendChild(button);
    });

    document.body.insertBefore(navButtons, main);

    let currentSlide = 0;
    showSlide(currentSlide);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
        currentSlide = index;
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.className = 'next-button';
    nextButton.onclick = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };
    document.body.appendChild(nextButton);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.className = 'prev-button';
    prevButton.onclick = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };
    document.body.appendChild(prevButton);

    // Styles for navigation buttons
    const buttonStyle = `
        .nav-buttons {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }
        .nav-button, .next-button, .prev-button {
            background-color: #007ACC;
            color: #FFFFFF;
            border: none;
            padding: 10px 15px;
            margin: 0 5px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .nav-button:hover, .next-button:hover, .prev-button:hover {
            background-color: #005F99;
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = buttonStyle;
    document.head.appendChild(styleSheet);
});
