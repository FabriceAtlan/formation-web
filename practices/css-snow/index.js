const nbflake = 5;
const listFlakes = [];
const containerFlake = document.querySelector('.flake');
const containerWidth = parseInt(getComputedStyle(containerFlake).width);
const containerHeight = parseInt(getComputedStyle(containerFlake).height);

for (let n = 0; n <= nbflake - 1; n++) {
  const newFlake = {};

  createFlake(n);
  
  listFlakes.push(newFlake);
}

for (let n = 0; n <= listFlakes.length - 1; n++) {
  const currentFlake = listFlakes[n];

  if (currentFlake.top >= containerHeight) {
    const flakeSize = Math.floor(Math.random() * (180 - 20 + 1)) + 20;
    const flakeLeft = Math.floor(Math.random() * (containerWidth - flakeSize + 1)) + flakeSize;

    currentFlake.style.width = flakeSize + 'px';
    currentFlake.style.left = flakeLeft + 'px';
  }
}

function createFlake(n) {
  const addFlake = document.createElement('img');
  const flakeSize = Math.floor(Math.random() * (180 - 20 + 1)) + 20;
  const flakeLeft = Math.floor(Math.random() * (containerWidth - flakeSize + 1)) + flakeSize;

  addFlake.src = 'asset/snowflake.png';
  addFlake.style.position = 'absolute';
  addFlake.style.width = flakeSize + 'px';
  addFlake.style.left = flakeLeft + 'px';
  addFlake.style.top = - flakeSize + 'px';

  const styleSheet = document.styleSheets[0];

  const animationName = `flakeAnimation${n}`;

  const keyframes = `
    @keyframes ${animationName} {
      0% {
        transform: translateY(${addFlake.style.top});
      }
      100% {
        transform: translateY(${containerHeight + flakeSize}px);
      }
    }
  `
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  addFlake.style.animation = `${animationName} 5s linear infinite`;
  containerFlake.appendChild(addFlake);
}