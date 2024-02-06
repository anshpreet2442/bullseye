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