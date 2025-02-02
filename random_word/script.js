const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(alphabet.length);

const randomLetter = () => {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

const randomWord = randomLetter() + randomLetter() + randomLetter() + randomLetter();

alert(randomWord);

