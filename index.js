// const alfabet = document.querySelector(".alfabet");

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

window.onload = start;

function start() {
  let text = "";

  for (let i = 0; i < 34; i++) {
    text += i + "<div >A</div>";
  }
  document.querySelector(".alfabet").innerHTML = text;

  createPassword();
}
