const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = 'Larry Opiyo is the champion'; 

document.body.appendChild(newHeader);
