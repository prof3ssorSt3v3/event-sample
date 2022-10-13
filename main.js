import { handleAccept, handleReject } from './dialog-event.js';
import { handleListClick, listData } from './list-event.js';

document.getElementById('btnAgree').addEventListener('click', handleAccept);
document.getElementById('btnReject').addEventListener('click', handleReject);

let sectionb = document.querySelector('.basics');
let span = document.querySelector('#inner p span');
span.addEventListener('click', handleSpanClick); //span is currentTarget
sectionb.addEventListener('click', handleSpanClick); //sectionb is currentTarget

function handleSpanClick(ev) {
  console.log(ev.target === span);
  console.log(ev.currentTarget === sectionb); //could be either depends which object called addEventListener
  ev.stopPropagation(); //stop the bubbling
  ev.preventDefault(); // don't do that thing you really wanna do
  // alert(ev.target.getAttribute('href'));
  // window.location.href = 'https://www.algonquincollege.com';
}

const list = document.querySelector('.list ul');
list.addEventListener('click', handleListClick);

document.addEventListener('DOMContentLoaded', (ev) => {
  list.innerHTML = listData
    .map((person) => {
      return `<li class="person" data-id="${person.id}">
        <h2>${person.name}</h2>
        <h3>${person.username}</h3>
        <p>${person.email}</p>
        <p>${person.company.catchPhrase}</p>
        <div>
          <span>${person.address.geo.lat}</span>
          <span>${person.address.geo.lng}</span>
        </div>
      </li>`;
    })
    .join('');
});
