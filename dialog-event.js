function handleReject(ev) {
  //not doing anything currently
}

function handleAccept(ev) {
  //remove the <div class="card"> from the page
  // ev.target.parentElement.parentElement
  let card = ev.target.closest('div.card');
  if (card) {
    //a parentElement with the class card was found
    card.remove();

    setTimeout(function () {
      document.querySelector('.dialog').append(card);
    }, 3000);
  }
}

export { handleAccept, handleReject };
