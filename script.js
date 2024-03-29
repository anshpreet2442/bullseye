const buttonText = document.querySelector('.button-text');
const buttonTextCharactersContainer = document.querySelector('.button-text-characters-container');

const buttonTextCharacters = buttonText.textContent.split('');

const characterCountWithoutWhitespaces = buttonTextCharacters.filter(character => character => !/\s/.test(character)).length;

const buttonTextCharactersFragment = document.createDocumentFragment();

let characterIndex = 1;

buttonTextCharacters.forEach(character => {
  const span = document.createElement('span');
  span.textContent = character;

  if (!/\s/.test(character)) {
    span.classList.add('button-text-character');
    const delay = `calc(2s / ${characterCountWithoutWhitespaces} * ${characterIndex} + 1s)`;
    span.style.setProperty('--delay', delay);

    characterIndex++;
  }
  
  buttonTextCharactersFragment.appendChild(span);
});

buttonTextCharactersContainer.appendChild(buttonTextCharactersFragment);













const image = new Image();
image.src = 'https://assets.codepen.io/4175254/twitter-shine-rotate.gif';

document.body.insertAdjacentHTML('beforeend', `
  <a class="_twitter-link" href="https://twitter.com/festive_world" target="_top">
    <img class="_twitter-image" src="https://assets.codepen.io/4175254/twitter-shine.gif" alt="">
    <span style="position: absolute; top: auto; overflow: hidden; clip: rect(1px, 1px, 1px, 1px); width: 1px; height: 1px; white-space: nowrap;">https://twitter.com/festive_world</span>
  </a>
  
  <style>
  ._twitter-link {
    display: block;
    position: fixed;
    z-index: 9999;
    right: 12px;
    bottom: 12px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: outline-offset .2s cubic-bezier(.65, 1.35, .5, 1);
  }
  
  ._twitter-link:focus-visible {
    outline: 2px dotted rgb(0 0 255 / .6);
    outline-offset: 4px;
  }
  
  ._twitter-image {
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }

  ._twitter-link::after {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    width: calc(100% + 24px);
    height: calc(100% + 24px);
  }
  </style>
`);

const twitterLink = document.querySelector('._twitter-link');
const twitterImage = document.querySelector('._twitter-image');

twitterLink.addEventListener('mouseenter', () => {
  twitterImage.src = 'https://assets.codepen.io/4175254/twitter-shine-rotate.gif';
});

twitterLink.addEventListener('mouseleave', () => {
  twitterImage.src = 'https://assets.codepen.io/4175254/twitter-shine.gif';
});

twitterLink.addEventListener('focus', () => {
  twitterImage.src = 'https://assets.codepen.io/4175254/twitter-shine-rotate.gif';
});

twitterLink.addEventListener('blur', () => {
  twitterImage.src = 'https://assets.codepen.io/4175254/twitter-shine.gif';
});
