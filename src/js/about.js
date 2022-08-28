export default function loadAbout() {
  const content = document.querySelector('#content');

  const tabcontent = document.createElement('div');
  tabcontent.classList.add('tabcontent');
  tabcontent.id = 'about';

  const thanks = document.createElement('p');
  thanks.textContent = 'Thank you for choosing Amazing Smoothies!';
  thanks.id = 'thanks';
  tabcontent.appendChild(thanks);

  const notResponsible = document.createElement('p');
  notResponsible.textContent =
    "If you are not feeling very well after enjoy our smoothies, please don't bother us, just go to a hospital close to you. Good luck!";
  notResponsible.id = 'not-responsible';
  tabcontent.appendChild(notResponsible);
  content.appendChild(tabcontent);
}
