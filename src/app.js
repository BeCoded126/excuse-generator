/* eslint-disable */
import "bootstrap";
import "./style.css";

const who = ["MY DOG", "MY CAT", "MY GRANDPA", "MY GOAT"];
const action = ["GULPED", "STEPPED ON", "DESTROYED", "HIT"];

const item = ["MY PIZZA", "MY AUNTIE", "MY NIGHTSTAND", "MY CAR"];

const when = [
  "LAST NIGHT",
  "WHILE I WAS NAPPING",
  "WHEN I WAS AT WORK",
  "WHEN I WAS IN THE BATHROOM"
];

window.onload = function() {
  const randomExcuse = Math.floor(Math.random() * who.length);
  const randomExcuse2 = Math.floor(Math.random() * action.length);
  const randomExcuse3 = Math.floor(Math.random() * item.length);
  const randomExcuse4 = Math.floor(Math.random() * when.length);
  document.getElementById("excuse").innerHTML =
    `${who[randomExcuse]}` +
    ` ${action[randomExcuse2]}` +
    ` ${item[randomExcuse3]}` +
    ` ${when[randomExcuse4]}` +
    `.`;
};
