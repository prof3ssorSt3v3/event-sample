import { handleAccept, handleReject } from './dialog-event.js';
import { handleListClick, listData } from './list-event.js';

const list = document.querySelector('.list ul');

document.addEventListener('DOMContentLoaded', (ev) => {
  list.innerHTML = listData
    .map((person) => {
      return `<li>${person.name}</li>`;
    })
    .join('');
});
