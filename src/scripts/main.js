// Swiper Slider
import './slider';

const navBar = document.querySelector('#navBar');
const socialIcons = document.querySelectorAll('[data-social]');
const countersContainer = document.querySelector('.counter');

// When Element position is Middle of the Screen this Function is call
const scrollAppear = (element, callback) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.9;

    if (elementPosition < screenPosition) {
        callback();
    }
};

export default scrollAppear;

// Change Navbar Color when Scroll
const changeNavColor = () => {
    const requireScreenSize = window.matchMedia('(min-width: 992px)');
    console.log(requireScreenSize);

    if (requireScreenSize.matches) {
        if (window.scrollY >= 80) {
            navBar.classList.add('navbar-change');
            navBar.classList.remove('pt-3');
        } else {
            navBar.classList.remove('navbar-change');
            navBar.classList.add('pt-3');
        }
    } else {
        navBar.classList.add('navbar-gray');
        navBar.classList.remove('pt-3');
    }
};

// Visual Effect Counter
const increaseCount = () => {
    const counters = document.querySelectorAll('.counter-value');
    const countSpeed = 300;

    counters.forEach((counter) => {
        const updateCounter = () => {
            const targetCount = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const incCount = targetCount / countSpeed;

            if (count < targetCount) {
                counter.innerText = Math.ceil(count + incCount);
                setTimeout(updateCounter, 10);
            }
        };

        updateCounter();
    });
};

// Click Visit Social Media
const visitSocial = () => {
    socialIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
            const url = `https://${icon.getAttribute('data-social')}.com`;
            window.open(url);
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    visitSocial();
});

window.addEventListener('scroll', () => {
    scrollAppear(countersContainer, () => increaseCount());
    changeNavColor();
});
