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


// script for darkmode
const theme = document.querySelector('.theme');

theme.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  theme.classList.toggle('dark');
});
// end script

// script for custom cursor
// script for custom cursor
let mouse       = document.querySelector('.cursor');
const p         = document.querySelectorAll('p');
const h3        = document.querySelectorAll('h3');
const h4        = document.querySelectorAll('h4');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouse.style.top   = e.pageY + 'px';
    mouse.style.left  = e.pageX + 'px';
}

h3.forEach(h3 => {
    h3.addEventListener('mouseover', () => {
        mouse.classList.add('link-grow');
    });
    h3.addEventListener('mouseleave', () => {
        mouse.classList.remove('link-grow');
    });
});

h4.forEach(h4 => {
  h4.addEventListener('mouseover', () => {
      mouse.classList.add('link-grow');
  });
  h4.addEventListener('mouseleave', () => {
      mouse.classList.remove('link-grow');
  });
});

p.forEach(p => {
  p.addEventListener('mouseover', () => {
    mouse.classList.add('p-link-grow');
  });
    p.addEventListener('mouseleave', () => {
      mouse.classList.remove('p-link-grow');
  });
})
// end custom cursor script