const bg = document.getElementById('main_bg');
window.addEventListener('scroll', function () {
    bg.style.backgroundSize = 160 - +window.scrollY / 12 + '%'
    bg.style.opacity = 1 - +window.scrollY / 700 + '';
})

const menu = document.querySelector('.header_btn');
menu.addEventListener('click', function () {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
});



const co = document.getElementsByClassName('cl');
window.addEventListener('scroll', function () {
    if (window.scrollY > 600) {
        for (let i = 0; i < co.length; i++) {
            co[i].style.color = '#0500e8'; 
        }
    } else {
        for (let i = 0; i < co.length; i++) {
            co[i].style.color = '#000';  
        }
    }
});


const co1 = document.querySelectorAll('.cl>a');
window.addEventListener('scroll', function () {
    if (window.scrollY > 600) {
        for (let i = 0; i < co1.length; i++) {
            co1[i].style.color = '#0500e8'; 
        }
    } else {
        for (let i = 0; i < co1.length; i++) {
            co1[i].style.color = '#000';  
        }
    }
});






const headerMenu=document.querySelector(".header_menu>button");
const subBar=document.querySelector(".header_main_menu");

let subToggle=true;
function show_sub(){
  if(subToggle){
    subBar.style.top="-5px";
  }else{
    subBar.style.top="50px";
}
subToggle=!subToggle;
  
}

headerMenu.addEventListener("click",show_sub);



function fadeIn(element, duration) {
    element.style.opacity = 0;
    element.style.display = 'block';
    let opacity = 0;
    const increment = 50 / duration;

    return new Promise((resolve) => {
        const fadeInInterval = setInterval(() => {
            if (opacity < 1) {
                opacity += increment;
                element.style.opacity = opacity;
            } else {
                clearInterval(fadeInInterval);
                resolve(); 
            }
        }, 50);
    });
}

function fadeOut(element, duration) {
    let opacity = 1;
    const decrement = 50 / duration;

    return new Promise((resolve) => {
        const fadeOutInterval = setInterval(() => {
            if (opacity > 0) {
                opacity -= decrement;
                element.style.opacity = opacity;
            } else {
                clearInterval(fadeOutInterval);
                element.style.display = 'none';
                resolve(); 
            }
        }, 50);
    });
}

async function startFadeInOutSequence() {
    const points = document.querySelectorAll('.KwangJu_point > li');

    while (true) {
        for (const point of points) {
            await fadeIn(point, 1500);  
            await new Promise(resolve => setTimeout(resolve, 300));  
            await fadeOut(point, 1500); 
            await new Promise(resolve => setTimeout(resolve, 300)); 
        }
    }
}
window.onload = startFadeInOutSequence;

let isScrolling;
window.addEventListener("scroll", function () {
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(scroll, 50);
});


function scroll() {
    let scrollTop = window.pageYoffset || document.documentElement.scrollTop;

    document.querySelectorAll(".f_vi").forEach(item => {
        if (scrollTop > item.offsetTop - window.innerHeight) {
            item.classList.add("show");
        }
        if (scrollTop < item.offsetTop - window.innerHeight) {
            item.classList.remove("show");
        }
    });
    document.querySelectorAll(".KwangJu_point").forEach(item => {
        if (scrollTop > item.offsetTop - window.innerHeight) {
            item.classList.add("show1");
        }
        if (scrollTop < item.offsetTop - window.innerHeight) {
            item.classList.remove("show1");
        }
    });
    document.querySelectorAll(".dokdo_img").forEach(item => {
        if (scrollTop > item.offsetTop - window.innerHeight) {
            item.classList.add("show2");
        }
        if (scrollTop < item.offsetTop - window.innerHeight) {
            item.classList.remove("show2");
        }
    });
    document.querySelectorAll(".k_img").forEach(item => {
        if (scrollTop > item.offsetTop - window.innerHeight) {
            item.classList.add("show4");
        }
        if (scrollTop < item.offsetTop - window.innerHeight) {
            item.classList.remove("show4");
        }
    });
    document.querySelectorAll(".k_vi").forEach(item => {
        if (scrollTop > item.offsetTop - window.innerHeight) {
            item.classList.add("show3");
        }
        if (scrollTop < item.offsetTop - window.innerHeight) {
            item.classList.remove("show3");
        }
    });


    const whoIntro = document.querySelector(".who_intro_sp");
    const startPoint = whoIntro.offsetTop;

    
    if (scrollTop > startPoint - window.innerHeight && scrollTop < startPoint + whoIntro.offsetHeight) {       
        whoIntro.querySelectorAll("span").forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("sh");  
                item.style.opacity = '1';  
                item.style.transform = 'translateY(0)'; 
            }, 300); 
        });
    } 
    else if (scrollTop < startPoint) {
        whoIntro.querySelectorAll("span").forEach((item) => {
            item.style.opacity = '0'; 
            item.classList.remove("sh"); 
            item.style.transform = 'translateY(70%)'; 
        });
    }

}
document.querySelectorAll('.menu-link').forEach(menuLink => {
    menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        const headerHeight = document.querySelector(".header_main_menu").offsetHeight;
        const targetLocation = targetElement.offsetTop;
        setTimeout(() => {
            window.scrollTo({
                top: targetLocation - headerHeight,
                behavior: 'smooth'
            });
        }, 50); 
    });
});