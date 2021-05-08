// script for fixed navbar
const nav = document.querySelector('.g-nav');
window.addEventListener('scroll', function() {
    nav.classList.toggle('fixed', scrollY > 0);
});
// end fixed navbar script

// script for custom load
const load = document.querySelector('.load');
window.addEventListener('beforeunload', function() {
    load.style.display = "flex";
});
// end custom load script

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
// end smooth scrolling script

// script for modal box
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
// end modal box script


// script for darkmode
const theme   = document.querySelector('.theme');
const footer  = document.querySelector('.g-footer');
const header  = document.querySelector('.g-header');

theme.addEventListener('click', darkTheme);

// function for darkmode
function darkTheme() {

  // declaration varible for darkmode
  document.body.classList.toggle('dark');
  theme.classList.toggle('dark');
  // end declaration variable darkmode

  // cek condition if user check toggle darkmode
  if(theme.classList.contains('dark')) {
    theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`;
    const svg = document.querySelector('.theme svg');
    svg.style.color = "black";

    const btn = document.querySelectorAll('.g-works .works-button button');
    for(button of btn) {
      button.style.color = "#fff";
    }
    
    const href = document.querySelector('.colaboration a');
    href.style.color = "#fff";
  
    // change background color and color footer
    footer.style.backgroundColor = "rgb(226, 146, 54)";
    const footerText = document.querySelector('.g-footer .footer-text h3');
    footerText.style.color = "rgb(247, 224, 197)";
    const footerCopyright = document.querySelector('.g-footer .footer-copy p');
    footerCopyright.style.color = "rgb(247, 224, 197)";
    header.style.background = "url(/img/bg1.svg";
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
    header.style.minHeight = "120vh";
  } else {
    theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>`;

    const btn = document.querySelectorAll('.g-works .works-button button');
    for(button of btn) {
      button.style.color = "#000";
    }

    const href = document.querySelector('.colaboration a');
    href.style.color = "rgb(83, 83, 83)";

    // change background color and color of footer
    footer.style.backgroundColor = "rgb(255, 216, 171)";
    const footerText = document.querySelector('.g-footer .footer-text h3');
    footerText.style.color = "rgb(196, 104, 0)";
    const footerCopyright = document.querySelector('.g-footer .footer-copy p');
    footerCopyright.style.color = "rgb(196, 104, 0)";
    header.style.background = "url(/img/bg.svg)";
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
    header.style.minHeight = "120vh";
  }
  // end condition for darkmode
}
// end darkmode script

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

// script for active menu
const menu = document.querySelectorAll('.g-nav-list ul li a');
menu.forEach(m => {
    m.addEventListener('click', (e) => {
        e.preventDefault();
        for(const m of menu) {
            m.classList.remove('active');
        }
        m.classList.add('active');
    });
});
// end active menu script

// Script for button tabs
const btn = document.querySelectorAll('.g-works .works-button button');
const img = document.querySelectorAll('.g-works .works-list .works-card');

btn.forEach(item => {
    item.addEventListener('click', () => {
        for(let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('active');
        }
        item.classList.add('active');

        // show image
        img.forEach(show => {
            show.style.display = 'none';
            show.style.transition = 'all 0.5s linear';
            let image = item.textContent.toLowerCase();
            if(show.getAttribute('data-att') === image || image === 'all') {
                show.style.display = "flex";
            }
        })
    });
})
// End button tabs

// script for hover text
const text = document.querySelector('.colaboration h3');
const huruf = [...text.textContent].map(h => `<span>${h}</span>`).join('');
text.innerHTML = huruf;