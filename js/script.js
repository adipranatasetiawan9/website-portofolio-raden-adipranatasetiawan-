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

// ==========================
// Counter Animation V6.6
// ==========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.dataset.target;

let count = 0;

const update = () => {

const increment = Math.max(1, Math.ceil(target / 40));

if(count < target){

count += increment;

if(count > target) count = target;

counter.textContent = count;

requestAnimationFrame(update);

}else{

counter.textContent = target;

if(target === 100){

counter.textContent = "100%";

}else{

counter.textContent = target + "+";

}

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter => {

counterObserver.observe(counter);

});

// ==========================
// Portfolio V6.7 Typing Animation
// ==========================

const typing = document.getElementById("typing");

if (typing) {

const words = [
"Informatics Engineering Student",
"Software Developer",
"Python Programmer",
"Web Developer",
"AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

const current = words[wordIndex];

if (!deleting) {

typing.textContent = current.substring(0, charIndex++);
if (charIndex > current.length) {
deleting = true;
setTimeout(typeEffect, 1500);
return;
}

} else {

typing.textContent = current.substring(0, charIndex--);
if (charIndex < 0) {
deleting = false;
wordIndex = (wordIndex + 1) % words.length;
}

}

setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

}

// ==========================
// Portfolio V6.8 Skill Animation
// ==========================

const skillsSection = document.querySelector(".skills");

if (skillsSection) {

const skillObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

document.querySelector(".html").style.width="90%";
document.querySelector(".css").style.width="85%";
document.querySelector(".js").style.width="75%";
document.querySelector(".python").style.width="88%";
document.querySelector(".mysql").style.width="80%";
document.querySelector(".git").style.width="78%";

}

});

});

skillObserver.observe(skillsSection);

}

// ==========================
// Portfolio V6.9 Active Navbar
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if (window.scrollY >= sectionTop &&
    window.scrollY < sectionTop + sectionHeight) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});

// ==========================
// Portfolio V7.0 Preloader
// ==========================

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

if(preloader){

preloader.style.opacity = "0";

setTimeout(() => {

preloader.style.display = "none";

},600);

}

});

