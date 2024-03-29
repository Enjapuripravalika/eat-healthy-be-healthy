console.log("hello world!");

const myName ="Enjapuri";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);



// h1.addEventListener("click", function () {
//     h1.textContent = myName;
// h1.style.backgroundColor ="skyblue";
// h1.style.padding ="5rem";
// });
// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent =currentYear;

// mobile navigation work


const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl =document.querySelector(".header");

btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open');

});
// \\\\\\\\\\\\\\\\\\\\\\
// smooth scrolling animation

// const allLinks =document.querySelectorAll("a:link");


// allLinks.forEach(function (link) {
//     link.addEventListener("click", function (e) {
//         e.preventDefault();
//         const href = link.getAttribute("href");
//         console.log(href);

//         // scroll back to top
//         if (href === "#")
//         window.scrollTo({
//     top: 0,
// behaviour: "smooth",
// });
// });
// });

// sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        // in the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionHeroEl);

// form
const form = document.getElementById('cta-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbyTo81NlUroY5SNQbJm0n_fSGXjYrLIrcQyCquwmgCNOlsDTIq_JWr2Qs_vJmthfn60/exec', {
            method: "POST",
            body: data
        })
        .then(res => res.json())
        .then(data => console.log(data));
})