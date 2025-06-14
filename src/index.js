import { addImage } from "./add-image.js";
import { helloWorld } from "./hello-world.js";
import { HelloWorldButton } from "./components/hello-world-button/hello-world-button";

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

helloWorld();
addImage();
