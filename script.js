const qte = document.querySelector(".quote");
const btn = document.querySelector("#new-quote");

var quotes = [
  "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",

  "It’s not whether you get knocked down, it’s whether you get up.",
  "The question isn’t who is going to let me, it’s who is going to stop me.",
  "It is better to fail in originality than to succeed in imitation.",
  "Success is the sum of small efforts, repeated day-in and day-out.",
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  qte.innerText = quotes[random];
});
