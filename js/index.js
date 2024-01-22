
let section = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')
window.onscroll = () => {
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}


//sticky header on scroll

// window.addEventListener("scroll", function(){
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky",window.scrollY > 0);
// })



//cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutLine = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // cursorOutLine.style.left = `${posX}px`;
    // cursorOutLine.style.top = `${posY}px`;

    cursorOutLine.animate({
        left:`${posX}px`,
        top:`${posY}px`
    }, { duration: 500, fill: "forwards"});

});

