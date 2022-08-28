import broccoliSmoothie from '../assets/img/pexels-alisha-mishra-1346347.jpg'
import warmIceBlue from '../assets/img/pexels-moldy-vintages-8573731.jpg'
import bananaPeel from '../assets/img/pexels-alleksana-4051785.jpg'
import alltheStuff from '../assets/img/pexels-valeria-boltneva-1169004.jpg'
import christmasSpecial from '../assets/img/pexels-annelies-brouw-3523148.jpg'
import eletricalMango from '../assets/img/pexels-vd-photography-12912638.jpg'
import chefLeftovers from '../assets/img/pexels-roman-odintsov-4551975.jpg'
import cabbageSmoothie from '../assets/img/pexels-kelvin-octa-7190365.jpg'
const smoothies = [
    {
        title: 'Pure-ish Broccoli Smoothie',
        image: {
            src: broccoliSmoothie,
            imageAlt: 'Broccoli smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/clear-glass-bottle-filled-with-broccoli-shake-1346347/',
            attributionText: 'Alisha Mishra',
        },
        description: 'Made with the greenest broccoli, secret spices and backyard grass',

    },
    
    {
        title: 'Warm Ice Blue',
        image: {
            src: warmIceBlue,
            imageAlt: 'Blue smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/glass-with-blue-liquid-and-whipped-cream-8573731/',
            attributionText: 'moldy vintages',
        },
        description: 'The blue stuff from the frezzer defrost with some shell powder topping',

    },
    
    {
        title: 'Banana\'s Peel Special',
        image: {
            src: bananaPeel,
            imageAlt: 'Banana smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/food-cold-relaxation-summer-4051785/',
            attributionText: 'alleksana',
        },
        description: 'All the peel you\'d like in a banana smoothie and more!',

    },

    {
        title: 'All the stuff from that box',
        image: {
            src: alltheStuff,
            imageAlt: 'All you can fit smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/person-holding-saucer-with-mug-of-chocolate-ice-cream-coffee-1169004/',
            attributionText: 'Valeria Boltneva',
        },
        description: 'For avid tasters, everything that fits in the mug',

    },

    {
        title: 'Christmas Special',
        image: {
            src: christmasSpecial,
            imageAlt: 'Christmas smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/ice-cream-on-glass-with-cookies-on-top-3523148/',
            attributionText: 'Annelies Brouw',
        },
        description: 'Christmas tree leaves and seeds, for that nostalgic taste',

    },

    {
        title: 'Eletrical Mango',
        image: {
            src: eletricalMango,
            imageAlt: 'Mango smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/clear-drinking-glass-with-yellow-liquid-on-brown-wooden-coaster-12912638/',
            attributionText: 'VD',
        },
        description: 'Traditional frog spawn mixed with mango and topped with eletrical wire scraps',

    },
    {
        title: 'Chef\'s Red Leftovers',
        image: {
            src: chefLeftovers,
            imageAlt: 'Red leftovers smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/apple-and-beetroot-smoothie-4551975/',
            attributionText: 'ROMAN ODINTSOV',
        },
        description: 'Only the best leftovers from the chef\'s house',

    },
    {
        title: 'Cabbage Smoothie',
        image: {
            src: cabbageSmoothie,
            imageAlt: 'Cabbage smoothie',
            width: 150,
            attributionHref: 'https://www.pexels.com/photo/fruit-salad-with-yoghurt-in-plastic-jars-on-chopping-board-beside-mango-7190365/',
            attributionText: 'kelvin octa',
        },
        description: 'Lightly seasoned cabbage smoothie, combine with mango or strawberry',

    },
]

const smoothieFactor = ((smoothie)=>{
    const smoothieSection = document.createElement('section');
    smoothieSection.classList.add('smoothie')
    const title = document.createElement('h2')
    title.textContent = smoothie.title
    title.classList.add('title')

    smoothieSection.appendChild(title)
    const smoothieContent = document.createElement('div')
    smoothieContent.classList.add('smoothieContent')
    const smoothiePhoto = document.createElement('div')
    smoothiePhoto.classList.add('smoothiePhoto')

    const openImage = document.createElement('img');
    openImage.src = smoothie.image.src;
    openImage.alt = smoothie.image.alt;
    openImage.width = smoothie.image.width; //150

    const pAttribution = document.createElement('p');
    pAttribution.textContent = 'Photo by ';
    const aAttribution = document.createElement('a');
    aAttribution.href =smoothie.image.attributionHref;
    aAttribution.textContent = smoothie.image.attributionText;
    pAttribution.appendChild(aAttribution);
    
    smoothiePhoto.appendChild(openImage);
    smoothiePhoto.appendChild(pAttribution);
    smoothieContent.appendChild(smoothiePhoto)

    const description = document.createElement('div')
    description.classList.add('smoothie-description')
       const descriptionText = document.createElement('p');
    descriptionText.classList.add('smoothie-description-text')
    descriptionText.textContent = smoothie.description;
    description.appendChild(descriptionText)

    const price = document.createElement('p');
    price.classList.add('price')
    price.textContent = `$${Math.round((Math.random() * 14 + 9))},99`;
    description.appendChild(price)
    
    smoothieContent.appendChild(description)
    smoothieSection.appendChild(smoothieContent)


    return smoothieSection

})

export default function loadMenu() {
    const content = document.querySelector('#content');

    const tabcontent = document.createElement('div');
    tabcontent.classList.add('tabcontent');
    tabcontent.id = 'menu';

    Array.from(smoothies).forEach(i=> {
        console.log(i)
     tabcontent.appendChild(smoothieFactor(i))
    })

    content.appendChild(tabcontent);
  }

