import { data } from '../assets/data/data.js';
import {
  addClassElement,
  getQueryParameter,
  removeClassElement,
} from '../utils/helper.js';

export const welcome = () => {
  const welcomeElement = document.querySelector('.welcome');
  const homeElement = document.querySelector('.home');
  const navbarElement = document.querySelector('header nav');

  const [_, figureElement, weddingToElement, openWeddingButton] =
    welcomeElement.children;
  const [audioMusic, audioButton] = document.querySelector('.audio').children;
  const [iconButton] = audioButton.children;

  const generateFigureContent = (bride) => {
    const {
      L: { name: brideLName },
      P: { name: bridePName },
      couple: coupleImage,
    } = bride;
    return `
        <img class="flower flower-left" src="./src/assets/images/flower2.webp" alt="couple animation">
        <img class="flower flower-right" src="./src/assets/images/flower2.webp" alt="couple animation">
        <img class="avatar" src="${coupleImage}" alt="couple animation">
          <figcaption>
                ${brideLName.split(' ')[0]} & ${bridePName.split(' ')[0]}
          </figcaption>
        <img class="flower flower-bottom-left" src="./src/assets/images/flower3.webp" alt="couple animation">
        <img class="flower flower-bottom-right" src="./src/assets/images/flower3.webp" alt="couple animation">
    `;
  };

  const generateParameterContent = () => {
    const name = document.querySelector('#name');
    const params = getQueryParameter('to');

    if (params) {
      weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>${params}</span>`;
      name.value = params;
    } else {
      weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>Teman-teman semua</span>`;
    }
  };

  const initialAudio = () => {
    let isPlaying = false;

    audioMusic.innerHTML = `<source src=${data.audio} type="audio/mp3"/>`;

    audioButton.addEventListener('click', () => {
      if (isPlaying) {
        addClassElement(audioButton, 'active');
        removeClassElement(iconButton, 'bx-play-circle');
        addClassElement(iconButton, 'bx-pause-circle');
        audioMusic.play();
      } else {
        removeClassElement(audioButton, 'active');
        removeClassElement(iconButton, 'bx-pause-circle');
        addClassElement(iconButton, 'bx-play-circle');
        audioMusic.pause();
      }
      isPlaying = !isPlaying;
    });
  };

  openWeddingButton.addEventListener('click', () => {
    addClassElement(document.body, 'active');
    addClassElement(welcomeElement, 'hide');

    setTimeout(() => {
      addClassElement(homeElement, 'active');
      addClassElement(navbarElement, 'active');
      addClassElement(audioButton, 'show');
      removeClassElement(iconButton, 'bx-play-circle');
      addClassElement(iconButton, 'bx-pause-circle');
      audioMusic.play();
    }, 1500);

    setTimeout(() => {
      addClassElement(audioButton, 'active');
    }, 3000);
  });

  const initializeWelcome = () => {
    figureElement.innerHTML = generateFigureContent(data.bride);
    generateParameterContent();
    addClassElement(welcomeElement, 'active');
  };

  initializeWelcome();
  initialAudio();
};
