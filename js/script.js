// ==========================
// Hamburger Menu
// ==========================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

});

}

// ==========================
// Navbar Scroll Effect
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// ==========================
// Back To Top
// ==========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

backToTop.style.display="block";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ==========================
// Fade Animation
// ==========================

const fades=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

fades.forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});

// ==========================
// DARK MODE
// ==========================

const themeToggle=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

themeToggle.textContent="☀️";

}

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeToggle.textContent="☀️";

}else{

localStorage.setItem("theme","light");

themeToggle.textContent="🌙";

}

});

// ==========================
// Developer Card Animation
// ==========================

const developerCards=document.querySelectorAll(".developer-card");

const developerObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

developerCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".8s";

developerObserver.observe(card);

});

// ==========================
// TIMELINE ANIMATION
// ==========================

const timelineItems=document.querySelectorAll(".timeline-item");

const timelineObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateX(0)";

}

});

});

timelineItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateX(-40px)";

item.style.transition=".8s";

timelineObserver.observe(item);

});

// ==========================
// CERTIFICATE ANIMATION
// ==========================

const certificateCards=document.querySelectorAll(".certificate-card");

const certificateObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

certificateCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(30px)";

card.style.transition=".8s";

certificateObserver.observe(card);

});

