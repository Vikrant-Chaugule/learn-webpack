import "./hello-world-button.css";
import "./hello-world-button.scss";

export class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    const body = document.querySelector("body");

    button.innerHTML = "Hello World";
    button.classList.add("hello-world-button");

    button.onclick = () => {
      const p = document.createElement("p");
      p.innerHTML = "This is awesome!!";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
    body.appendChild(button);
    body.appendChild(document.createElement("br"));
  }
}
