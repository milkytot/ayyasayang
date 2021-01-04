var i = 0;
var txt = "Halo sayanggku, Makasih ya udah mau nerima aku. Maafin aku, aku sering bikin kamu badmood, bikin kamu marah, sering sedih. Aku bener bener minta maaf ya ayanngg. BTW Happy birthday sayangg, semoga semua yang kamu inginkan bisa tercapai secepatnya, semoga kamunya makin sayangg sama aku 💜"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("paragraf").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}