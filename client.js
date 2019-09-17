let card0 = {
  suit: 'hearts',
  number: 2
} //end card0

let card1 = {
  suit: 'spades',
  number: 1
}

function isRed(cardToCheck) {
  console.log('in isRed:', cardToCheck);
  if (cardToCheck.suit === 'hearts' || cardToCheck === 'diamonds'){
    return true;
  } //end if
  else {
    return false;
  }
} // end isRed

console.log(isRed(card0));
console.log(isRed(card1));
