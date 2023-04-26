refs = {
  BtnStart: document.querySelector('button[data-start]'),
  BtnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body')
}

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.BtnStart.addEventListener('click', () => {
  refs.BtnStart.disabled = true;
  refs.BtnStop.disabled = false;
    intervalId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

    refs.BtnStop.addEventListener('click', () => {
      refs.BtnStop.disabled = true;
  refs.BtnStart.disabled = false;
  clearInterval(intervalId);
    });
