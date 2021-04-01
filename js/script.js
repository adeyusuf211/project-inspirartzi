const nav = document.querySelector('.g-nav');

window.addEventListener('scroll', function() {
    nav.classList.toggle('fixed', scrollY > 0);
});

const load = document.querySelector('.load');

window.addEventListener('beforeunload', function() {
    load.style.display = "flex";
});