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
  if(theme.classList.contains('dark')) {
    theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`;
    const svg = document.querySelector('.theme svg');
    svg.style.color = "black";
  } else {
    theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>`;
  }
});
// end script

// script for custom cursor
// script for custom cursor
let mouse       = document.querySelector('.cursor');
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
// end custom cursor script