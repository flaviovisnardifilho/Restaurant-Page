import coverImage from '../assets/img/smoothie-clipart-md.png'

export default function loadHome() {
  const content = document.querySelector('#content');

  const tabcontent = document.createElement('div');
  tabcontent.classList.add('tabcontent');
  tabcontent.id = 'home';

  const openImage = document.createElement('img');
  openImage.src = coverImage;
  
  openImage.alt = 'Green smoothie';
  openImage.height = '350';
  tabcontent.appendChild(openImage);

  const pAttribution = document.createElement('p');
  pAttribution.classList.add('interior-attribution');
  pAttribution.textContent = 'Clipart by ';
  const aAttribution = document.createElement('a');
  aAttribution.href =
    'https://creazilla.com/nodes/1795339-smoothie-clipart';
  aAttribution.textContent = 'Creazilla';
  pAttribution.appendChild(aAttribution);
  tabcontent.appendChild(pAttribution);

  const footerText = document.createElement('h3');
  footerText.textContent = 'Come and taste our insanely delicious smoothies!';
  tabcontent.appendChild(footerText);

  content.appendChild(tabcontent);
}
