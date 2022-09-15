
let isOpen = false;
let isShown = false;
let activeDropdown = undefined;

const scaleElement = (element, scale, height) => {
    element.style.transform = `scaleY(${scale})`;
    element.style.maxHeight = height
}

const rotateZElemet = (element, angle) => {
    element.style.transform = `rotateZ(${angle}deg)`;
}

const toggleNavBar = (event) => {
    const target = event.target;
    const navBar = document.querySelector('.nav-bar');
    const body = document.querySelector("body")
    navBar.classList.add('animate');
    if (isShown) {

        scaleElement(navBar, 0, "");
        navBar.style.transform = "";
        target.src = "images/icon-hamburger.svg"
        body.style.overflow = "auto";
    } else {
        scaleElement(navBar, 1, "100%");
        target.src = "images/icon-close.svg"
        body.style.overflow = "hidden";
    }

    isShown = !isShown;

}

const closeActiveMenu = () => {
    if (activeDropdown !== undefined) {
        const { container, icon } = activeDropdown;
        scaleElement(container, 0, "");
        rotateZElemet(icon, 0);
        isOpen = false;
        activeDropdown = undefined;
    }
}


const toggleMenu = (event) => {
    const target = event.target;
    const parent = target.parentNode;
    const container = parent.querySelector('.dropdown-container');
    const menu = container.querySelector('.dropdown-menu');
    const icon = target.querySelector('.menu-icon');
    container.classList.add('animate');
    icon.classList.add('animate');
    if (isOpen) {
        // parent.classList.remove('mb--3');
        scaleElement(container, 0, "");
        rotateZElemet(icon, 0);

    } else {
        // parent.classList.add('mb--3');
        scaleElement(container, 1, menu.clientHeight + "px");
        rotateZElemet(icon, 180);
        activeDropdown = {
            container,
            icon
        }
    }

    isOpen = !isOpen;

    event.stopPropagation();
}


const setWindowsListeners = () => {
    window.addEventListener('click', (event) => {
        closeActiveMenu();
        event.stopPropagation();
    })
}

setWindowsListeners();



