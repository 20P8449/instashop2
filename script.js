let menu = document.querySelector ('#menu-bar');
let navbar = document.querySelector ('.navbar');
let header = document.querySelector ('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times'); 
    navbar.classList.toggle('active');
});
window.onscroll = () =>{
    menu.classList.remove('fa-times');  
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classlist.add ('active');   
    }else{
        header.classlist.remove('active');
    }
}

let countDate = new Date( 'june 1, 2021 00:00:00').getTime();
function CountDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math. floor (gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math. floor ((gap % (hour)) / (minute));
    let s = Math. floor((gap % (minute)) / (second));

    document.getElemetById('day').innertext = d;
    document. getElemetById('hour').innertext = h;
    document.getElemetById('minute').innertext = m;
    document. getElemetById('second').innertext = s;
}

setInterval(function(){
    CountDown();
},1000)
