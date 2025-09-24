let banner_arr = ['0',
    '1', '2', '3',
    '4', '5', '6'];
let show;
let index = 0;

function pluss(next) {
    index += next;
    if (index < 0) {
        index = 6;
    }
    else if (index > banner_arr.length - 1) {
        index = 0;
    }
    slideShow(index);
}

function slideShow(value) {
    index = value;
    document.getElementById('sliders').style.background = `url('assets/img/banner/banner_${index}.webp') lightblue top center / cover no-repeat`;
    let dots = document.getElementsByClassName("ti-control-record");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      dots[index].className += " active";
}

// Mobile menu toggle function
function toggleMobileMenu() {
    const nav = document.getElementById('nav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.className = 'ti-menu';
    } else {
        nav.classList.add('open');
        menuBtn.className = 'ti-close';
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav a');
    const nav = document.getElementById('nav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                menuBtn.className = 'ti-menu';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const nav = document.getElementById('nav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!nav.contains(event.target) && !menuBtn.contains(event.target) && nav.classList.contains('open')) {
            nav.classList.remove('open');
            document.querySelector('.mobile-menu-btn i').className = 'ti-menu';
        }
    });
});

show = setInterval('pluss(1)', 4000);