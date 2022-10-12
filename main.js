import { handleAccept, handleReject } from './dialog-event.js';
import { handleListClick, listData } from './list-event.js';

//Add the content to the UL when the DOM has finished loading
const list = document.querySelector('.list ul');
document.addEventListener('DOMContentLoaded', (ev) => {
  list.innerHTML = listData
    .map((person) => {
      return `<li class="person" data-id="${person.id}">
        <h3>${person.username}</h3>
        <h4>${person.email}</h4>
        <p>${person.company.catchPhrase}</p>
        <div>
          <span>${person.address.geo.lat}</span><span>${person.address.geo.lng}</span>
        </div>
      </li>`;
    })
    .join('');

  list.addEventListener('click', handleEmail);
});

function handleEmail(ev) {
  if (ev.target.tagName == 'H4') {
    //user clicked a h4 inside of the ul
    console.log(ev.target.textContent);
    let email = ev.target.textContent;
    let userid = +ev.target.closest('.person').getAttribute('data-id');
    // unary plus + is shorthand for converting string to number
    alert(`User ${userid} has the address ${email}`);
  }
}

//Buttons in the Dialog
document.getElementById('btnAgree').addEventListener('click', handleAccept);
document.getElementById('btnReject').addEventListener('click', handleReject); //just the name of the function

let span = document.querySelector('.basics span');
span.addEventListener('click', spanClick);
span.addEventListener('mouseover', spanOver);
span.addEventListener('mouseout', spanOut);

let sectionB = document.querySelector('.basics');
sectionB.addEventListener('click', sectionClick);
function sectionClick(ev) {
  // console.log({ ev });
  console.log(ev.target);
  console.log(ev.currentTarget);
}

function spanClick(ev) {
  // console.log({ ev });

  console.log(ev.target);
  console.log(ev.currentTarget);
  //ev.target  // span
  //ev.type    // click
  // ev.x ev.y
  ev.preventDefault();
  ev.stopPropagation();

  // window.location.href = 'https://www.algonquincollege.com';
}
function spanOver(ev) {}
function spanOut(ev) {}
