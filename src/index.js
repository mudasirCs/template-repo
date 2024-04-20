// import your function
import myName from "./myName";
import "./style.css";
import bunSrc from "../images/buns.png";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  element.classList.add("hello");

  const bun = new Image();
  bun.src = bunSrc;

  // use your function!
  element.textContent = myName("Cody");
  element.appendChild(bun);
  printMe();
  return element;
}

document.body.appendChild(component());
