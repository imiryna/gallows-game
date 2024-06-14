const alfabet = document.querySelector(".alfabet");

const phrase = "BEGGARS CANNOT BE CHOOSERS";

let hiddenPhrase = "";

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] === " ") {
    hiddenPhrase = hiddenPhrase + " ";
  } else {
    hiddenPhrase = hiddenPhrase + "-";
  }
}

function createPassword() {
  document.querySelector(".password").innerHTML = hiddenPhrase;
}

function start() {
    let scope = "";

    for(let i = 0; i <34; i++)
  alfabet.innerHTML() = scope;


  createPassword();
}
window.onload = start;