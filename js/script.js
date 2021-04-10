const nav = document.querySelector('.g-nav');

window.addEventListener('scroll', function() {
    nav.classList.toggle('fixed', scrollY > 0);
});

const load = document.querySelector('.load');

window.addEventListener('beforeunload', function() {
    load.style.display = "flex";
});

// script for smooth scrolling
const links = document.querySelectorAll(".g-nav-list a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
// end script

const modal     = document.getElementById('talk');
const modalTalk = document.querySelector('.modal');
const close     = document.getElementById('close');
const span      = document.getElementById('span');

modal.addEventListener('click', (e) => {
  modalTalk.style.display = "grid";
});

close.addEventListener('click', function(e) {
  modalTalk.style.display = "none";
});

span.addEventListener('click', function() {
  modalTalk.style.display = "none";
});