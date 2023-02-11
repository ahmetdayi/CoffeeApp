let menuItemStyle = document.querySelector(".header-menu").style;
menuItemStyle.height="0px"
let menuToggle = ()=>{
    if(menuItemStyle.height ==="0px"){
        menuItemStyle.height="250px"
    }
    else if(menuItemStyle.height ==="250px"){
        menuItemStyle.height = "0px"
    }
}
//SCROLLREVEAL
ScrollReveal().reveal('.reveal-photo-item1', {delay:250});
ScrollReveal().reveal('.reveal-photo-item2', {delay:500});
ScrollReveal().reveal('.reveal-photo-item3', {delay:750});
ScrollReveal().reveal('.reveal-photo-item4', {delay:1000});
ScrollReveal().reveal('.reveal-photo-item5', {delay:1250});
ScrollReveal().reveal('.reveal-photo-item6', {delay:1500});
ScrollReveal().reveal('.reveal-photo-item7', {delay:1750});
ScrollReveal().reveal('.reveal-photo-item8', {delay:2000});

window.sr = ScrollReveal();
sr.reveal('.anim-left',{
    origin:'left',
    duration:'1000',
    distance:'25rem',
    delay:'300'
});

sr.reveal('.anim-right',{
    origin:'right',
    duration:'1000',
    distance:'25rem',
    delay:'300'
});

sr.reveal('.anim-top',{
    origin:'top',
    duration:'1000',
    distance:'25rem',
    delay:'600'
});
sr.reveal('.anim-bottom',{
    origin:'bottom',
    duration:'1000',
    distance:'25rem',
    delay:'600'
});