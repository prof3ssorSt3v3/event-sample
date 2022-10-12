function handleReject(ev) {}

function handleAccept(ev) {
  // return function(){
  //   console.log('Booya');
  // }
  let btn = ev.target; //this is the button that was clicked
  let card = btn.closest('.card');
  if (card) {
    card.remove();
  }
}

export { handleAccept, handleReject };
