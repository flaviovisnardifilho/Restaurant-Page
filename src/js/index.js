import '../css/style.css';
import loadAbout from './about';
import loadHome from './home';
import loadMenu from './menu';

function init() {
  const content = document.createElement('div');
  content.id = 'content';
  document.body.appendChild(content);

  const header = document.createElement('div');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.textContent = 'Amazing Smoothies';
  header.appendChild(title);

  const subTitle = document.createElement('h3');
  subTitle.textContent = 'Be surprised with our unconventional ingredients';
  header.appendChild(subTitle);

  const navButtons = document.createElement('nav');
  const navButtonHome = document.createElement('button');
  navButtonHome.textContent = 'Home';
  navButtons.appendChild(navButtonHome);

  const navButtonMenu = document.createElement('button');
  navButtonMenu.textContent = 'Menu';
  navButtons.appendChild(navButtonMenu);

  const navButtonAbout = document.createElement('button');
  navButtonAbout.textContent = 'About';
  navButtons.appendChild(navButtonAbout);

  header.appendChild(navButtons);
  content.appendChild(header);

  loadHome();
  loadMenu();
  loadAbout();
  
  const tabButtons = Array.from(document.querySelectorAll('button'));

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', changeTabs.bind(this, btn.textContent));
  });
}


function changeTabs(tab, e) {
    // from https://www.w3schools.com/howto/howto_js_tabs.asp

    const tabcontent = document.getElementsByClassName('tabcontent');
    Array.from(tabcontent).forEach((i) => {
      if (i.id !== tab.toLowerCase()) {
        i.style.display = 'none';
      } else {
        i.style.display = 'flex';
      }
    });
  }

init();
changeTabs('home');

