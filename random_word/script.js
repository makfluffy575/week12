const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(alphabet.length);

const randomLetter = () => {
  return alphabet[Math.round(Math.random()*26)];
};

const randomWord = randomLetter() + randomLetter() + randomLetter() + randomLetter();

alert(randomWord);

