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

const alpha = new Array(26);

alpha[0] = "A";
alpha[1] = "B";
alpha[2] = "C";
alpha[3] = "D";
alpha[4] = "E";
alpha[5] = "F";
alpha[6] = "G";
alpha[7] = "H";
alpha[8] = "I";
alpha[9] = "J";
alpha[10] = "K";
alpha[11] = "L";
alpha[12] = "M";
alpha[13] = "N";
alpha[14] = "O";
alpha[15] = "P";
alpha[16] = "Q";
alpha[17] = "R";
alpha[18] = "S";
alpha[19] = "T";
alpha[20] = "U";
alpha[21] = "V";
alpha[22] = "W";
alpha[23] = "X";
alpha[24] = "Y";
alpha[25] = "Z";

function start() {
  let text = "";

  for (let i = 0; i < 25; i++) {
    let elem = "alph" + i;
    text += `<div class="litera" onclick="alertElement('${i}')" id=${elem}>${alpha[i]}</div>`;
  }
  document.querySelector(".alfabet").innerHTML = text;

  createPassword();
}

String.prototype.changeSymbol = function (place, symbol) {
  if (place > this.length) {
    return this.toString();
  } else {
    console.log(this.substring(0, place));
    console.log(this.substring(place + 1));
    console.log(symbol);
    console.log(this.substring(0, place) + symbol + this.substring(place + 1));
    return this.substring(0, place) + symbol + this.substring(place + 1);
  }
};

function alertElement(nr) {
  for (let i = 0; i < phrase.length; i++) {
    if (phrase.charAt(i) === alpha[nr]) {
      hiddenPhrase = hiddenPhrase.changeSymbol(i, alpha[nr]);
    }
  }
  createPassword();
}
